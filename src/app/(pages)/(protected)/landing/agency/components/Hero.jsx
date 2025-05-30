'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';

const Hero = () => {
  // Add animation style element to document head + Load Calendly script
  useEffect(() => {
    // Skip if not browser environment
    if (typeof document === 'undefined') return;
    
    // Load Calendly script
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // Only add if it doesn't already exist
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      head.appendChild(script);
      console.log('Calendly script loaded');
    }
    
    // Load Calendly stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      head.appendChild(link);
    }
    
    // Create style element for animations
    const styleEl = document.createElement('style');
    styleEl.id = 'hero-animation-styles'; // Add ID to avoid duplicates
    styleEl.textContent = `
      .circuit-board-pattern {
        background-image: linear-gradient(rgba(255, 80, 32, 0.1) 1px, transparent 1px), 
                         linear-gradient(90deg, rgba(255, 80, 32, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
        background-position: -30px 0;
        animation: moveCircuit 8s linear infinite;
      }
      
      @keyframes moveCircuit {
        0% {
          background-position: -30px 0;
        }
        100% {
          background-position: 0 30px;
        }
      }
      
      .dna-waves {
        background: 
          radial-gradient(circle at 20% 30%, rgba(255, 80, 32, 0.15) 0%, rgba(255, 80, 32, 0) 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 80, 32, 0.15) 0%, rgba(255, 80, 32, 0) 50%);
        opacity: 0.8;
        animation: pulseDna 3s ease-in-out infinite alternate;
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
      
      .pulse-grid {
        background-image: 
          linear-gradient(to right, transparent 8px, rgba(255, 80, 32, 0.05) 8px, rgba(255, 80, 32, 0.05) 12px, transparent 12px),
          linear-gradient(to bottom, transparent 8px, rgba(255, 80, 32, 0.05) 8px, rgba(255, 80, 32, 0.05) 12px, transparent 12px);
        background-size: 60px 60px;
        animation: pulseGrid 2.5s linear infinite alternate;
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
      
      .hero-5:before {
        content: '';
        position: absolute;
        top: 0;
        left: -50px;
        width: calc(100% + 100px);
        height: 100%;
        background: 
          linear-gradient(90deg, transparent 90%, rgba(255, 80, 32, 0.2) 100%),
          linear-gradient(180deg, transparent 90%, rgba(255, 80, 32, 0.2) 100%);
        background-size: 200px 200px;
        animation: dataFlow 4s linear infinite;
        pointer-events: none;
      }
      
      @keyframes dataFlow {
        0% {
          background-position: -200px 0;
        }
        100% {
          background-position: 0 200px;
        }
      }
      
      .hero-5:after {
        content: '';
        position: absolute;
        top: 0;
        left: -20px;
        width: calc(100% + 40px);
        height: 100%;
        background-image: radial-gradient(rgba(255, 80, 32, 0.3) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: pulseDots 1.6s ease-in-out infinite alternate;
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
    `;
    
    // Only add if not already present
    if (!document.getElementById('hero-animation-styles')) {
      document.head.appendChild(styleEl);
    }
    
    // Cleanup on unmount
    return () => {
      const existingStyle = document.getElementById('hero-animation-styles');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  // Direct Calendly popup widget
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Opening Calendly native popup');
    
    // Check if Calendly widget is loaded
    if (window.Calendly && window.Calendly.initPopupWidget) {
      console.log('✅ Using Calendly native popup widget');
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shubhamshrm02/30min?back=1&month=2025-05'
      });
    } else {
      console.log('⚠️ Calendly widget not loaded, loading it now...');
      
      // Load Calendly script if not already loaded
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.onload = () => {
        console.log('✅ Calendly script loaded, opening popup');
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/shubhamshrm02/30min?back=1&month=2025-05'
        });
      };
      script.onerror = () => {
        console.error('❌ Failed to load Calendly script');
        alert('Failed to load Calendly. Please check your internet connection and try again.');
      };
      document.head.appendChild(script);
    }
  };

  return (
    <div className="position-relative hero-5 pb-4 pt-7 pb-sm-0">
      {/* Full section elements with adjusted animations */}
      <div className="circuit-board-pattern animation-layer"></div>
      <div className="dna-waves animation-layer"></div>
      <div className="pulse-grid animation-layer"></div>
      
      <Container className="position-relative" style={{ zIndex: 15 }}>
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
            OmicsBank provides unparalleled access to multi-omic, clinical, and structured EHR from Asia and the Middle East, fuelling breakthroughs in drug discovery, precision medicine and clinical trials. 
            </p>
            <div className="action-buttons mt-2" style={{ zIndex: 25, position: 'relative' }}>
              {/* Test button with basic functionality */}
              <button 
                onClick={handleCalendlyClick}
                className="cta-button"
                style={{ 
                  zIndex: 35, 
                  position: 'relative',
                  pointerEvents: 'auto',
                  backgroundColor: '#ff5020',
                  cursor: 'pointer'
                }}
              >
                <span className="icon-wrapper">
                  <IconifyIcon icon="lucide:calendar-clock" />
                </span>
                <span>Book a Call</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Bottom curve without light shade */}
      <div className="bottom-curve">
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,10 480,0 720,0 C960,0 1200,10 1440,30 L1440,50 L0,50 L0,30 Z" fill="white" />
        </svg>
      </div>
      
      <style jsx>{`
        .hero-5 {
          min-height: 600px;
          background-color: rgba(255, 120, 75, 0.12);
          position: relative;
          overflow: hidden;
        }
        
        /* Animation layers */
        .animation-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        /* Absolute positioned layers */
        .circuit-board-pattern {
          z-index: 1;
        }
        
        .dna-waves {
          z-index: 2;
          left: -50%;
          width: 200%;
        }
        
        .pulse-grid {
          z-index: 3;
          left: -10%;
          width: 120%;
        }
        
        /* Bottom curve without light shade */
        .bottom-curve {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50px;
          z-index: 4;
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
          animation: pulseText 3s infinite alternate;
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
          animation: moveGlow 5s infinite alternate ease-in-out;
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
          position: relative;
          z-index: 20;
        }
        
        /* Simple CTA Button styling */
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background-color: #ff5020;
          color: white;
          padding: 0.8rem 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          border-radius: 5px;
          border: none;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(255, 80, 32, 0.3);
          transition: all 0.3s ease;
          cursor: pointer !important;
          min-width: 180px;
          outline: none;
          z-index: 30;
          pointer-events: auto;
        }
        
        .cta-button:hover {
          background-color: #e64016;
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(255, 80, 32, 0.4);
          cursor: pointer !important;
        }
        
        .cta-button:active {
          transform: translateY(1px);
          background-color: #d03010;
          box-shadow: 0 2px 8px rgba(255, 80, 32, 0.3);
          cursor: pointer !important;
        }
        
        .icon-wrapper {
          margin-right: 0.75rem;
          display: flex;
          align-items: center;
          font-size: 1.2em;
          transition: transform 0.3s ease;
          pointer-events: none;
        }
        
        .cta-button:hover .icon-wrapper {
          transform: scale(1.1);
        }
        
        .cta-button:active .icon-wrapper {
          transform: scale(0.9);
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