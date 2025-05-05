import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
const IntegrationCard = ({
  integration
}) => {
  const {
    app,
    appLogo,
    description
  } = integration;
  return <Card>
      <CardBody>
        <div className="d-flex text-align-start">
          <Image className="me-4 align-self-center flex-shrink-0" src={appLogo} alt="app-logo" height={60} />
          <div className="flex-grow-1">
            <h5 className="mt-0">{app}</h5>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const Integrations = ({
  integrations
}) => {
  return <section className="my-5 py-6 bg-gradient2 position-relative">
      <Container data-aos="fade-up" data-aos-duration={1500}>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Integrations</span>
            <h1 className="display-5 fw-medium">Sync your data anywhere</h1>
            <p className="text-muted mx-auto">
              Sync your campaigns or other marketing data <span className="text-primary fw-bold">anywhere</span>.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          {integrations.map((integration, idx) => <Col lg={6} key={idx}>
              <IntegrationCard integration={integration} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Integrations;