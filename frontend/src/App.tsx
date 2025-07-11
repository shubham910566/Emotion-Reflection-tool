import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{emotion: string, confidence: number} | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/analyze', { text });
      setResult(response.data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Emotion Reflection Tool</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="How are you feeling today?"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <h2>Detected Emotion</h2>
          <p><strong>Emotion:</strong> {result.emotion}</p>
          <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
