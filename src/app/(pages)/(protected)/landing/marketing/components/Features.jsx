import { Col, Container, Row } from 'react-bootstrap';
const Features = ({
  features
}) => {
  return <section className="py-5 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Features</span>
            <h1 className="display-5 fw-semibold">Marketing Solutions that works for everyone</h1>
            <p className="text-muted mx-auto">
              Start working with <span className="text-primary fw-bold">Omaics</span> to manage your marketing better.
            </p>
          </Col>
        </Row>
        <Row className="pt-5">
          {features.map((feature, idx) => <Col md={4} data-aos="fade-up" data-aos-duration={300} key={idx}>
              <span className={`bg-soft-${feature.variant} avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-${feature.variant}`}>
                {feature.icon}
              </span>
              <h4 className="mt-3 mb-2 fw-semibold">{feature.title}</h4>
              <p className="mb-4 pb-3 text-muted">{feature.description}</p>
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Features;