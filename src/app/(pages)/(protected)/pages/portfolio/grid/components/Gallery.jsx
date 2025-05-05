'use client';

import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import clsx from 'clsx';
const GlightBox = dynamic(() => import('@/components/GlightBox'), {
  ssr: false
});
import Image from 'next/image';
import dynamic from 'next/dynamic';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const GalleryCard = ({
  galleryItem
}) => {
  const {
    image,
    description,
    title
  } = galleryItem;
  return <Card className="card-portfolio-item shadow border filter-item all web graphic">
      <div className="p-2">
        <div className="card-zoom">
          <GlightBox href={image.src} className="image-popup" data-title="Smart Desk v2.0">
            <Image width={338} height={190} src={image} className="card-img-top" alt="work-thumbnail" />
          </GlightBox>
        </div>
      </div>
      <CardBody className="p-2">
        <div className="mt-2">
          <h5 className="mt-0">{title}</h5>
          <p className="text-muted mb-1">{description}</p>
        </div>
      </CardBody>
    </Card>;
};
const Gallery = ({
  galleryItems
}) => {
  const [gallery, setGallery] = useState(galleryItems);
  const [category, setCategory] = useState('all');
  const filterImages = category => {
    setCategory(category);
    setTimeout(() => {
      const galleryAlbums = category === 'all' ? galleryItems : galleryItems.filter(album => album.category?.includes(category));
      setGallery(galleryAlbums);
    }, 300);
  };
  return <section className="overflow-hidden py-5 py-md-6 py-lg-7">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-center filter-menu" data-toggle="item-filter" data-menu-item=".filter-menu-item" data-target-container="#filterable-content">
              <span role="button" className={clsx('filter-menu-item', {
              active: category === 'all'
            })} onClick={() => filterImages('all')}>
                All
              </span>
              <span role="button" className={clsx('filter-menu-item', {
              active: category === 'web'
            })} onClick={() => filterImages('web')}>
                Web Design
              </span>
              <span role="button" className={clsx('filter-menu-item', {
              active: category === 'graphic'
            })} onClick={() => filterImages('graphic')}>
                Graphic Design
              </span>
              <span role="button" className={clsx('filter-menu-item', {
              active: category === 'illustrator'
            })} onClick={() => filterImages('illustrator')}>
                Illustrator
              </span>
              <span role="button" className={clsx('filter-menu-item', {
              active: category === 'photography'
            })} onClick={() => filterImages('photography')}>
                Photography
              </span>
            </div>
          </Col>
        </Row>
        <div data-toggle="image-gallery" data-delegate="a" data-type="image" data-enable-gallery="true" className="mt-5">
          <Row className="grid-portfolio" id="filterable-content">
            {gallery.map((item, idx) => <Col sm={6} xl={4} className="filter-item" key={idx}>
                <GalleryCard galleryItem={item} />
              </Col>)}
          </Row>
        </div>
        <div className="text-center mt-5 pb-md-0">
          <Button variant="primary">
            <IconifyIcon icon="lucide:refresh-ccw" className="icon-xxs me-2" />
            Load More
          </Button>
        </div>
      </Container>
    </section>;
};
export default Gallery;