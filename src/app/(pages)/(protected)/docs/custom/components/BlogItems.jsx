import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import BlogPost3 from '@/components/common/BlogCards/BlogPost3';
import photo2 from '@/assets/images/photos/2.jpg';
import avatar7 from '@/assets/images/avatars/img-7.jpg';

// dummy data
import { post } from '../data';
import Image from 'next/image';
import Link from 'next/link';
const BlogCard1 = () => {
  return <Card className="card-listing-item">
      <div className="card-img-top-overlay">
        <div className="overlay" />
        <span className="card-badge top-right bg-danger text-white">Travel</span>
        <div className="position-relative">
          <Image src={photo2} alt="image" className="card-img-top h-auto" />
          <div className="shape text-white bottom">
            <svg width="528px" height="40px" viewBox="0 0 528 40" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <g id="shape" transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                <path d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z" transform="translate(7.629395E-06 6.103516E-05)" fill="currentColor" stroke="none" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <CardBody>
        <div>
          <h4>
            <Link href="" className="card-title-link">
              Top 10 must visit best beaches of Goa
            </Link>
          </h4>
          <p className="text-muted mb-2">
            Goa and its beaches do not need an introduction! The state is well known for its spectacular beaches and it is very difficult...
            <a href="">read more</a>
          </p>
          <a href=""></a>
        </div>
        <a href=""></a>
        <div className="pt-3">
          <a href=""></a>
          <Row className="align-items-center">
            <a href=""></a>
            <div className="col-auto">
              <a href=""></a>
              <p className="mb-0">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user icon icon-dual icon-xs">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </a>
                <a href="" className="fs-14 align-middle">
                  Emily Blunt
                </a>
              </p>
            </div>
            <Col className="text-end">
              <p className="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar icon icon-dual icon-xs">
                  <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                  <line x1={16} y1={2} x2={16} y2={6} />
                  <line x1={8} y1={2} x2={8} y2={6} />
                  <line x1={3} y1={10} x2={21} y2={10} />
                </svg>
                <span className="fs-14 align-middle">11 March, 2020</span>
              </p>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>;
};
const BlogCard2 = () => {
  return <Card className="card-listing-item">
      <div className="card-img-top-overlay">
        <div className="overlay" />
        <span className="card-badge top-right bg-primary text-white">Travel</span>
        <Image src={photo2} alt="image" className="card-img-top h-auto" />
        <div className="card-overlay-bottom">
          <Link href="" className="shadow-lg">
            <Image src={avatar7} alt="image" className="img-fluid avatar-xs rounded-circle avatar-border" />
            <h6 className="d-inline text-white">Emily Blunt</h6>
          </Link>
        </div>
      </div>
      <CardBody>
        <div>
          <h4>
            <Link href="" className="card-title-link">
              Top 10 must visit best beaches of Goa
            </Link>
          </h4>
          <p className="text-muted mb-2">
            Goa and its beaches do not need an introduction! The state is well known for its spectacular beaches and it is very difficult...
            <a href="">read more</a>
          </p>
        </div>
        <div className="pt-3">
          <Row className="align-items-center">
            <Col xs="auto">
              <p className="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar icon icon-dual icon-xs">
                  <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                  <line x1={16} y1={2} x2={16} y2={6} />
                  <line x1={8} y1={2} x2={8} y2={6} />
                  <line x1={3} y1={10} x2={21} y2={10} />
                </svg>
                <span className="fs-14 align-middle">11 March, 2020</span>
              </p>
            </Col>
            <Col className="text-end">
              <p className="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag icon icon-dual icon-xs align-bottom">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1={7} y1={7} x2="7.01" y2={7} />
                </svg>
                <span className="fs-14">#travel-diary</span>
              </p>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>;
};
const BlogItemsExample = () => {
  return <Row id="blog-items">
      <Col>
        <Card>
          <CardBody>
            <CardTitle as="h5" className="mb-0">
              Blog Items
            </CardTitle>
            <p className="sub-header">
              Using bootstrap&apos;s <code>.card</code>, you can create a card holding blog post.
            </p>

            <Row>
              <Col lg={6} xl={4}>
                <BlogCard1 />
              </Col>
              <Col lg={6} xl={4} className="offset-xl-2">
                <BlogCard2 />
              </Col>
            </Row>

            <p className="sub-header mt-4">An example showing minimal details</p>

            <Row>
              <Col lg={8} xl={5}>
                <BlogPost3 post={post[0]} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default BlogItemsExample;