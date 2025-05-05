import { currentYear } from '@/assets/data/constants';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
const footerLinks = ['About', 'Privacy', 'Terms', 'Developers', 'Support'];
const Footer = () => {
  return <section className="section pt-lg-5 pt-3 pb-3 position-relative" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <ul className="list-inline list-with-separator">
              {footerLinks.map((title, idx) => <li className="list-inline-item me-0" key={idx}>
                  <Link href="">{title}</Link>
                </li>)}
              <li className="list-inline-item me-0">
                <Link href="">
                  Careers
                  <span className="align-middle badge badge-soft-info rounded-pill fw-normal fs-11 px-2 py-1">We&apos;re hiring</span>
                </Link>
              </li>
            </ul>
            <p className="mt-2 fs-14">
              {currentYear} © Prompt. All rights reserved. Crafted by <a href="https://coderthemes.com/">Coderthemes</a>
            </p>
            <Image src={logo} height={30} className="mt-2 mb-4" alt="logo" />
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer;