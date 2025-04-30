import React from 'react';
import './Topbar.scss';
import PlurallBrandIcon from '../icons/PlurallBrandIcon';

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="logo">
          <PlurallBrandIcon width="100" height="32" fill="#ffffff" />
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;