import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currentYear } from '@/assets/data/constants';

const Footer = () => {
  return (
    <div className="pt-5 pb-3 position-relative bg-white">
      <Container>
        {/* Main Footer Content - Two Column Layout */}
        <Row className="mb-5">
          {/* Left Column - Logo and Newsletter */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <Link className="navbar-brand d-inline-block mb-4" href="/">
              <span className="fw-bold fs-4">Omics Bank</span>
            </Link>
            <div>
              <h4 className="fw-bold mb-4">Subscribe to Newsletter</h4>
              <div className="d-flex newsletter-input">
                <input 
                  type="email" 
                  className="form-control border-end-0" 
                  placeholder="your@email.com" 
                />
                <button className="btn btn-primary">
                  <IconifyIcon icon="lucide:arrow-right" />
                </button>
              </div>
            </div>
            
            {/* Certificates Section with SVG */}
            <div className="mt-5">
              <h6 className="text-muted mb-4">CERTIFICATES</h6>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="white"/>
                    <text x="20" y="22" textAnchor="middle" fontSize="8" fontWeight="bold">ISO</text>
                    <text x="20" y="28" textAnchor="middle" fontSize="6">27001</text>
                  </svg>
                  <div className="ms-2">
                    <div>ISO</div>
                    <div>27001</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="white"/>
                    <text x="20" y="20" textAnchor="middle" fontSize="8" fontWeight="bold">SOC 2</text>
                    <text x="20" y="28" textAnchor="middle" fontSize="5">(Coming Soon)</text>
                  </svg>
                  <div className="ms-2">
                    <div>SOC 2</div>
                    <div>(Coming Soon)</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="white"/>
                    <text x="20" y="22" textAnchor="middle" fontSize="8" fontWeight="bold">GDPR</text>
                    <text x="20" y="28" textAnchor="middle" fontSize="6">compliant</text>
                  </svg>
                  <div className="ms-2">
                    <div>GDPR</div>
                    <div>compliant</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="white"/>
                    <text x="20" y="22" textAnchor="middle" fontSize="8" fontWeight="bold">HIPAA</text>
                    <text x="20" y="28" textAnchor="middle" fontSize="6">compliant</text>
                  </svg>
                  <div className="ms-2">
                    <div>HIPAA</div>
                    <div>compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Right Column - Address, Contact, and Social Links */}
          <Col lg={8}>
            <Row>
              {/* Address Section (Replaced Company) */}
              <Col md={4} className="mb-4 mb-md-0">
                <h6 className="text-muted mb-4">ADDRESS</h6>
                <p className="mb-2">169 Madison Avenue,</p>
                <p className="mb-2">STE 11133,</p>
                <p className="mb-4">New York, NY 10016, USA</p>
              </Col>
              
              {/* Contact Section (Replaced Solutions) */}
              <Col md={4} className="mb-4 mb-md-0">
                <h6 className="text-muted mb-4">CONTACT</h6>
                <p className="mb-2">Phone: +1 (555) 123-4567</p>
                <p className="mb-4">Email: info@omicsbank.com</p>
                
                <p className="mb-2">Support: +1 (800) 555-0123</p>
                <p className="mb-2">Hours: 9AM-6PM EST</p>
                <p className="mb-2">Monday - Friday</p>
              </Col>
              
              {/* Follow Us Section (Kept as is) */}
              <Col md={4}>
                <h6 className="text-muted mb-4">FOLLOW US</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link href="https://twitter.com" className="text-dark text-decoration-none">
                      Twitter
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://linkedin.com/company" className="text-dark text-decoration-none">
                      LinkedIn
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://youtube.com" className="text-dark text-decoration-none">
                      Youtube
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5 pt-3 border-top">
          <Col className="d-flex justify-content-between align-items-center">
            <div>© {currentYear} Omics Bank</div>
            <div>
              Site By <Link href="https://stellarbyt.com" className="text-primary text-decoration-none">Stellarbyte</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;