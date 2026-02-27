# 🚀 Node.js Feature Hub

A collection of modern, full-stack applications built with **Node.js 25** and **Express**. This repository showcases real-world implementations of Geolocation, Cloud Storage, and Real-Time communication.

---

## 🏗️ Project Roadmap

### ☁️ 1. Weather Forecast Engine
*Get the weather, wherever you are.*
* **Geolocation Integration:** Leverages the Browser Geolocation API to detect user location automatically.
* **Real-time Data:** Fetches live weather conditions via the Weather Forecast API.
* **Dynamic Search:** Allows users to manually type in any city for a detailed weather breakdown.

### 📝 2. Visual Todo List
*Don't just write it, visualize it.*
* **Image Uploads:** Powered by `Multer`—attach reference images, screenshots, or photos to specific tasks.
* **Categorization:** Organize tasks by priority and deadline.
* **Persistence:** Fully integrated database support to keep your tasks saved.

### 💬 3. Real-Time Chat App
*Instant connection in any room.*
* **Room Selection:** Join a list of existing "Active Rooms" or forge your own path by typing a custom room name.
* **WebSockets:** Instant messaging with zero refresh, powered by `Socket.io`.
* **User Presence:** See who is currently active in your chat room.

---

## 🛠️ Tech Stack & Compatibility

* **Runtime:** Node.js v25.5.0+
* **Server Framework:** Express 5.0
* **Templating:** Handlebars (HBS)
* **Styling:** Custom CSS3

> [!IMPORTANT]
> **Node 25 Compatibility Note:** > In this environment, `path-to-regexp` is strict. All wildcard routes must be named to avoid server crashes.
>
> **✅ Correct:** `app.get('*any', ...)`  
> **❌ Incorrect:** `app.get('*', ...)`

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/dip-ghosh/web-server.git](https://github.com/dip-ghosh/web-server.git)# node-js-weather-app
