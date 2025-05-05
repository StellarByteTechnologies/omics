import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const ServiceCard = ({
  service
}) => {
  const {
    description,
    icon,
    title
  } = service;
  return <Card className="shadow feature-item rounded-0" data-aos="fade-up" data-aos-duration={600}>
      <CardBody className="text-start">
        <div className="bg-soft-danger avatar avatar-sm icon icon-with-bg icon-xs text-danger">{icon}</div>
        <h4 className="mt-4 text-dark">{title}</h4>
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
          <Col className="text-start">
            <h1 className="display-5 fw-semibold">What I Do</h1>
            <p className="text-muted mx-auto">
              Connecting brands and companies with their customers through <span className="text-danger fw-medium">good design</span>.
            </p>
          </Col>
        </Row>
        <Row className="pt-5 align-items-center features-9">
          {services.map((service, idx) => <Col lg={4} key={idx}>
              <ServiceCard service={service} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Services;