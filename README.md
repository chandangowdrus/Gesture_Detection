Sure! Here's the **complete `README.md` content** for your hand gesture detection project, all in **one single copy-paste block**:

---

```markdown
# Hand Gesture Detection using p5.js & MediaPipe

This project detects hand gestures in real-time using your webcam, powered by [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands) and [p5.js](https://p5js.org/). It identifies gestures like **Circle**, **Rectangle**, and a custom finger-cross gesture that counts each time it's performed.

---

## 🔥 Features

- 👋 Detects hand landmarks using MediaPipe Hands
- 🟢 **Circle Detection** – when thumb and index finger of one hand touch
- 🟥 **Rectangle Detection** – when left thumb touches right index **and** left index touches right thumb
- 🔢 **Custom Gesture Counter** – counter increases only when one of the above cross-finger touches occurs (but not both)
- 🎥 Works in real-time using your webcam

---

## 📁 Folder Structure

```

/your-project-folder
│
├── index.html       # The main HTML file to run in browser
├── sketch.js        # p5.js script for detection and logic
├── README.md        # This file

````

---

## 🚀 How to Run This Project

1. Clone or download this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/gesture-detection.git
````

2. Navigate into the folder and open `index.html` in your preferred browser (Google Chrome recommended).

3. Allow webcam permissions when prompted.

4. Try the gestures in front of your webcam:

   * Make a circle with thumb and index of one hand
   * Touch your left thumb to right index OR left index to right thumb to increase the count
   * Do both cross-finger touches to trigger the "Rectangle" gesture

---

## ✅ Gesture Summary

| Gesture      | Condition                                                          | Result               |
| ------------ | ------------------------------------------------------------------ | -------------------- |
| Circle       | Thumb touches index of **same hand**                               | Displays "Circle"    |
| Rectangle    | Left thumb ↔ right index **AND** left index ↔ right thumb          | Displays "Rectangle" |
| Custom Count | Only one of the above cross-finger combinations (not both at once) | Increases counter    |

---

## 📦 Built With

* [p5.js](https://p5js.org/)
* [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands)
* [CameraUtils](https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils)

All libraries are included via CDN in the `index.html` file.

---

## 🧑‍💻 Author

**Chandan S**
Built during a 2-day AI/ML Bootcamp conducted by **Incerebrum**

---

## 📬 Contact

* 📧 [naveenkumar2000r@gmail.com](mailto:naveenkumar2000r@gmail.com)
* 📍 Bangalore, India
* 🌐 [LinkedIn](https://www.linkedin.com/in/your-profile) *(optional)*

---

## ✨ Future Improvements (Optional Ideas)

* Add voice feedback for gestures
* Save gesture count using `localStorage`
* Support more gestures (peace ✌️, fist ✊, etc.)
* Host the app live using GitHub Pages

---

> Thank you for checking out this project! Feel free to fork, modify, and build your own version of gesture-based applications 🚀

```

---

📌 **Instructions:**
- Just copy and paste this into a file named `README.md` in your project folder.
- Replace `"your-profile"` in the LinkedIn URL if you'd like to add your real profile.

Let me know if you'd like a version tailored for uploading to GitHub Pages or a portfolio!
```
