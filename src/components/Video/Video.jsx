import React from 'react';
import './Video.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2 className="video-title">Watch How AI Can Change Your Business</h2>
      <p className="video-subtext">
        In this short video, we break down how AI tools can automate tasks, drive leads, and save you hundreds of hours — even if you’re just starting out.
      </p>
      <div className="video-placeholder">
        <div className="play-button">&#9658;</div>
        <span className="coming-soon">Coming Soon</span>
      </div>
    </section>
  );
};

export default VideoSection;
