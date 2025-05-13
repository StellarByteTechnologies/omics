'use client'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

//images
import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import spotify from '@/assets/images/brands/spotify.svg';
import shopify from '@/assets/images/brands/shopify.svg';

const Clients = () => {
  const clients = [amazon, google, paypal, spotify, shopify];
  const logoContainerRef = useRef(null);
  
  // Animation for logos moving from left to right in an infinite loop
  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;
    
    let position = 0;
    const speed = 0.5;
    const logoWidth = container.scrollWidth / 2;  // Half because we duplicated the logos
    
    const animate = () => {
      position -= speed; // Moving left to right means container moves right to left
      
      // Reset position once first set of logos is out of view
      if (Math.abs(position) >= logoWidth) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      quote: "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CMO at TechGlobal"
    },
    {
      quote: "The results speak for themselves. Our conversion rate increased by 45% within just two months of implementing their recommendations.",
      author: "Michael Chen",
      position: "Founder, Innovate Solutions"
    },
    {
      quote: "Their expertise and professionalism made our collaboration seamless. I couldn't be happier with the outcome.",
      author: "Elena Rodriguez",
      position: "Director of Marketing, Horizon Enterprises"
    }
  ];

  return (
    <section className="section py-5 py-sm-8 bg-light position-relative">
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row className="py-4">
          <Col lg={12} className="text-center mb-5">
            <span className="badge rounded-pill badge-soft-orange px-3 py-2 mb-3">Testimonials</span>
            <h1 className="display-5 fw-semibold mb-2">What Our Clients Say</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>Hear from the companies that have transformed their business with our solutions</p>
          </Col>
        </Row>
        
        {/* Testimonials */}
        <Row className="justify-content-center mb-5 g-4">
          {testimonials.map((testimonial, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="testimonial-card p-4 p-lg-5 rounded shadow bg-white h-100 transition-hover" 
                style={{ borderLeft: '4px solid #FF6B35', transition: 'all 0.3s ease' }}>
                <div className="quote-mark mb-3 text-orange">
                  <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9127 0L0 16.9127V36H19.0873V16.9127H6.3497L19.0873 4.1751V0H16.9127ZM38.8254 0L21.9127 16.9127V36H41V16.9127H28.2624L41 4.1751V0H38.8254Z" fill="#FF6B35" fillOpacity="0.5"/>
                  </svg>
                </div>
                <p className="mb-4 lead fs-5">{testimonial.quote}</p>
                <div className="testimonial-author d-flex align-items-center mt-4">
                  <div className="author-avatar me-3 rounded-circle bg-soft-orange d-flex align-items-center justify-content-center" 
                    style={{ width: '50px', height: '50px', fontSize: '18px', fontWeight: 'bold', color: '#FF6B35' }}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">{testimonial.author}</h5>
                    <p className="text-muted mb-0 small">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Client logos with animation */}
        <Row className="mt-5">
          <Col lg={12} className="mb-5">
            <div className="logo-section bg-white rounded shadow-sm py-4">
              <h5 className="text-center text-secondary mb-4">Trusted by leading companies worldwide</h5>
              <div className="logos-container" style={{ position: 'relative', height: '80px', overflow: 'hidden' }}>
                <div 
                  ref={logoContainerRef} 
                  className="logos-slider d-flex align-items-center"
                  style={{ position: 'absolute', width: '200%' }}
                >
                  {/* Duplicate logos for continuous animation */}
                  {[...clients, ...clients, ...clients].map((client, idx) => (
                    <div key={idx} className="mx-5 logo-item">
                      <Image src={client} alt="client logo" height={45} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="divider bottom d-none d-sm-block" />
    </section>
  );
};

export default Clients;