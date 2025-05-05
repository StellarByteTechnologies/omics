import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Marketing4 from '@/assets/images/features/marketing4.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const Features4 = () => {
  return <section className="section py-4 py-sm-8 bg-gradient3 position-relative" data-aos="fade-up">
      <div className="divider top d-none d-sm-block" />
      <Container>
        <Row>
          <Col lg={5}>
            <h1 className="display-4 fw-semibold mb-4">Monitor what is being performed anytime</h1>
            <p className="mb-5">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
              non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias...
            </p>
            <Button variant="primary">
              Start Free Trial <IconifyIcon className="icon-xs ms-2" icon="lucide:arrow-right" />
            </Button>
          </Col>
          <Col lg={6} className="offset-lg-1">
            <Image src={Marketing4.src} alt="image" height={326} width={515} className="img-fluid d-block mx-auto mt-4 mt-lg-0" />
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Features4;