import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import startup1 from '@/assets/images/hero/startup1.svg';
const Hero = () => {
  return <section className="hero-4 pt-7 pb-3 py-sm-7">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={6}>
            <h1 className="hero-title">
              Smart Solution that convert Lead to <span className="highlight highlight-warning d-inline-block">Customer</span>
            </h1>
            <p className="mt-4 fs-17">An AI based solution which automatically follow ups with your leads and convert into customers</p>
            <div className="pt-3 pt-sm-5">
              <Button variant="primary">Get Started</Button>
              <Button variant="outline-primary" className="ms-2">
                Know More
              </Button>
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div className="img-container text-end pt-5 pt-sm-0">
              <Image src={startup1} alt="image" className="img-fluid" data-aos="fade-left" data-aos-duration={1000} />
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
    </section>;
};
export default Hero;