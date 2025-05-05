'use client';

import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import saas1 from '@/assets/images/hero/saas1.jpg';
import saas2 from '@/assets/images/hero/saas2.jpg';
import saas3 from '@/assets/images/hero/saas3.jpg';
import 'swiper/css';
import Link from 'next/link';
const Hero = () => {
  return <section className="position-relative overflow-hidden hero-13 pt-7 pt-lg-5 pb-6">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col lg={6}>
            <div className="mb-lg-0 mb-5">
              <h1 className="hero-title">
                The best way to <span className="highlight highlight-success d-inline-block">showcase</span> your saas
              </h1>
              <p className="fs-17 text-muted pt-3">
                Make your saas application stand out with high-quality landing page designed and developed by professional
              </p>
              <div className="pt-5">
                <Row className="g-2 text-start">
                  <Col md={4} lg={6}>
                    <label className="visually-hidden" htmlFor="email">
                      Email
                    </label>
                    <input type="email" className="form-control mb-2 me-sm-2 shadow-sm" name="email" id="email" placeholder="Your Email" />
                  </Col>
                  <Col sm={3}>
                    <div>
                      <Button variant="primary" type="button" className="mb-2">
                        Sign Up
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex mt-1 fs-12">
                <div className="me-4">
                  <IconifyIcon style={{
                  height: 20,
                  width: 20
                }} icon="fe:check" className="icon icon-dual-success icon-xs me-1" />
                  Free 14-day Demo
                </div>
                <div>
                  <IconifyIcon style={{
                  height: 20,
                  width: 20
                }} icon="fe:check" className="icon icon-dual-success icon-xs me-1" />
                  No credit card needed
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1 hero-right">
            <div className="img-container" data-aos="fade-left" data-aos-duration={1000}>
              <div className="slider">
                <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{
                delay: 5000
              }} roundLengths spaceBetween={0} loop breakpoints={{
                576: {
                  slidesPerView: 1.2
                },
                768: {
                  slidesPerView: 1
                }
              }}>
                  {[saas1, saas2, saas3].map((image, idx) => <SwiperSlide key={idx}>
                      <div className="swiper-slide-content">
                        <div className="video-overlay d-flex align-items-center justify-content-center">
                          <Link href="" className="btn-play success" />
                        </div>
                        <Image src={image} className="img-fluid rounded-lg" alt="sass-image" />
                      </div>
                    </SwiperSlide>)}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;