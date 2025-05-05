import { Badge, Col, Container, Row } from 'react-bootstrap';

// types

const Benefits = ({
  benefits
}) => {
  return <section className="pt-5 pb-7 career-service position-relative">
      <Container>
        <Row data-aos="fade-up">
          <Col className="text-center">
            <Badge pill bg="" className="badge-soft-primary px-2 py-1">
              Benefits
            </Badge>
            <h1 className="display-5 fw-semibold">All plans includes these benefits</h1>
            <p className="text-muted mx-auto">Some benefits of the monthly/yearly subscription</p>
          </Col>
        </Row>
        <Row>
          {(benefits || []).map((benefit, idx) => {
          return <Col lg={6} key={idx.toString()} data-aos="fade-up" data-aos-duration={(idx + (3 + idx)) * 100}>
                <div className="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                  <span className="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                    {benefit.icon}
                  </span>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">{benefit.title}</h5>
                    <p className="text-muted mb-0">{benefit.description}</p>
                  </div>
                </div>
              </Col>;
        })}
        </Row>
      </Container>
    </section>;
};
export default Benefits;