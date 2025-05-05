import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button, Col, Container, Row } from 'react-bootstrap';
const Hero = () => {
  return <section className="hero-4 pb-5 pt-7 py-sm-7">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="hero-title">Awesome Mobile App</h1>
          </Col>
        </Row>
        <Row className="border-top border-bottom py-4 align-items-center mt-5">
          <Col>
            <span className="fs-14">Client</span>
            <h4 className="mt-1 fw-medium">Scarlet Johnson</h4>
          </Col>
          <Col>
            <span className="fs-14">Category</span>
            <h4 className="mt-1 fw-medium">Mobile App</h4>
          </Col>
          <Col>
            <span className="fs-14">Crafted Date</span>
            <h4 className="mt-1 fw-medium">Oct 12, 2019</h4>
          </Col>
          <Col xs="auto">
            <ul className="list-inline mb-0 me-3">
              <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">Share:</li>
              <li className="list-inline-item me-2 align-middle">
                <span role="button">
                  <IconifyIcon className="icon-xs icon-dual-primary" height="20" width="20" icon="lucide:facebook" />
                </span>
              </li>
              <li className="list-inline-item me-2 align-middle">
                <span role="button">
                  <IconifyIcon className="icon-xs icon-dual-info" height="20" width="20" icon="lucide:twitter" />
                </span>
              </li>
              <li className="list-inline-item align-middle">
                <span role="button">
                  <IconifyIcon className="icon-xs icon-dual-danger" height="20" width="20" icon="lucide:instagram" />
                </span>
              </li>
            </ul>
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" href="#">
              Project Link
            </Button>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;