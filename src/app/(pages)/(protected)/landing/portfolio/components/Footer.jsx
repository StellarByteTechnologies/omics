import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return <section className="section pt-4 pb-3 position-relative">
      <Container>
        <Row className="align-items-center border-top border-light pt-4">
          <Col className="text-center">
            <ul className="list-inline list-with-separator">
              <li className="list-inline-item me-0">
                <Link href="">About</Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="">Services</Link>
              </li>
              <li className="list-inline-item me-0">
                <Link href="">Contact</Link>
              </li>
            </ul>
            <p className="mt-2">
              {currentYear} © Prompt. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer;