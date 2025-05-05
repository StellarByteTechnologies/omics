import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import heroApp from '@/assets/images/hero/app1.png';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import HeroSwiper from './HeroSwiper';
const Hero = () => {
  return <section className="position-relative hero-1 pt-7 pt-sm-6 pb-5">
      <Container className="hero-container">
        <Row className="text-center text-md-start">
          <Col lg={6} className="pt-2 pt-sm-3">
            <h1 className="hero-title">
              The best way to <span className="highlight highlight-warning d-inline-block">Showcase</span> your Mobile App
            </h1>
            <p className="mt-3 fs-17 text-muted">
              To increase sales by skyrocketing communication with All messages in one simple dashboard it now takes seconds.
            </p>
            <div className="pt-3 pt-sm-5 d-flex align-items-center action-buttons">
              <a href="#section-download" className="btn btn-primary" data-bs-toggle="smooth-scroll">
                Download
              </a>
              <div className="ms-3">
                <Link className="text-primary d-flex align-items-center" href="">
                  <span role="button" className="btn btn-soft-primary btn-rounded-circle btn-icon me-2 shadow-none">
                    <IconifyIcon className="icon-xxs icon-dual-primary align-self-center" icon="lucide:play" />
                  </span>
                  <span className="fw-semibold">Watch Video</span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} className="offset-lg-2 text-end">
            <div className="position-relative">
              <div className="hero-img mt-4 mt-sm-0">
                <Image src={heroApp} alt="app-image" className="img-fluid" data-bs-aos="zoom-in-up" />
              </div>
              <HeroSwiper />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;