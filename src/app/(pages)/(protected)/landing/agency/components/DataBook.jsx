'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DataBook = () => {
  // Animation states
  const [animate, setAnimate] = useState(false);
  const [sectionsInView, setSectionsInView] = useState({
    therapeutic: false,
    genomic: false
  });
  
  // References for scroll detection
  const therapeuticRef = useRef(null);
  const genomicRef = useRef(null);
  
  // Set animation after component mount and handle scroll animations
  useEffect(() => {
    setAnimate(true);
    
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    
    // Observer callback
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'therapeutic-section') {
            setSectionsInView(prev => ({...prev, therapeutic: true}));
            
            // Animate each progress bar
            const progressBars = document.querySelectorAll('.therapeutic-progress');
            progressBars.forEach(bar => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute('data-value');
              }, 300);
            });
          }
          
          if (entry.target.id === 'genomic-section') {
            setSectionsInView(prev => ({...prev, genomic: true}));
            
            // Animate genomic progress bar
            const genomicBar = document.querySelector('.genomic-progress');
            if (genomicBar) {
              setTimeout(() => {
                genomicBar.style.width = genomicBar.getAttribute('data-value');
              }, 300);
            }
            
            // Animate particles
            const particles = document.querySelectorAll('.genetic-particle');
            particles.forEach((particle, i) => {
              setTimeout(() => {
                particle.style.opacity = '0.7';
                particle.style.transform = 'scale(1)';
              }, 100 * i);
            });
          }
        }
      });
    };
    
    // Create observer
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe sections
    if (therapeuticRef.current) observer.observe(therapeuticRef.current);
    if (genomicRef.current) observer.observe(genomicRef.current);
    
    // Cleanup
    return () => {
      if (therapeuticRef.current) observer.unobserve(therapeuticRef.current);
      if (genomicRef.current) observer.unobserve(genomicRef.current);
    };
  }, []);

  // Interactive state for stats
  const [hoveredStat, setHoveredStat] = useState(null);

  // Stats data
  const stats = [
    {
      value: ">50M",
      description: "De-identified patient records from diverse global populations"
    },
    {
      value: "5",
      description: "Major therapeutic areas with specialized datasets"
    },
    {
      value: "2M+",
      description: "Genomic sequences available for research"
    },
    {
      value: "4",
      description: "Continents providing data (India, Africa, Middle East & more)"
    }
  ];

  // Therapeutic area data
  const therapeuticData = [
    { name: 'Oncology', records: 12, color: '#3182CE' },
    { name: 'Cardiology', records: 9, color: '#E53E3E' },
    { name: 'Neurology', records: 7, color: '#805AD5' },
    { name: 'Rare Diseases', records: 4, color: '#38A169' },
    { name: 'Metabolic Disorders', records: 5, color: '#DD6B20' }
  ];
  
  // State for interactive therapeutic area hover
  const [hoveredArea, setHoveredArea] = useState(null);
  
  return (
    <section className="my-lg-5 py-5 py-sm-7 bg-gradient5 position-relative" data-aos="fade-up">
      <div className="divider top d-none d-sm-block" />
      <Container>
        {/* Header Section */}
        <Row className={`mb-5 text-center ${animate ? 'animate__animated animate__fadeIn' : ''}`}>
          <Col>
            <span className="badge rounded-pill badge-soft-orange px-3 py-2 mb-3">Section 3</span>
            <h1 className="display-5 fw-semibold">Data Book: Explore Our Datasets</h1>
            <div className="mx-auto bg-primary" 
              style={{
                width: '100px', 
                height: '4px', 
                marginTop: '20px',
                transition: 'width 0.5s ease-in-out',
                width: animate ? '100px' : '0px'
              }}></div>
          </Col>
        </Row>

        {/* Main Data Banner */}
        <Row className={`mb-5 ${animate ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
          <Col>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-light">
              <div className="text-center p-5">
                <h2 className="fw-bold mb-1 text-dark">All data solutions. One Place.</h2>
                <h3 className="display-6 text-secondary fw-normal">Global impact.</h3>
                
                {/* AI Pattern Background for Main Stats */}
                <div className="rounded-lg overflow-hidden shadow-lg mt-4 mb-4 position-relative"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235d80b6'/%3E%3Cstop offset='1' stop-color='%23395685'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0.3'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.15'%3E%3Ccircle fill='%23ffffff' cx='267.5' cy='61' r='5'/%3E%3Ccircle fill='%23ffffff' cx='429.8' cy='200.5' r='6'/%3E%3Ccircle fill='%23ffffff' cx='156.4' cy='237.8' r='4'/%3E%3Ccircle fill='%23ffffff' cx='501.5' cy='105.4' r='5'/%3E%3Ccircle fill='%23ffffff' cx='374.5' cy='139.2' r='6'/%3E%3Ccircle fill='%23ffffff' cx='596.9' cy='228.1' r='4'/%3E%3Ccircle fill='%23ffffff' cx='320.3' cy='266.5' r='5'/%3E%3Ccircle fill='%23ffffff' cx='190.2' cy='70.3' r='4'/%3E%3C/g%3E%3Cg stroke='%23ffffff' stroke-width='1' stroke-opacity='0.2'%3E%3Cline x1='267.5' y1='61' x2='429.8' y2='200.5'/%3E%3Cline x1='429.8' y1='200.5' x2='156.4' y2='237.8'/%3E%3Cline x1='156.4' y1='237.8' x2='501.5' y2='105.4'/%3E%3Cline x1='501.5' y1='105.4' x2='374.5' y2='139.2'/%3E%3Cline x1='374.5' y1='139.2' x2='596.9' y2='228.1'/%3E%3Cline x1='596.9' y1='228.1' x2='320.3' y2='266.5'/%3E%3Cline x1='320.3' y1='266.5' x2='190.2' y2='70.3'/%3E%3Cline x1='190.2' y1='70.3' x2='267.5' y2='61'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '40px',
                  }}
                >
                  <div className="position-relative z-index-1 text-white p-4">
                    <h4 className="fw-bold mb-4">World Leading Healthcare Data Network</h4>
                    
                    <div className="mb-4">
                      <span className="display-1 fw-bold" 
                        style={{ 
                          color: '#ffffff',
                          transition: 'all 0.3s ease',
                          textShadow: '0 0 10px rgba(255,255,255,0.3)'
                        }}
                      >50M+</span>
                    </div>
                    
                    <p className="lead px-lg-5 mx-lg-5">
                      Patient, health, and multi-omic datasets for research,<br />
                      drug development, and clinical trials
                    </p>
                    
                    {/* Animated network nodes in background */}
                    <div className="position-absolute" style={{top: 0, left: 0, right: 0, bottom: 0, zIndex: -1}}>
                      {[...Array(15)].map((_, i) => (
                        <div 
                          key={i}
                          className="position-absolute rounded-circle" 
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            width: `${8 + Math.random() * 10}px`,
                            height: `${8 + Math.random() * 10}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Stats Cards Section */}
        <Row className={`mt-5 mb-5 ${animate ? 'animate__animated animate__fadeInUp animate__delay-2s' : ''}`}>
          <Col>
            <div 
              className="rounded-lg overflow-hidden shadow-lg bg-blue-600 position-relative"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235d80b6'/%3E%3Cstop offset='1' stop-color='%23395685'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0.3'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.15'%3E%3Ccircle fill='%23ffffff' cx='267.5' cy='61' r='5'/%3E%3Ccircle fill='%23ffffff' cx='429.8' cy='200.5' r='6'/%3E%3Ccircle fill='%23ffffff' cx='156.4' cy='237.8' r='4'/%3E%3Ccircle fill='%23ffffff' cx='501.5' cy='105.4' r='5'/%3E%3Ccircle fill='%23ffffff' cx='374.5' cy='139.2' r='6'/%3E%3Ccircle fill='%23ffffff' cx='596.9' cy='228.1' r='4'/%3E%3Ccircle fill='%23ffffff' cx='320.3' cy='266.5' r='5'/%3E%3Ccircle fill='%23ffffff' cx='190.2' cy='70.3' r='4'/%3E%3C/g%3E%3Cg stroke='%23ffffff' stroke-width='1' stroke-opacity='0.2'%3E%3Cline x1='267.5' y1='61' x2='429.8' y2='200.5'/%3E%3Cline x1='429.8' y1='200.5' x2='156.4' y2='237.8'/%3E%3Cline x1='156.4' y1='237.8' x2='501.5' y2='105.4'/%3E%3Cline x1='501.5' y1='105.4' x2='374.5' y2='139.2'/%3E%3Cline x1='374.5' y1='139.2' x2='596.9' y2='228.1'/%3E%3Cline x1='596.9' y1='228.1' x2='320.3' y2='266.5'/%3E%3Cline x1='320.3' y1='266.5' x2='190.2' y2='70.3'/%3E%3Cline x1='190.2' y1='70.3' x2='267.5' y2='61'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="d-flex flex-column flex-md-row">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="w-100 p-4 text-white d-flex flex-column justify-content-between" 
                    style={{ 
                      borderRight: index < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredStat === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      transform: hoveredStat === index ? 'translateY(-5px)' : 'translateY(0)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div 
                      className="display-4 fw-bold mb-3"
                      style={{
                        transform: hoveredStat === index ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    >{stat.value}</div>
                    <div className="fs-6">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Therapeutic Areas Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div id="therapeutic-section" ref={therapeuticRef} className="bg-white rounded-lg shadow-sm p-5 h-100">
              <h3 className="fw-bold mb-5">Therapeutic Area Collections</h3>
              
              {therapeuticData.map((item, index) => (
                <div key={index} className="mb-5" id={`therapeutic-area-${index}`}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fs-5 fw-medium text-dark">{item.name}</span>
                    <span className="rounded-pill px-3 py-1 text-white" 
                      style={{ 
                        backgroundColor: item.color,
                        fontSize: '0.9rem'
                      }}>
                      {item.records}M records
                    </span>
                  </div>
                  <div className="progress rounded-pill" style={{height: '12px', backgroundColor: '#eef3f8'}}>
                    <div 
                      className="progress-bar therapeutic-progress"
                      role="progressbar"
                      style={{ 
                        width: '0%',
                        backgroundColor: item.color,
                        transition: 'width 1.5s ease-out',
                        borderRadius: '12px'
                      }}
                      data-value={`${(item.records / 12) * 100}%`}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div id="genomic-section" ref={genomicRef} className="bg-white rounded-lg shadow-sm p-5 h-100">
              <h3 className="fw-bold mb-4">Genomic Research Data</h3>
              <p className="text-secondary mb-5">
                Access our extensive collection of over 2 million genetic sequences to power your research in precision medicine and targeted therapies.
              </p>
              
              <div className="bg-light rounded-lg p-5 mb-4">
                <div className="position-relative">
                  <div className="text-center mb-4">
                    <span className="display-3 fw-bold text-primary genetic-counter">2M+</span>
                    <div className="text-secondary mt-2">Genetic Sequences</div>
                  </div>
                  
                  {/* Genetic data particles animation */}
                  <div className="genetic-particles-container position-absolute" style={{top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none'}}>
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="genetic-particle position-absolute rounded-pill" 
                        style={{
                          width: `${Math.random() * 10 + 3}px`,
                          height: `${Math.random() * 3 + 2}px`,
                          backgroundColor: i % 3 === 0 ? '#3182CE' : i % 3 === 1 ? '#E53E3E' : '#38A169',
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: 0,
                          transform: 'scale(0)',
                          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mt-5">
                  <div className="progress rounded-pill" style={{height: '10px', backgroundColor: '#eef3f8'}}>
                    <div 
                      className="progress-bar bg-primary genomic-progress" 
                      role="progressbar" 
                      style={{
                        width: '0%',
                        transition: 'width 1.8s ease-out',
                        borderRadius: '10px'
                      }} 
                      data-value="85%"
                      aria-valuenow="0" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              
              <p className="text-secondary">
                Effortlessly navigate and select datasets tailored to your specific research or clinical requirements.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(5px) translateX(10px); }
          75% { transform: translateY(10px) translateX(-5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .genetic-particle {
          animation: particleFloat 4s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        
        .animate__animated {
          animation-duration: 1s;
        }
        
        .animate__fadeIn {
          animation-name: fadeIn;
        }
        
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        
        .animate__delay-1s {
          animation-delay: 0.3s;
        }
        
        .animate__delay-2s {
          animation-delay: 0.6s;
        }
        
        .animate__delay-3s {
          animation-delay: 0.9s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default DataBook;