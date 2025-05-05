import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const FeatureCard = ({
  description,
  icon,
  title
}) => {
  return <Card className="shadow">
      <CardBody>
        <div className="d-flex text-align-start">
          <span className="bg-soft-orange avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-orange me-4 flex-shrink-0">{icon}</span>
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
  return <section className="my-lg-5 py-5 py-sm-7 bg-gradient5 position-relative" data-aos="fade-up">
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-orange px-2 py-1">Features</span>
            <h1 className="display-5 fw-semibold">Why Choose Us</h1>
            <p className="text-secondary mx-auto">The benefits that will make you comfort</p>
          </Col>
        </Row>
        <Row className="mt-5">
          {features.map((feature, idx) => <Col lg={6} key={idx}>
              <FeatureCard {...feature} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Features;