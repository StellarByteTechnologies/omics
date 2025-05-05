import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import { Col, Container, Row } from 'react-bootstrap';
import HelpLinks from './components/HelpLinks';
import { helpLinks } from './data';
import FAQs from './components/FAQs';
import SupportCenter from './components/SupportCenter';
import Footer from '@/components/common/Footer';
export const metadata = {
  title: 'Help'
};
const Help = () => {
  return <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />

      <section className="section py-5 py-lg-8 mb-5 mb-sm-0 position-relative">
        <Container>
          <Row>
            <Col lg={8}>
              <HelpLinks helpLinks={helpLinks} />
              <FAQs />
            </Col>
            <Col lg={4}>
              <SupportCenter />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>;
};
export default Help;