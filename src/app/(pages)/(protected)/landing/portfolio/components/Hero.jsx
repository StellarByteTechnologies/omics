import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import portfolio1 from '@/assets/images/hero/portfolio1.png';
const Hero = () => {
  return <section className="hero-3 pt-7 position-relative hero-with-shapes">
      <div className="shape1" />
      <div className="shape2" />
      <div className="shape3" />
      <Container className="hero-container">
        <Row>
          <Col lg={6} data-aos="fade-right" data-aos-duration={1000}>
            <h4 className="mt-4 pt-2">
              <span>Hola!</span> I am Greeva N.
            </h4>
            <h1 className="hero-title">I&apos;m a freelance UX/UI Designer.</h1>
            <p className="mt-3 fs-16 text-secondary">
              A top-notch web designer helping business to craft their meaningful and interactive product experiences
            </p>
            <div className="pt-3 pt-sm-5">
              <a href="#contact-me-form" className="btn btn-danger" data-toggle="smooth-scroll">
                Hire Me
              </a>
              <Button variant="outline-danger" className="ms-2">
                Download CV
              </Button>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <div className="img-container text-center text-lg-end" data-aos="fade-up" data-aos-duration={500}>
              <Image src={portfolio1} className="img-fluid" alt="portfolio" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;