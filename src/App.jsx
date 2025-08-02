import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import './App.css';

import Hero from './components/Hero/Hero';
import VideoSection from './components/Video/Video';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import HostImage from './components/HostImage/HostImage';
import Testimonials from './components/Review/Review';
import CTAForm from './components/Form/Form';
import Footer from './components/Footer/Footer';
import InterviewForm from './components/Form/InterviewForm';

function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showForm]);

  return (
    <div>
      <Hero onEnrollClick={handleEnrollClick} />
      <VideoSection />
      <WhatWeDo />
      <Testimonials />
      <HostImage />
      <CTAForm
        showForm={showForm}
        setShowForm={setShowForm}
        formRef={formRef}
      />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview-form" element={<InterviewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
