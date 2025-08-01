import React from 'react';
import './HostImage.css';

const Host = () => (
  <section className="host">
    <h2 className="host-title">Meet Your Host</h2>
    <p className="host-subtitle">Using AI and software to create freedom for founders</p>

    <img
      src="https://stanleyowarieta.com/assets/avatar-B5RfsJzW.png"
      alt="Stanley Owarieta"
      className="host-avatar"
    />

    <h3 className="host-name">Stanley Owarieta</h3>

    <a
      href="https://stanleyowarieta.com"
      target="_blank"
      rel="noopener noreferrer"
      className="host-link"
    >
      Portfolio → stanleyowarieta.com
    </a>
  </section>
);

export default Host;
