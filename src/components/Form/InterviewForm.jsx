import React, { useState, useEffect } from 'react';
import './InterviewForm.css';

const questions = [
  "What does your business do?",
  "What do you spend most of your time doing every day?",
  "What part of your work feels repetitive or tiring?",
  "What challenges are you currently facing in your business?",
  "If you had more free time, what would you focus on?"
];

export default function InterviewForm() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [step, setStep] = useState(0);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Extract user_id from URL when component loads
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get("user_id");
    if (userIdParam && !isNaN(parseInt(userIdParam))) {
      setUserId(parseInt(userIdParam));
    }
  }, []);

  const handleNext = () => {
    if (answers[step].trim() !== "") {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[step] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    if (!userId) {
      alert("User ID not found in the URL. Please retry from the link in your email.");
      return;
    }

    setLoading(true);
    const responses = answers.join("\n\n");

    try {
      await fetch("http://127.0.0.1:8000/api/v1/interview/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, responses })
      });

      // Optional delay to show spinner UX
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="interview-form-container">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Submitting your answers...</p>
        </div>
      ) : submitted ? (
        <div className="ai-result">
          <h2>Form submitted!</h2>
          <p>Kindly check your email for your interview update.</p>
        </div>
      ) : (
        <>
          <h3>Step {step + 1} of {questions.length}</h3>
          <p className="question">{questions[step]}</p>
          <textarea
            value={answers[step]}
            onChange={handleChange}
            rows={3}
            className="input-text"
          />
          <div className="buttons">
            {step > 0 && (
              <button onClick={handleBack} className="btn back">Back</button>
            )}
            {step < questions.length - 1 ? (
              <button onClick={handleNext} className="btn next">Next</button>
            ) : (
              <button onClick={handleSubmit} className="btn submit">
                Submit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
