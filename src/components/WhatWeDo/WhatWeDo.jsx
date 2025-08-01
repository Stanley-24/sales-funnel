import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const services = [
    '✅ Business Automation',
    '✅ Sales & Lead Automation',
    '✅ Website & Funnel Setup',
    '✅ AI Content Creation',
    '✅ Product Digitization',
  ];

  return (
    <section className="whatwedo">
      <h2 className="whatwedo-title">What We Do</h2>
      <p className="whatwedo-subtext">
        We help businesses scale faster by leveraging AI, automation, and smart systems.
      </p>

      <div className="whatwedo-grid">
        {services.map((service, index) => (
          <div className="whatwedo-card" key={index}>
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
