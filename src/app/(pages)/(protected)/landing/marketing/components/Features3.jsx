import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
const Features3 = () => {
  return <section className="my-lg-5 py-5 marketing-3 position-relative">
      <Container>
        <Row className="align-items-center" data-aos="fade-up">
          <Col lg={7}>
            <Row className="justify-content-center">
              <Col>
                <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary mb-4">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Stockholm-icons / General / Settings-1</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Stockholm-icons-/-General-/-Settings-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" id="Combined-Shape" fill="#335EEA" />
                      <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" id="Combined-Shape" fill="#335EEA" opacity="0.3" />
                    </g>
                  </svg>
                </span>
                <h1 className="display-5 fw-semibold">Advanced Features</h1>
                <p className="text-muted my-4">
                  Aenean sagittis tellus lacus, nec aliquet mi gravida at. Aenean velit purus, consectetur ut lobortis ac, dignissim id mi.
                </p>
                <Link href="" className="h6 text-primary my-0">
                  Learn more <IconifyIcon className="ms-2 icon-xxs" icon="lucide:arrow-right" />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="offset-lg-1">
            <Card className="border rounded shadow mt-4 mt-lg-0">
              <div className="p-5">
                <h6 className="fw-medium fs-15 mb-4">
                  <IconifyIcon className="icon-xs icon-dual-success me-2" style={{
                  height: 16,
                  width: 16
                }} icon="lucide:check-circle" />
                  Unlimited Campaigns
                </h6>
                <h6 className="fw-medium fs-15 mb-4">
                  <IconifyIcon className="icon-xs icon-dual-success me-2" style={{
                  height: 16,
                  width: 16
                }} icon="lucide:check-circle" />
                  Detailed Reporting
                </h6>
                <h6 className="fw-medium fs-15 mb-4">
                  <IconifyIcon className="icon-xs icon-dual-success me-2" style={{
                  height: 16,
                  width: 16
                }} icon="lucide:check-circle" />
                  Auto Schedule Tuning
                </h6>
                <h6 className="fw-medium fs-15 mb-4">
                  <IconifyIcon className="icon-xs icon-dual-success me-2" style={{
                  height: 16,
                  width: 16
                }} icon="lucide:check-circle" />
                  Smart Analytics
                </h6>
                <h6 className="fw-medium fs-15 mb-4">
                  <IconifyIcon className="icon-xs icon-dual-success me-2" style={{
                  height: 16,
                  width: 16
                }} icon="lucide:check-circle" />
                  Notifications
                </h6>
                <h6 className="fw-medium fs-15 mb-0">
                  <IconifyIcon className="icon-xs icon-dual-success me-2" style={{
                  height: 16,
                  width: 16
                }} icon="lucide:arrow-right" />
                  And More
                </h6>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Features3;