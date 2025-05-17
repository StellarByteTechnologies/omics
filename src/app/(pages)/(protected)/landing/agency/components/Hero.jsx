'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';

const Hero = () => {
  // Load Calendly script on component mount
  useEffect(() => {
    // Add Calendly script to head
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // Only add if it doesn't already exist
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      head.appendChild(script);
    }
    
    // Add Calendly stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    
    // Only add if it doesn't already exist
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      head.appendChild(link);
    }
    
    return () => {
      // Clean up script and stylesheet on unmount if needed
      // Usually not necessary in production
    };
  }, []);

  // Function to open Calendly when CTA is clicked
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shubhamshrm02/30min?back=1&month=2025-05'
      });
      return true;
    } else {
      // Fallback if Calendly is not loaded
      window.open('https://calendly.com/shubhamshrm02/30min?back=1&month=2025-05', '_blank');
      return false;
    }
  };

  return (
    <div className="position-relative hero-5 pb-4 pt-7 pb-sm-0">
      {/* Full section elements with adjusted animations */}
      <div className="circuit-board-pattern"></div>
      <div className="dna-waves"></div>
      <div className="pulse-grid"></div>
      
      <Container className="position-relative zindex-1">
        <Row className="align-items-center">
          <Col lg={12}>
            {/* Enhanced headline section with new heading */}
            <div className="headline-container">
              <h1 className="headline-text">
                AI-Ready, Comprehensive
                <div className="headline-highlight">Omics and Clinical Data from Asia</div>
              </h1>
              <div className="headline-glow"></div>
            </div>
            
            {/* Reduced margin between paragraph and buttons */}
            <p className="mt-4 fs-18 mb-2 w-75">
            Healthcare and Lifesciences AI models deserve better fuel — structured, longitudinal, diverse datasets in quantity and quality. OmicsBank provides AI-Ready datasets of  multi-omics (Phenomic, Genomic, Transcriptomics, Proteomic, Metabolomic), biobank and longitudinal clinical data from Asia, Africa, and the Middle East directly from major healthcare facilities in India. 
            </p>
            <div className="action-buttons mt-2">
              {/* Calendly button with direct link as fallback */}
              <Button 
                variant="secondary" 
                className="calendly-btn"
                onClick={openCalendly}
              >
                <IconifyIcon icon="lucide:calendar-clock" className="me-2" /> 
                Book a Call
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="shape bottom">
        <svg width="1440px" height="40px" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="shape-b" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="curve" fill="#fff">
              <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" id="Path" />
            </g>
          </g>
        </svg>
      </div>
      
      {/* Add direct Calendly popup element */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/shubhamshrm02/30min?back=1&month=2025-05"
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          width: '0', 
          height: '0', 
          visibility: 'hidden' 
        }}
      ></div>
      
      <style jsx>{`
        .hero-5 {
          min-height: 600px;
          background-color: rgba(255, 120, 75, 0.12);
          position: relative;
          overflow: hidden;
        }
        
        /* Circuit board pattern - SLOWER speed & full width */
        .circuit-board-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 80, 32, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 80, 32, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          background-position: -30px 0; /* Start from extreme left */
          animation: moveCircuit 8s linear infinite; /* Slowed from 5s to 8s */
        }
        
        @keyframes moveCircuit {
          0% {
            background-position: -30px 0; /* Start from extreme left */
          }
          100% {
            background-position: 0 30px;
          }
        }
        
        /* DNA waves - SLOWER speed & extreme positions */
        .dna-waves {
          position: absolute;
          top: 0;
          left: -50%; /* Extend beyond left edge */
          width: 200%; /* Cover more than full width */
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 80, 32, 0.15) 0%, rgba(255, 80, 32, 0) 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 80, 32, 0.15) 0%, rgba(255, 80, 32, 0) 50%);
          opacity: 0.8;
          animation: pulseDna 3s ease-in-out infinite alternate; /* Slowed from 1.5s to 3s */
        }
        
        @keyframes pulseDna {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        /* Pulse grid - SLOWER speed & extreme positioning */
        .pulse-grid {
          position: absolute;
          top: 0;
          left: -10%; /* Extend beyond left edge */
          width: 120%; /* Cover more than full width */
          height: 100%;
          background-image: 
            linear-gradient(to right, transparent 8px, rgba(255, 80, 32, 0.05) 8px, rgba(255, 80, 32, 0.05) 12px, transparent 12px),
            linear-gradient(to bottom, transparent 8px, rgba(255, 80, 32, 0.05) 8px, rgba(255, 80, 32, 0.05) 12px, transparent 12px);
          background-size: 60px 60px;
          animation: pulseGrid 2.5s linear infinite alternate; /* Slowed from 1s to 2.5s */
        }
        
        @keyframes pulseGrid {
          0% {
            opacity: 0.3;
            background-size: 60px 60px;
          }
          100% {
            opacity: 0.7;
            background-size: 65px 65px;
          }
        }
        
        /* Data flow lines - SLOWER & extreme left start */
        .hero-5::before {
          content: '';
          position: absolute;
          top: 0;
          left: -50px; /* Start beyond left edge */
          width: calc(100% + 100px); /* Cover more than full width */
          height: 100%;
          background: 
            linear-gradient(90deg, transparent 90%, rgba(255, 80, 32, 0.2) 100%),
            linear-gradient(180deg, transparent 90%, rgba(255, 80, 32, 0.2) 100%);
          background-size: 200px 200px;
          animation: dataFlow 4s linear infinite; /* Slowed from 2s to 4s */
          pointer-events: none;
        }
        
        @keyframes dataFlow {
          0% {
            background-position: -200px 0; /* Start from extreme left */
          }
          100% {
            background-position: 0 200px;
          }
        }
        
        /* Pulsing dots - SLOWER & full width coverage */
        .hero-5::after {
          content: '';
          position: absolute;
          top: 0;
          left: -20px; /* Start beyond left edge */
          width: calc(100% + 40px); /* Cover more than full width */
          height: 100%;
          background-image: radial-gradient(rgba(255, 80, 32, 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: pulseDots 1.6s ease-in-out infinite alternate; /* Slowed from 0.8s to 1.6s */
          pointer-events: none;
        }
        
        @keyframes pulseDots {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.7;
          }
        }
        
        /* Enhanced headline styling */
        .headline-container {
          position: relative;
          margin-bottom: 1.5rem;
          padding: 0.5rem 0;
        }
        
        .headline-text {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          color: #333;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 2;
          letter-spacing: -0.03em;
        }
        
        .headline-highlight {
          display: inline-block;
          background: linear-gradient(135deg, #ff5020 0%, #ff9966 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          font-size: 4.2rem;
          font-weight: 900;
          position: relative;
          margin-top: 0.3rem;
          animation: pulseText 3s infinite alternate; /* Slowed from 2s to 3s */
        }
        
        .headline-highlight::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ff5020, transparent);
          border-radius: 2px;
        }
        
        .headline-glow {
          position: absolute;
          top: 50%;
          left: 30%;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(255, 80, 32, 0.2) 0%, rgba(255, 80, 32, 0) 70%);
          filter: blur(15px);
          z-index: 1;
          animation: moveGlow 5s infinite alternate ease-in-out; /* Slowed from 3s to 5s */
        }
        
        @keyframes pulseText {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.02);
            opacity: 1;
          }
        }
        
        @keyframes moveGlow {
          0% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          100% {
            transform: translate(30px, -20px);
            opacity: 0.7;
          }
        }
        
        /* Content styling */
        .container {
          position: relative;
          z-index: 10;
        }
        
        p {
          color: #555;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        /* Reduced space between paragraph and buttons */
        .action-buttons {
          margin-top: 0.75rem;
        }
        
        /* Calendly button styling */
        .btn-secondary {
          background-color: #ff5020;
          border-color: #ff5020;
          color: white;
          padding: 0.8rem 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(255, 80, 32, 0.3);
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(255, 80, 32, 0.4);
        }
        
        /* Calendly specific styling */
        .calendly-btn {
          min-width: 180px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 1rem;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .headline-text {
            font-size: 3rem;
          }
          
          .headline-highlight {
            font-size: 3.2rem;
          }
          
          p {
            width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .headline-text {
            font-size: 2.5rem;
          }
          
          .headline-highlight {
            font-size: 2.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;