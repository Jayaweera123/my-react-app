import React from 'react';

export const Button = ({ resume }) => {
  const openResume = () => {
    if (resume) {
      window.open(resume, '_blank');
    } else {
      alert("Resume not available");
    }
  };

  return (
    <div>
      <button className='gradient-button' onClick={openResume}>
        Check Resume
      </button>
    </div>
  );
};
