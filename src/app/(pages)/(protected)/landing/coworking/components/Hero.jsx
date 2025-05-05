'use client';

import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import HeroSwiper from './HeroSwiper';
const Hero = () => {
  return <section className="hero-2">
      <Container className="py-3 py-sm-6">
        <Row className="align-items-center">
          <Col lg={7}>
            <h1 className="hero-title mt-0">Explore the best coworking space in the heart of the City</h1>
          </Col>
          <Col lg={5}>
            <p className="fs-17 ps-0 ps-sm-4">No more conventional four-walled office. The fully comformtable seating solution for you.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="slider pt-3 pt-sm-5 mt-5">
              <div className="form-container">
                <Row className="align-items-top px-3 px-sm-5">
                  <Col lg={12}>
                    <Card className="mb-2">
                      <CardBody>
                        <Row className="align-items-center">
                          <Col>
                            <Row className="g-2 align-items-center">
                              <Col sm={'auto'}>
                                <h5 className="mt-0 fw-medium my-1 my-sm-0 pe-3">Search your perfect space</h5>
                              </Col>
                              <Col sm={'auto'}>
                                <label className="visually-hidden" htmlFor="location">
                                  location
                                </label>
                                <div className="form-control-with-hint me-sm-2">
                                  <input type="text" className="form-control" id="location" placeholder="Enter location" />
                                  <span className="form-control-feedback uil uil-location-pin-alt fs-18" />
                                </div>
                              </Col>
                              <Col sm={'auto'}>
                                <Button type="button" variant="orange" className="my-1 my-sm-0">
                                  Find Space
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                          <Col sm={'auto'} className="text-sm-end pt-2 pt-sm-0">
                            <div className="navigations">
                              <button className="btn btn-info swiper-custom-prev me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                                  <polyline points="15 18 9 12 15 6" />
                                </svg>
                              </button>
                              <button className="btn btn-info swiper-custom-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>

              <HeroSwiper />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape bottom d-none d-sm-block">
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