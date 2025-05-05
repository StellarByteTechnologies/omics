'use client';

import clsx from 'clsx';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const GlightBox = dynamic(() => import('@/components/GlightBox'), {
  ssr: false
});
const GalleryCard = ({
  galleryItem
}) => {
  const {
    image,
    description,
    title
  } = galleryItem;
  return <Card className="card-portfolio-item mb-0 shadow border filter-item" suppressHydrationWarning>
      <div className="p-2">
        <div className="card-zoom">
          <GlightBox href={image.src} className="image-popup h-auto" data-title="Smart Desk v2.0">
            <Image src={image} className="card-img-top h-auto" alt="work-thumbnail" />
          </GlightBox>
        </div>
      </div>
      <CardBody className="p-2">
        <h5 className="mt-2">{title}</h5>
        <p className="text-muted mb-1">{description}</p>
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
            <div className="text-center filter-menu mb-5" data-menu-item=".filter-menu-item" data-target-container="#filterable-content">
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
        <ResponsiveMasonry columnsCountBreakPoints={{
        350: 1,
        750: 2,
        900: 3
      }}>
          <Masonry gutter="1.5rem" columnsCount={3}>
            {gallery.map((item, idx) => <GalleryCard galleryItem={item} key={idx} />)}
          </Masonry>
        </ResponsiveMasonry>
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