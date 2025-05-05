'use client';

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar3 from '@/assets/images/avatars/img-3.jpg';
import Image from 'next/image';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const slideImages = [avatar1, avatar2, avatar3];
const Testimonial = () => {
  const swiperConfig = {
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      }
    },
    roundLengths: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-custom-next',
      prevEl: '.swiper-custom-prev'
    }
  };
  return <section className="section pt-5 pb-7 position-relative features-4">
      <Container>
        <Row>
          <Col>
            <h3>Feedback From Client</h3>
          </Col>
        </Row>
        <Row className="testimonials-2 mt-5">
          <Col lg={10} className="offset-lg-1">
            <div className="slider">
              <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]} {...swiperConfig}>
                {slideImages.map((image, idx) => <SwiperSlide key={idx}>
                    <Card className="mb-0 border rounded">
                      <CardBody className="testimonial-body shadow">
                        <p className="quotation-mark text-muted">“</p>
                        <h4 className="fw-normal mb-3 mt-0">
                          It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks,
                          but this one is far better than others. Simply loved it!
                        </h4>
                        <hr />
                        <div className="d-flex pt-2">
                          <Image className="me-2 rounded-circle" src={image} alt="avatar" height={36} />
                          <div className="flex-grow-1">
                            <h6 className="m-0">John Stark</h6>
                            <p className="my-0 text-muted fs-13">Engineering Director</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </SwiperSlide>)}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Testimonial;