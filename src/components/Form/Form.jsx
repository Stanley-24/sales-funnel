import React from 'react';
import './Form.css';

const CTAForm = ({ showForm, setShowForm, formRef }) => {
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="cta-form-wrapper">
      <button className="cta-button mb-6" onClick={toggleForm}>
        🚀 {showForm ? 'Close form' : 'Register for Interview Now'}
      </button>

      <div
        ref={formRef}
        className={`cta-form ${showForm ? 'show' : 'hide'}`}
      >
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Business Type / Industry" />
        <input type="hidden" value="utm_source=landingpage" />
        <button className="submit-btn">🚀 Submit</button>
      </div>
    </div>
  );
};

export default CTAForm;
