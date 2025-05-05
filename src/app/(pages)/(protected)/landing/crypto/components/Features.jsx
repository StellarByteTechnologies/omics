import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const FeatureCard = ({
  feature
}) => {
  const {
    description,
    icon,
    title
  } = feature;
  return <Card className="shadow">
      <CardBody>
        <div className="d-flex text-align-start">
          <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-4 flex-shrink-0">
            {icon}
          </span>
          <div className="flex-grow-1">
            <h5 className="mt-0">{title}</h5>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const Features = ({
  features
}) => {
  return <section className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Why Choose Us</span>
            <h1 className="display-5 fw-medium">The most trusted way to buy or sell crypto currency</h1>
            <p className="text-muted mx-auto">Here are the few reasons why you should choose us</p>
          </Col>
        </Row>
        <Row className="mt-5">
          {features.map((feature, idx) => <Col lg={6} key={idx}>
              <FeatureCard feature={feature} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Features;