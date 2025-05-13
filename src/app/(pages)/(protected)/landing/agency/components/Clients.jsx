'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

//images
import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import spotify from '@/assets/images/brands/spotify.svg';
import shopify from '@/assets/images/brands/shopify.svg';

const Clients = () => {
  const clients = [amazon, google, paypal, spotify, shopify];

  return (
    <section className="client-section position-relative py-6" style={{ 
      background: "linear-gradient(to right, #1e3a8a, #1e293b, #0f172a)",
      overflow: "hidden"
    }}>
      {/* Modern UI elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
        <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.1 }}>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      
      <div className="position-absolute" style={{
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)",
        borderRadius: "50%",
        top: "-150px",
        right: "-50px"
      }}></div>
      
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <div className="label-container mb-3">
              <span className="badge px-3 py-2 rounded-pill" style={{ 
                background: "rgba(59, 130, 246, 0.15)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: "0.85rem",
                letterSpacing: "0.5px",
                border: "1px solid rgba(59, 130, 246, 0.3)"
              }}>TRUSTED WORLDWIDE</span>
            </div>
            
            <h2 className="display-5 fw-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Partners we work with</h2>
            
            <p className="text-white-50 mb-0" style={{ fontSize: "1.1rem" }}>
              Industry leaders who trust our solutions
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-4">
          <Col xs={12}>
            <div className="client-container position-relative">
              {/* Left gradient fade */}
              <div className="position-absolute top-0 start-0 h-100" style={{
                width: "100px",
                background: "linear-gradient(to right, #1e3a8a, transparent)",
                zIndex: 3
              }}></div>
              
              {/* Right gradient fade */}
              <div className="position-absolute top-0 end-0 h-100" style={{
                width: "100px",
                background: "linear-gradient(to left, #0f172a, transparent)",
                zIndex: 3
              }}></div>
              
              {/* Modern client logo track */}
              <div className="logo-track-container overflow-hidden">
                <div className="logo-track d-flex">
                  {/* First set of logos */}
                  {clients.map((client, idx) => (
                    <div key={idx} className="logo-item mx-4">
                      <div className="logo-card" style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "16px",
                        padding: "1.75rem 2.5rem",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease"
                      }}>
                        <Image 
                          src={client} 
                          alt="client logo" 
                          height={36} 
                          style={{ 
                            filter: 'brightness(0) invert(1)',
                            opacity: 0.9
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate logos for seamless loop */}
                  {clients.map((client, idx) => (
                    <div key={`dup-${idx}`} className="logo-item mx-4">
                      <div className="logo-card" style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "16px",
                        padding: "1.75rem 2.5rem",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease"
                      }}>
                        <Image 
                          src={client} 
                          alt="client logo" 
                          height={36} 
                          style={{ 
                            filter: 'brightness(0) invert(1)',
                            opacity: 0.9
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Triplicate for buffer */}
                  {clients.map((client, idx) => (
                    <div key={`tri-${idx}`} className="logo-item mx-4">
                      <div className="logo-card" style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "16px",
                        padding: "1.75rem 2.5rem",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease"
                      }}>
                        <Image 
                          src={client} 
                          alt="client logo" 
                          height={36} 
                          style={{ 
                            filter: 'brightness(0) invert(1)',
                            opacity: 0.9
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Modern dot pattern at bottom */}
      <div className="position-absolute bottom-0 start-0 w-100 d-none d-md-block" style={{ height: "80px", overflow: "hidden" }}>
        <svg width="100%" height="80" viewBox="0 0 1000 80" preserveAspectRatio="none">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="rgba(255,255,255,0.2)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>
      
      <style jsx>{`
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        
        .logo-track-container {
          overflow: hidden;
          position: relative;
          padding: 1rem 0;
        }
        
        .logo-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        
        .logo-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;