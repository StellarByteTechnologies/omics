import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { gallery } from '../data';
const GlightBox = dynamic(() => import('@/components/GlightBox'), {
  ssr: false
});
import Image from 'next/image';
import img7 from '@/assets/images/photos/11.jpg';
import img8 from '@/assets/images/photos/5.jpg';
import img9 from '@/assets/images/photos/7.jpg';
import img10 from '@/assets/images/photos/8.jpg';
import img11 from '@/assets/images/photos/10.jpg';
import dynamic from 'next/dynamic';
const SimpleGallery = () => {
  return <>
      <h6 className="mt-4 mb-1">Simple Example</h6>
      <p className="sub-header mb-4">
        Just specify data attribute <code>data-toggle=&quote;image-gallery&quote;</code> to any div element containing your gallery items to enabled
        it.
      </p>
      <div data-toggle="image-gallery" data-delegate="a" data-type="image" data-enable-gallery="true">
        <Row>
          {gallery.map((image, idx) => <Col lg={4} xs={6} key={idx}>
              <GlightBox href={image.image.src}>
                <Card>
                  <Image src={image.image} alt="" className="img-fluid rounded-sm shadow" />
                </Card>
              </GlightBox>
            </Col>)}
        </Row>
      </div>
    </>;
};
const GridGallery = () => {
  const galleryImages = [img8, img9, img10, img11];
  return <div data-toggle="image-gallery" data-delegate="a" data-type="image" data-enable-gallery="true">
      <Row>
        <Col lg={5}>
          <Card className="border-0 shadow-none overflow-hidden rounded">
            <GlightBox href={img7.src}>
              <Image src={img7} alt="image" className="img-fluid mx-auto d-block rounded-sm" />
            </GlightBox>
          </Card>
        </Col>
        <Col lg={7}>
          <Row>
            {galleryImages.map((image, idx) => <Col md={6} key={idx}>
                <Card className="gallery-box  border-0 shadow overflow-hidden rounded-sm">
                  <GlightBox href={image.src}>
                    <Image src={image} alt="gallery" className="img-fluid mx-auto d-block" />
                  </GlightBox>
                </Card>
              </Col>)}
          </Row>
        </Col>
      </Row>
    </div>;
};
const Gallery = () => {
  return <Card id="gallery">
      <CardBody>
        <h5 className="card-title mb-0">Gallery</h5>
        <p className="sub-header">
          Using <a href="https://github.com/dimsemenov/Magnific-Popup/">Magnific Popup</a> plugin, you can easily create a gallery of images, videos
          or other custom items. It&apos;s a fast, light and responsive lightbox plugin, for jQuery and Zepto.js.
        </p>
        <SimpleGallery />
        <GridGallery />
      </CardBody>
    </Card>;
};
export default Gallery;