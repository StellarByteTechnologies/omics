'use client';
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { FaDatabase, FaFlask, FaBolt, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';

const DataAdvantageCard = ({ advantage, index }) => {
  const { title, description, icon } = advantage;
  
  return (
    <Card 
      className="border-0 h-100 aos-init aos-animate overflow-hidden" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
      style={{
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.03)';
      }}
    >
      <CardBody className="p-4 d-flex flex-column">
        {/* Card number */}
        <div className="position-absolute top-0 end-0 mt-3 me-4">
          <span className="text-black-50" style={{ opacity: 0.1, fontSize: '80px', fontWeight: 800, lineHeight: 1 }}>
            {index + 1}
          </span>
        </div>
        
        {/* Icon */}
        <div className="mb-4 position-relative">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
               style={{ width: '70px', height: '70px', zIndex: 1 }}>
            <span className="text-primary" style={{ fontSize: '28px' }}>
              {icon}
            </span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="h4 fw-bold mb-3">{title}</h3>
        
        {/* Description */}
        <p className="text-muted mb-4">{description}</p>
        
        {/* Read more link */}
        <div className="mt-auto">
          <a href="#" className="text-decoration-none text-primary d-inline-flex align-items-center">
            Learn more <FaArrowRight className="ms-2" size={12} />
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

const DataAdvantage = () => {
  const advantages = [
    {
      title: "Accelerate Drug Discovery",
      description: "Slash research timelines and reduce costs drastically with instant access to robust, actionable multi-model healthcare data.",
      icon: <FaFlask />
    },
    {
      title: "Power Up Your AI Models",
      description: "Fuel your AI models and LLMs with multi-model longitudinal quality, real-world health data. Data compliant with GDPR, HIPPA, DPDP.",
      icon: <FaBolt />
    },
    {
      title: "Drive Clinical Excellence",
      description: "Turn clinical decisions into clinical breakthroughs with precise, personalized insights, enhancing patient outcomes and care quality.",
      icon: <FaDatabase />
    },
    {
      title: "Unlock Global Insights",
      description: "Leverage rare, structured data from developing nations, tapping into untapped opportunities and accelerating inclusive global healthcare advancements.",
      icon: <FaGlobeAmericas />
    }
  ];

  return (
    <section className="position-relative py-5 bg-white" id="data-advantage">
      {/* Modern background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="position-absolute" style={{ 
          top: '5%', 
          left: '5%', 
          width: '40%', 
          height: '70%', 
          background: 'radial-gradient(circle, rgba(78, 115, 223, 0.03) 0%, rgba(78, 115, 223, 0) 70%)',
          borderRadius: '50%'
        }}></div>
        <div className="position-absolute" style={{ 
          bottom: '10%', 
          right: '5%', 
          width: '30%', 
          height: '60%', 
          background: 'radial-gradient(circle, rgba(78, 115, 223, 0.03) 0%, rgba(78, 115, 223, 0) 70%)',
          borderRadius: '50%'
        }}></div>
      </div>
      
      <Container className="position-relative">
        {/* Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <span className="d-inline-block px-3 py-1 mb-3 rounded-pill" 
                  style={{ 
                    background: 'rgba(78, 115, 223, 0.1)', 
                    color: '#4e73df',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
              DATA ADVANTAGE
            </span>
            <h2 className="display-5 fw-bold mb-3">Get Data Advantage</h2>
            <p className="lead text-muted mb-0">
              OmicsBank supercharges your healthcare innovation with unmatched data and agentic AI capabilities
            </p>
          </Col>
        </Row>
        
        {/* Cards in modern grid layout */}
        <Row className="g-4">
          {advantages.map((advantage, idx) => (
            <Col md={6} lg={3} key={idx}>
              <DataAdvantageCard advantage={advantage} index={idx} />
            </Col>
          ))}
        </Row>
        
        {/* Modern CTA */}
        <Row className="mt-5 pt-4">
          <Col lg={10} className="mx-auto">
            <Card className="border-0 bg-light rounded-4 p-0 overflow-hidden" 
                  style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}>
              <CardBody className="p-5">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h3 className="h3 fw-bold mb-3">Ready to transform healthcare?</h3>
                    <p className="text-muted mb-md-0">
                      Experience the power of OmicsBank data advantage
                    </p>
                  </Col>
                  <Col md={4} className="text-md-end">
                    <a href="#contact" className="btn btn-primary px-4 py-3 rounded-pill d-inline-flex align-items-center">
                      Get Started <FaArrowRight className="ms-2" size={14} />
                    </a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DataAdvantage;