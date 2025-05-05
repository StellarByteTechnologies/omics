import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

//images
import coWorking1 from '@/assets/images/hero/coworking1.jpg';
import coWorking3 from '@/assets/images/hero/coworking3.jpg';
import coWorking4 from '@/assets/images/hero/coworking4.jpg';
import 'swiper/css';
const HeroSwiper = () => {
  return <Swiper slidesPerView={1} roundLengths spaceBetween={0} modules={[Navigation, Autoplay]} autoplay={{
    delay: 5000
  }} navigation={{
    nextEl: '.swiper-custom-next',
    prevEl: '.swiper-custom-prev'
  }} loop>
      <SwiperSlide>
        <div className="slider-item" style={{
        backgroundImage: `url(${coWorking1.src})`
      }} />
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item" style={{
        backgroundImage: `url(${coWorking3.src})`
      }} />
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item" style={{
        backgroundImage: `url(${coWorking4.src})`
      }} />
      </SwiperSlide>
    </Swiper>;
};
export default HeroSwiper;