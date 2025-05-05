'use client';

import { Card, Col, Container, Row, Button } from 'react-bootstrap';

// swiper
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// types

import Image from 'next/image';
const SwiperSlider = ({
  testimonials
}) => {
  const swiperConfig = {
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      '576': {
        slidesPerView: 1
      },
      '768': {
        slidesPerView: 2
      }
    },
    roundLengths: true,
    navigation: {
      nextEl: '.swiper-custom-next',
      prevEl: '.swiper-custom-prev'
    }
  };
  return <Swiper modules={[Pagination, Autoplay, Navigation]} {...swiperConfig}>
      {(testimonials || []).map((testimonials, idx) => {
      return <SwiperSlide key={idx}>
            <Card className="mb-0 shadow border">
              <Card.Body className="p-md-5">
                <h5 className="fw-normal mb-4 mt-0">{testimonials.statement}</h5>
                <div className="d-flex text-align-start">
                  <Image src={testimonials.customer.avatar} alt="avtar" className="me-2 rounded-circle" height="36" />
                  <div className="flex-grow-1">
                    <h6 className="m-0">{testimonials.customer.name}</h6>
                    <p className="my-0 text-muted fs-13">{testimonials.customer.designation}</p>
                  </div>
                  <Image src={testimonials.logo} alt="logo" height="32" />
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>;
    })}
    </Swiper>;
};
const Testimonials = ({
  testimonials
}) => {
  return <section className="section py-4 py-sm-7 position-relative overflow-hidden" data-aos="fade-up">
      <Container className="testimonials-3">
        <Row className="align-items-center">
          <Col>
            <h1 className="display-5 fw-medium">See what our members are saying</h1>
          </Col>
          <Col xs={'auto'} className="col-auto text-sm-end pt-2 pt-sm-0">
            <div className="navigations">
              <Button variant="link" className="text-orange p-0 swiper-custom-prev">
                <svg className="bi bi-arrow-left" width="1.75em" height="1.75em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button variant="link" className="text-orange p-0 swiper-custom-next">
                <svg className="bi bi-arrow-right" width="1.75em" height="1.75em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-3 mt-sm-5">
          <Col>
            <div className="slider">
              <SwiperSlider testimonials={testimonials} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Testimonials;