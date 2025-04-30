import React from 'react';
import './Topbar.scss';
import Brand from './molecules/Brand/Brand';
import Navbar from './molecules/Navbar/Navbar';

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <Brand />
        <Navbar />
      </div>
    </div>
  );
};

export default Topbar;