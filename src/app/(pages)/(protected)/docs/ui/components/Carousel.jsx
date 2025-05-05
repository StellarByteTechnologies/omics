import { Card, CardBody, CardTitle, Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';

// images
import FirstSlide from '@/assets/images/photos/1.jpg';
import SecondSlide from '@/assets/images/photos/2.jpg';
import ThirdSlide from '@/assets/images/photos/3.jpg';
import Image from 'next/image';
const DefaultCarousel = () => {
  return <>
      <p className="sub-header">A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
      <Carousel className="doc-carousel">
        <CarouselItem>
          <Image src={FirstSlide} alt="First Slide" className="d-block w-100" />
        </CarouselItem>
        <CarouselItem>
          <Image src={SecondSlide} alt="Second Slide" className="d-block w-100" />
        </CarouselItem>
        <CarouselItem>
          <Image src={ThirdSlide} alt="Third Slide" className="d-block w-100" />
        </CarouselItem>
      </Carousel>
    </>;
};
const CaptionCarousel = () => {
  return <>
      <p className="sub-header mt-4">
        Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.
      </p>
      <Carousel className="doc-carousel">
        <CarouselItem>
          <Image src={FirstSlide} alt="First Slide" className="d-block w-100" />
          <CarouselCaption>
            <h3 className="text-white">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <Image src={SecondSlide} alt="Second Slide" className="d-block w-100" />
          <CarouselCaption>
            <h3 className="text-white">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <Image src={ThirdSlide} alt="Third Slide" className="d-block w-100" />
          <CarouselCaption>
            <h3 className="text-white">Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    </>;
};
const Carousels = () => {
  return <Card id="carousel">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Carousel
        </CardTitle>
        <DefaultCarousel />
        <CaptionCarousel />
      </CardBody>
    </Card>;
};
export default Carousels;