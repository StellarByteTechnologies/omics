'use client';
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { FaDatabase, FaFlask, FaBolt, FaGlobeAmericas, FaArrowRight, FaVial, FaHospital, FaUsers } from 'react-icons/fa';

const DataAdvantageCard = ({ advantage, index }) => {
  const { title, points, icon } = advantage;
  
  return (
    <Card 
      className="border-0 w-100 mb-4 aos-init aos-animate overflow-hidden" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
      style={{
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.07)',
        transition: 'all 0.4s ease',
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '1px solid rgba(230, 230, 230, 0.7)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(-3deg) scale(1.03) translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(78, 115, 223, 0.07)';
        e.currentTarget.style.borderColor = 'rgba(78, 115, 223, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.07)';
        e.currentTarget.style.borderColor = 'rgba(230, 230, 230, 0.7)';
      }}
    >
      <CardBody className="p-4 d-flex flex-column" style={{ position: 'relative' }}>
        {/* Card number */}
        <div className="position-absolute top-0 end-0 mt-3 me-4">
          <span className="text-black-50" style={{ 
            opacity: 0.1, 
            fontSize: '80px', 
            fontWeight: 800, 
            lineHeight: 1,
            transform: 'translateZ(5px) rotate(-5deg)',
            display: 'block'
          }}>
            {index + 1}
          </span>
        </div>
        
        {/* Icon */}
        <div className="mb-4 position-relative">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
               style={{ 
                 width: '70px', 
                 height: '70px', 
                 zIndex: 1,
                 background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                 boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05), inset 0 -2px 5px rgba(0, 0, 0, 0.03)',
                 transform: 'translateZ(20px)',
               }}>
            <span className="text-primary" style={{ 
              fontSize: '28px',
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1))'
            }}>
              {icon}
            </span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="h4 fw-bold mb-3" style={{ 
          position: 'relative', 
          transform: 'translateZ(15px)',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' 
        }}>{title}</h3>
        
        {/* Description - always visible */}
        <div style={{ transform: 'translateZ(10px)' }}>
          <ul className="text-muted mb-4" style={{ position: 'relative' }}>
            {points.map((point, idx) => (
              <li key={idx} className="mb-2">{point}</li>
            ))}
          </ul>
        </div>
        
        {/* Learn more link */}
        {/* <div className="mt-auto" style={{ transform: 'translateZ(15px)' }}>
          <a href="#" className="text-decoration-none text-primary d-inline-flex align-items-center" 
             style={{
               padding: '8px 16px',
               borderRadius: '20px',
               background: 'rgba(78, 115, 223, 0.07)',
               transition: 'all 0.3s ease',
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.background = 'rgba(78, 115, 223, 0.15)';
               e.currentTarget.style.transform = 'translateY(-2px)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.background = 'rgba(78, 115, 223, 0.07)';
               e.currentTarget.style.transform = 'translateY(0)';
             }}>
            Learn more <FaArrowRight className="ms-2" size={12} />
          </a>
        </div> */}
      </CardBody>
    </Card>
  );
};

const DataAdvantage = () => {

  const advantages = [
    {
      title: "Drug Discovery",
      points: [
        "20X larger commercial access to anonymised data and biospecimiens than US/EU public data.",
        "~50% cost saving on access to anonymised data and biospecimens, 100% regulatory-ready data sets.",
        "Access to Genomic, Transcriptomic, Proteomic, Phenomic, and Metabolomic data sets and biospecimen samples."
      ],
      icon: <FaVial />
    },
    {
      title: "Clinical Development",
      points: [
        "100% accurate data extraction utilising Agentic AI and LLMs on EHRs.",
        "50% reduction in cost compared to the nearest competitor.",
        "100% standardization against ICD-10, HL7, SNOMED, FHIR standards.",
        "Access to a mammoth amount of RWD data spanning 5 years and growing."
      ],
      icon: <FaDatabase />
    },
    {
      title: "Clinical Trials",
      points: [
        "90% time reduction on trial recruitment.",
        "40% lower cost of patient identification and recruitment.",
        "Massive expansion to diversity and geography.",
        "Access to trial sites following Good Clinical Practices (GCPs)."
      ],
      icon: <FaUsers />
    },
    {
      title: "AI Model Development",
      points: [
        "Access to training data from 90+ hospitals in India, Middle East, Africa.",
        "Data includes, images, longitudinal patient records, matched outcomes data, raw files such as .DICOM, .BAM etc.",
        "50% lower cost of data access than US/EU companies.",
        "100% better quality data than public data sets and ready for regulatory process."
      ],
      icon: <FaBolt />
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
              OmicsBank accelerates your life-sciences innovation with unmatched access to data and biospecimens at scale.
            </p>
          </Col>
        </Row>
        
        {/* Full-width cards */}
        <Row className="g-4">
          {advantages.map((advantage, idx) => (
            <Col md={12} key={idx}>
              <DataAdvantageCard 
                advantage={advantage} 
                index={idx}
              />
            </Col>
          ))}
        </Row>
        
        {/* Modern CTA */}
        <Row className="mt-5 pt-4">
          <Col lg={10} className="mx-auto">
            <Card className="border-0 bg-light rounded-4 p-0 overflow-hidden" 
                  style={{ 
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
                    transform: 'perspective(1000px)',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    border: '1px solid rgba(230, 230, 230, 0.7)',
                  }}>
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