'use client';

import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
const TestimonialCard = ({
  testimonial
}) => {
  const {
    brand,
    description,
    image,
    name,
    position
  } = testimonial;
  return <Card className="mb-0 shadow border">
      <CardBody className="p-md-5">
        <p className="mb-4 mt-0">{description}</p>
        <div className="d-flex text-align-start">
          <Image className="me-2 rounded-circle" src={image} alt="avatar" height={36} />
          <div className="flex-grow-1">
            <h6 className="m-0">{name}</h6>
            <p className="my-0 text-muted fs-13">{position}</p>
          </div>
          <Image src={brand} alt="logo" height={32} />
        </div>
      </CardBody>
    </Card>;
};
const Testimonials = ({
  testimonials
}) => {
  return <section className="section mt-5 py-4 py-sm-8 bg-gradient4 position-relative overflow-hidden" data-aos="fade-up" data-aos-duration={600}>
      <div className="divider top d-none d-sm-block" />
      <Container className="testimonials-3">
        <Row className="align-items-center">
          <Col>
            <h1 className="display-5 fw-medium">Kind words from excellent clients</h1>
          </Col>
          <Col xs="auto" className="text-sm-end pt-2 pt-sm-0">
            <div className="navigations">
              <button className="btn btn-link text-normal p-0 swiper-custom-prev">
                <svg className="bi bi-arrow-left" width="1.75em" height="1.75em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="btn btn-link text-normal p-0 swiper-custom-next">
                <svg className="bi bi-arrow-right" width="1.75em" height="1.75em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mt-sm-5">
          <Col>
            <div className="slider">
              <Swiper modules={[Navigation, Autoplay]} loop spaceBetween={24} autoplay={{
              delay: 5000
            }} breakpoints={{
              576: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              }
            }} roundLengths navigation={{
              nextEl: '.swiper-custom-next',
              prevEl: '.swiper-custom-prev'
            }}>
                {testimonials.map((testimonial, idx) => <SwiperSlide key={idx}>
                    <TestimonialCard testimonial={testimonial} />
                  </SwiperSlide>)}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Testimonials;