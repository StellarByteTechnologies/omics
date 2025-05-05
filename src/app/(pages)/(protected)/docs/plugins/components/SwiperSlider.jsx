'use client';

import Image from 'next/image';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperSlidesData } from '../data';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const SwiperSlider = () => {
  const swiperConfig = {
    breakpoints: {
      576: {
        slidesPerView: 1.2
      },
      768: {
        slidesPerView: 1
      }
    },
    pagination: {
      dynamicBullets: true
    },
    roundLengths: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 5000
    }
  };
  return <Row id="swiper">
      <Col>
        <Card>
          <CardBody>
            <h5 className="card-title mb-0">Swiper</h5>
            <p className="sub-header">
              Using <a href="https://swiperjs.com/">Swipper</a> plugin, you can easily create carousels. It&apos;s being used in almost all the pages
              where we are having slider in hero element.
            </p>
            <h6 className="mt-4 mb-1">Simple Example</h6>
            <p className="sub-header mb-4">
              Just specify data attribute <code>data-toggle=&quote;swiper&quote;</code> to any div element containing your items to enabled it.
              Optionally you can pass all options mentioned in the plugin&apos;s official documentation via data attribute <code>swiper</code> E.g.{' '}
              <code>
                data-swiper=&quote;{'{'}
                {'}'}&quote;
              </code>
              .
            </p>
            <Row>
              <Col lg={12}>
                <div className="slider">
                  <Swiper modules={[Pagination, Autoplay]} {...swiperConfig}>
                    {swiperSlidesData.map((slide, idx) => <SwiperSlide key={idx}>
                        <div className="swiper-slide-content">
                          <Row className="text-center">
                            <Col>
                              <Image src={slide.image} alt="image" className="w-75 h-auto" />
                            </Col>
                          </Row>
                          <Row className="text-center my-4 pb-5">
                            <Col>
                              <h5 className="fw-medium fs-16">{slide.slideTitle}</h5>
                              <p className="text-muted">{slide.description}</p>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>)}
                    <div className="swiper-pagination" />
                  </Swiper>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default SwiperSlider;