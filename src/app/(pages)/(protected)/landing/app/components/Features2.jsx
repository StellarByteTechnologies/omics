import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';

// Updated features data with healthcare and AI focus
const features2 = [
  {
    title: "No Scale Issues",
    description: "A rare disease is uncommon in a single nation, but aggregating data from larger populations delivers meaningful insights at scale.",
    icon: "bar-chart-fill"
  },
  {
    title: "Early Market Access",
    description: "Capitalize on early insights into emerging healthcare markets.",
    icon: "globe2"
  },
  {
    title: "Abundant High-Quality Data",
    description: "Rich, diverse datasets essential for AI training, drug discovery, and clinical research.",
    icon: "database-fill-check"
  },
  {
    title: "Genetic Diversity",
    description: "Enhanced genetic diversity in data contributes significantly to robust and universally applicable healthcare solutions.",
    icon: "diagram-3-fill"
  }
];

const Features2 = () => {
  return (
    <section className="section py-5 position-relative" id="advantages">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        background: 'linear-gradient(rgba(255, 120, 75, 0.05) 0%, rgba(255, 120, 75, 0.07) 100%) no-repeat left center',
        zIndex: 0 
      }}></div>
      
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center mb-5">
          <Col lg={9} className="text-center">
            <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fs-6">Geodiverse
</span>
            <h2 className="display-5 fw-bold mt-3 mb-3">Advantage of Data from India, Africa, and the Middle East</h2>
            <p className="text-muted fs-5 mb-0">
              Leveraging data from <span className="text-primary fw-bold">diverse and populous</span> regions unlocks unique benefits for healthcare AI advancement
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {features2.map((feature, idx) => (
            <Col md={6} xl={3} key={idx}>
              <Card className="h-100 border-0 shadow-sm rounded-4 feature-card" 
                    data-aos="fade-up" 
                    data-aos-duration={300 + (idx * 100)}>
                <CardBody className="d-flex flex-column p-4">
                  <div className="feature-icon mb-4">
                    <div className="icon-circle d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle" style={{ width: '70px', height: '70px' }}>
                      <i className={`bi bi-${feature.icon} text-primary fs-3`}></i>
                    </div>
                  </div>
                  
                  <h3 className="fw-bold fs-4 mb-3">{feature.title}</h3>
                  <p className="text-muted mb-0">{feature.description}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5 py-4">
          <Col lg={12}>
            <Card className="border-0 bg-white shadow-sm border-start border-primary border-4 rounded-3">
              <CardBody className="p-4">
                <Row className="align-items-center">
                  <Col md={1} className="text-center text-md-start mb-3 mb-md-0">
                    <i className="bi bi-lightbulb-fill text-primary fs-1"></i>
                  </Col>
                  <Col md={11}>
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="fw-bold mb-2">Why This Matters</h4>
                        <p className="mb-0 fs-5">
                          By analyzing healthcare data across these diverse regions, we are building AI solutions that work for <span className="fw-semibold text-primary">everyone</span>, not just specific populations.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features2;