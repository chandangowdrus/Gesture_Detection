
let videoStream;
let handDetector;
let allHands = [];

let customGestureCount = 0;
let alreadyCounted = false;

function setup() {
  createCanvas(640, 480);

  videoStream = createCapture(VIDEO);
  videoStream.size(width, height);
  videoStream.hide();

  handDetector = new Hands({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
  });

  handDetector.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7
  });

  handDetector.onResults(storeResults);

  const cam = new Camera(videoStream.elt, {
    onFrame: async () => {
      await handDetector.send({ image: videoStream.elt });
    },
    width: width,
    height: height
  });

  cam.start();
}

function draw() {
  image(videoStream, 0, 0, width, height);

  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();

  // draw landmarks
  if (allHands.length > 0) {
    for (let hand of allHands) {
      for (let point of hand) {
        let px = point.x * width;
        let py = point.y * height;
        circle(px, py, 6);
      }
    }
  }

  // check which gesture
  let gestureName = checkGesture(allHands);

  // show gesture name in floating div
  document.getElementById("gesture").innerText = gestureName || "Detecting...";

  // show count
  fill(255);
  textSize(20);
  text("Gesture Count: " + customGestureCount, 10, height - 15);
}

function storeResults(results) {
  if (results.multiHandLandmarks) {
    allHands = results.multiHandLandmarks;
  } else {
    allHands = [];
  }
}

function checkGesture(hands) {
  if (hands.length === 1) {
    let thumbTip = hands[0][4];
    let indexTip = hands[0][8];
    let dist1 = dist(thumbTip.x, thumbTip.y, indexTip.x, indexTip.y);

    if (dist1 < 0.05) {
      return "Circle";
    }
  }

  if (hands.length === 2) {
    let h1 = hands[0];
    let h2 = hands[1];

    let leftThumb = h1[4];
    let leftIndex = h1[8];
    let rightThumb = h2[4];
    let rightIndex = h2[8];

    let thumbToIndex = dist(leftThumb.x, leftThumb.y, rightIndex.x, rightIndex.y);
    let indexToThumb = dist(leftIndex.x, leftIndex.y, rightThumb.x, rightThumb.y);

    let touching1 = thumbToIndex < 0.05;
    let touching2 = indexToThumb < 0.05;

    // if both cross touches, it's rectangle
    if (touching1 && touching2) {
      return "Rectangle";
    }

    // if only one of them is touching, count it
    if ((touching1 || touching2) && !(touching1 && touching2)) {
      if (!alreadyCounted) {
        customGestureCount += 1;
        alreadyCounted = true;
      }
      return "Custom Gesture (" + customGestureCount + ")";
    } else {
      alreadyCounted = false;
    }
  }

  return "";
}
