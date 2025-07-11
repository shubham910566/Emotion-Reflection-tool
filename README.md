# Emotion Reflection Tool

A full-stack web application that allows users to input a short reflection and returns a mock emotional analysis using a FastAPI backend and a React (TypeScript) frontend.

---

## ✨ Features

- Mobile-first responsive design  
- Simple textarea form for input  
- FastAPI backend returns fake emotion + confidence  
- Loading indicator, error handling, and clean result UI

---

## 📁 Project Structure

```plaintext
project-root/
│
├── Backend/           # FastAPI backend
│   └── main.py
│
├── frontend/          # React frontend
│   ├── src/
│   │   └── App.tsx
│   ├── public/
│   └── package.json
│
└── README.md
```

## Getting Started
- Node.js & npm: https://nodejs.org/
- Python 3.8+
- Code editor like VS Code (with Python and React extensions)

## Backend Setup (FastAPI)
```bash
cd Backend
# Optional: Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn

# Run backend
python main.py
```

## 💻 Frontend Setup (React + TypeScript)
```bash
cd frontend
npm install
npm start
```



