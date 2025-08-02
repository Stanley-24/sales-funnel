import React from 'react';
import './Form.css';

import { useState } from 'react';

const CTAForm = ({ showForm, setShowForm, formRef }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const payload = {
      full_name: name,
      email: email,
      business_type: industry
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Registration successful! Check your email.');
        setName('');
        setEmail('');
        setIndustry('');
      } else {
        setMessage(`❌ Error: ${data.detail || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage(`❌ Network error`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cta-form-wrapper">
      <button className="cta-button mb-6" onClick={toggleForm}>
        🚀 {showForm ? 'Close form' : 'Register for Interview Now'}
      </button>

      <form
        ref={formRef}
        className={`cta-form ${showForm ? 'show' : 'hide'}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Business Type / Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <input type="hidden" value="utm_source=landingpage" />

        <button className="submit-btn" type="submit" disabled={isSubmitting}>
          🚀 {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default CTAForm;
