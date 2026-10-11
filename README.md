# 🚀 PrepFlow – Placement Preparation Dashboard

*Plan Smart. Practice Daily. Get Placement Ready.*

## 📌 About the Project

PrepFlow is a web-based application designed to help students organize their placement preparation, track learning activities, and monitor their progress toward campus placements.

## ✨ Features

- 🔐 User authentication
- 📊 Placement preparation dashboard
- 📝 Daily activity tracking
- 🎯 Preparation progress monitoring
- 🗄️ MongoDB database integration
- ⚡ REST API using Express.js

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools:** Mongoose, dotenv, CORS

## 📂 Project Structure

```text
PrepFlow/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   └── index.html
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/harshithapattikonda2007-oss/prepflow.git
cd prepflow
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure `backend/.env`**

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/prepflow
JWT_SECRET=your_strong_random_secret
```

**4. Start MongoDB**, then run the backend from the project root:

```bash
node backend/server.js
```

**5. Open the frontend** using your browser or VS Code Live Server.

## 🔮 Future Enhancements

- AI-powered personalized study plans
- Placement readiness score
- Progress charts and streak tracking
- Company-specific preparation roadmaps

## 👩‍💻 Author

**Harshitha Pattikonda**

[GitHub Profile](https://github.com/harshithapattikonda2007-oss)

---

⭐ *PrepFlow — Every small step brings you closer to your placement goals!*
