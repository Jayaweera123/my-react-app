import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const Modal = ({ setModal, resume }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const styles = {
    backshadow: {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    customModal: {
      width: '900px',
      height: '600px',
      backgroundColor: '#fff',
      position: 'relative',
    },
    deleteIcon: {
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      backgroundColor: 'red',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      position: 'absolute',
      top: '-15px',
      right: '-15px',
      fontFamily: "'Raleway', sans-serif",
      zIndex: 2,
    },
  };

  return (
    <div style={styles.backshadow}>
      <div style={styles.customModal}>
        <div
          style={styles.deleteIcon}
          onClick={() => {
            console.log("Close icon clicked"); // Debug log to verify click
            setModal(false);
          }}
        >
          x
        </div>
        {resume !== null && (
          <>
          <embed type="application/pdf" src={resume} width={100+'%'} height={100+'%'}/>
          </>
        )}
        
      </div>
    </div>
  );
};
