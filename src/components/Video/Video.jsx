import React, { useRef, useState } from 'react';
import './Video.css';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="video-section">
      <h2 className="video-title">Watch How AI Can Change Your Business</h2>
      <p className="video-subtext">
        In this short video, we break down how AI tools can automate tasks, drive leads, and save you hundreds of hours — even if you’re just starting out.
      </p>
      <div className="video-container">
        <video
          className="ai-video"
          ref={videoRef}
          poster="/ai-video/thumbnail.jpg"
          onPlay={() => setIsPlaying(true)}
          controls
        >
          <source src="/ai-video/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="custom-play-button" onClick={handlePlay}>
            &#9658;
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
