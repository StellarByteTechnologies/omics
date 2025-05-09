'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="position-relative hero-5 pb-4 pt-7 pb-sm-0">
      {/* Full section elements with faster animations */}
      <div className="circuit-board-pattern"></div>
      <div className="dna-waves"></div>
      <div className="pulse-grid"></div>
      
      <Container className="position-relative zindex-1">
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="rounded d-inline-block mb-4 px-3 py-2 alert bg-soft-warning aos-init aos-animate" data-aos="fade-right" data-aos-duration={1000}>
              <Link href="">
                <div className="d-flex align-items-center">
                  <div className="badge rounded-pill bg-orange px-2 py-1">New!</div>
                  <div className="mx-3">Revolutionary AI diagnostic platform</div>
                </div>
              </Link>
            </div>
            
            {/* Enhanced headline section */}
            <div className="headline-container">
              <h1 className="headline-text">
                Embrace the Power of 
                <div className="headline-highlight">Predictive AI Diagnosis</div>
              </h1>
              <div className="headline-glow"></div>
            </div>
            
            {/* Reduced margin between paragraph and buttons */}
            <p className="mt-4 fs-18 mb-2 w-75">
            OmicsBank provides unparalleled access to multi-omic, clinical, and structured EHR from Asia and the Middle East, fuelling breakthroughs in drug discovery, precision medicine and clinical trials. 
            </p>
            <div className="action-buttons mt-2">
              <Button variant="secondary">
                <IconifyIcon icon="lucide:stethoscope" className="icon-xxs me-2" /> Our Solutions
              </Button>
              <Button variant="outline-secondary" className="ms-2">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="align-items-end links-social d-sm-block d-none">
        <ul className="list-inline text-muted text-uppercase fw-medium">
          <li className="list-inline-item py-2">
            <Link href="">Twitter</Link>
          </li>
          <li className="list-inline-item py-2">
            <Link href="">Facebook</Link>
          </li>
          <li className="list-inline-item py-2">
            <Link href="">LinkedIn</Link>
          </li>
        </ul>
      </div>
      <div className="shape bottom">
        <svg width="1440px" height="40px" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="shape-b" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="curve" fill="#fff">
              <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" id="Path" />
            </g>
          </g>
        </svg>
      </div>
      
      <style jsx>{`
        .hero-5 {
          min-height: 600px;
          background-color: rgba(255, 120, 75, 0.12);
          position: relative;
          overflow: hidden;
        }
        
        /* Circuit board pattern */
        .circuit-board-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 80, 32, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 80, 32, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: moveCircuit 5s linear infinite;
        }
        
        @keyframes moveCircuit {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }
        
        /* DNA waves */
        .dna-waves {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 80, 32, 0.15) 0%, rgba(255, 80, 32, 0) 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 80, 32, 0.15) 0%, rgba(255, 80, 32, 0) 50%);
          opacity: 0.8;
          animation: pulseDna 1.5s ease-in-out infinite alternate;
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
        
        /* Pulse grid */
        .pulse-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, transparent 8px, rgba(255, 80, 32, 0.05) 8px, rgba(255, 80, 32, 0.05) 12px, transparent 12px),
            linear-gradient(to bottom, transparent 8px, rgba(255, 80, 32, 0.05) 8px, rgba(255, 80, 32, 0.05) 12px, transparent 12px);
          background-size: 60px 60px;
          animation: pulseGrid 1s linear infinite alternate;
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
        
        /* Data flow lines */
        .hero-5::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(90deg, transparent 90%, rgba(255, 80, 32, 0.2) 100%),
            linear-gradient(180deg, transparent 90%, rgba(255, 80, 32, 0.2) 100%);
          background-size: 200px 200px;
          animation: dataFlow 2s linear infinite;
          pointer-events: none;
        }
        
        @keyframes dataFlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200px 200px;
          }
        }
        
        /* Pulsing dots */
        .hero-5::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255, 80, 32, 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: pulseDots 0.8s ease-in-out infinite alternate;
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
          animation: pulseText 2s infinite alternate;
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
          animation: moveGlow 3s infinite alternate ease-in-out;
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
        
        /* Button styling */
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
        
        .btn-outline-secondary {
          border-color: #ff5020;
          color: #ff5020;
          padding: 0.8rem 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        
        .btn-outline-secondary:hover {
          background-color: #ff5020;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(255, 80, 32, 0.3);
        }
        
        /* Social links */
        .links-social {
          position: absolute;
          right: 3rem;
          bottom: 3rem;
          z-index: 1;
        }
        
        .links-social ul li a {
          color: #555;
          text-decoration: none;
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