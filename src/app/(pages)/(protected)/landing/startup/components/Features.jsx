import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import desktop1 from '@/assets/images/features/desktop1.gif';
import desktopImg from '@/assets/images/hero/desktop.jpg';
const Features = () => {
  return <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative">
      <Container>
        <Row className="align-items-center mb-6 pb-lg-5">
          <Col lg={5}>
            <div className="mb-4 mb-lg-0">
              <span className="badge rounded-pill badge-soft-danger px-2 py-1">Feature</span>
              <h1 className="display-4 fw-medium mb-3">Automate everything</h1>
              <p className="text-muted mx-auto mb-4 pb-3">
                You don&apos;t need to manully follow up with your visitors. The Prompt takes care of it and follow up automatically with them to
                understand their needs
              </p>
              <Button variant="outline-primary">
                Learn more <IconifyIcon className="icon-xxs ms-1" icon="lucide:arrow-right" />
              </Button>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-1">
            <Image src={desktop1} alt="image" className="img-fluid" data-aos="fade-left" data-aos-duration={1000} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="bg-white p-2 rounded border shadow mb-lg-0 mb-3" data-aos="fade-right" data-aos-duration={1500}>
              <Image src={desktopImg} alt="desktop" className="img-fluid" />
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <div className="mt-4 mt-lg-0">
              <h1 className="display-4 fw-medium mb-3">Auto-tune your marketing campaigns</h1>
              <p className="text-muted mx-auto mb-4 pb-3">
                The prompts keeps an eye on your all marketting effort and auto tune the marketing campaigns settings to make them perform better
              </p>
              <Button variant="outline-primary">
                Learn more <IconifyIcon className="icon-xxs ms-1" icon="lucide:arrow-right" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Features;