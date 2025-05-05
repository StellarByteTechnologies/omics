import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { features2 } from '../data';
import Image from 'next/image';
const Features2 = () => {
  return <section className="section py-5 features-2 position-relative overflow-hidden">
      <Container>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">More Features</span>
            <h1 className="display-5 fw-semibold">Features that showcase your app</h1>
            <p className="text-muted mx-auto">
              Start working with <span className="text-primary fw-bold">Prompt</span> to showcase your app to thousands of people.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          {features2.map((feature, idx) => <Col lg={4} key={idx}>
              <Card className="bg-gray-50 shadow-none shapes" data-aos="fade-up" data-aos-duration={300}>
                <div className={`shape${idx + 1}`} />
                <div className={`shape${idx + 2}`} />
                <CardBody className="text-center py-0">
                  <h3 className="fw-semibold mt-0">{feature.title}</h3>
                  <p className="fs-14">{feature.description}</p>
                  <div className="px-2 mt-3">
                    <Image src={feature.image} alt="image" className="img-fluid mt-2" />
                  </div>
                </CardBody>
              </Card>
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Features2;