'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

//images
import avatar6 from '@/assets/images/avatars/img-6.jpg';
import avatar8 from '@/assets/images/avatars/img-8.jpg';

// styles
import 'swiper/css';
import Image from 'next/image';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const HeroSwiper = () => {
  return <div className="slider">
      <div className="swiper-container" data-toggle="swiper" data-swiper='{"slidesPerView":1, "loop":true, "spaceBetween": 0, "autoplay": {"delay": 5000}, "breakpoints": {"576": {"slidesPerView": 1.2 }, "768": { "slidesPerView": 1 } }, "roundLengths":true}'>
        <Swiper modules={[Autoplay]} autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }} slidesPerView={1} spaceBetween={0} loop containerModifierClass="swiper-container">
          {[avatar6, avatar8].map((avatar, idx) => <SwiperSlide key={idx} className="shadow">
              <div className="swiper-slide-content shadow bg-white rounded-sm p-3 quote">
                <div className="d-flex text-align-start">
                  <Image src={avatar} alt="avatar" className="img-fluid avatar-sm rounded-circle align-self-center me-3" />
                  <div className="flex-grow-1 fs-14 text-muted">
                    This app is blessing for all professionals!
                    <p className="mb-0">
                      <span className="ms-0">
                        {Array.from(new Array(Math.floor(5))).map((_val, idx) => <IconifyIcon icon="fe:star" key={idx} style={{
                      height: 20,
                      width: 20
                    }} className="icon icon-xxs icon-fill-warning text-warning" />)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>)}
        </Swiper>
      </div>
    </div>;
};
export default HeroSwiper;