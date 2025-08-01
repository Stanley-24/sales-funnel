import React from 'react';
import './Review.css';

const testimonials = [
  { name: 'Alice', text: 'This platform transformed my career!', stars: 5 },
  { name: 'Brian', text: 'An amazing experience from start to finish.', stars: 4 },
  { name: 'Cynthia', text: 'Very intuitive and beautifully designed.', stars: 5 },
  { name: 'Daniel', text: 'Customer service was top-notch.', stars: 5 },
  { name: 'Ella', text: 'Easy to navigate and very helpful.', stars: 4 },
  { name: 'Frank', text: 'Highly recommend to all my colleagues.', stars: 5 },
  { name: 'Grace', text: 'A seamless and rewarding journey.', stars: 5 },
  { name: 'Henry', text: 'Made my workflow much faster.', stars: 4 },
];

const getColor = (char) => {
  const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#C780FA', '#43C6AC', '#F9A826'];
  return colors[char.charCodeAt(0) % colors.length];
};

const TestimonialCard = ({ name, text, stars }) => {
  const initials = name[0].toUpperCase();
  const color = getColor(initials);

  return (
    <div className="testimonial-card">
      <div
        className="testimonial-avatar-placeholder"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div className="testimonial-name">{name}</div>
      <div className="testimonial-text">{text}</div>
      <div className="testimonial-stars">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div className="testimonial-container">
        <div className="testimonial-slider">
          <div className="testimonial-cards">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
