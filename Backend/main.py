from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from random import random, choice

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model for incoming reflection
class Reflection(BaseModel):
    text: str

# Endpoint for emotion analysis
@app.post("/analyze")
async def analyze_emotion(reflection: Reflection):
    fake_emotions = ["Happy", "Sad", "Anxious", "Excited", "Calm"]
    return {
        "emotion": choice(fake_emotions),
        "confidence": round(random(), 2)
    }

# This makes the app executable directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)