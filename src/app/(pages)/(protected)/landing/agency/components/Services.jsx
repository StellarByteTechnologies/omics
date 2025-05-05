import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const ServiceCard = ({
  service
}) => {
  const {
    description,
    icon,
    title,
    variant
  } = service;
  return <Card className="border-0 shadow-none feature-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={500}>
      <CardBody>
        <span className={`bg-soft-${variant} avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-${variant} me-3`}>{icon}</span>
        <h4 className="mt-3 mb-2 fw-semibold">{title}</h4>
        <p className="text-muted mb-0">{description}</p>
      </CardBody>
    </Card>;
};
const Services = ({
  services
}) => {
  return <section className="position-relative py-6">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="display-5 fw-semibold">What We Do</h1>
            <p className="text-muted mx-auto">We are helping businesses to develop their web applications</p>
          </Col>
        </Row>
        <Row className="pt-5 features-5">
          {services.map((service, idx) => <Col md={4} key={idx}>
              <ServiceCard service={service} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Services;