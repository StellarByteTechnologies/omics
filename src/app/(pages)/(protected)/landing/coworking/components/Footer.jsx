import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { footerLinks } from '@/components/common/data';
import { currentYear } from '@/assets/data/constants';
const Footer = () => {
  return <section className="py-5 py-sm-6 bg-gradient5">
      <Container>
        <Row>
          <Col lg={4}>
            <Link className="navbar-brand me-lg-4 me-auto pt-0" href="/">
              <Image src={logo} height={30} className="d-inline-block align-top" alt="image" />
            </Link>
            <div>
              <p className="mt-3 mb-1 text-dark">At vero eos et accusamus et iusto dignissimos ducimus odio.</p>
              <p className="mt-lg-5 pt-4 mb-lg-0 mb-4 text-dark">Prompt {currentYear}. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={7} className="offset-lg-1">
            <Row>
              {Object.keys(footerLinks).slice(2, 4).map((title, idx) => {
              return <Col md={3} sm={6} key={idx}>
                      <h6 className="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">{title}</h6>
                      <ul className="list-unstyled">
                        {footerLinks[title].links.map((link, idx) => <li className="my-3" key={idx}>
                            <Link href="" className="text-dark">
                              {link}
                            </Link>
                          </li>)}
                      </ul>
                    </Col>;
            })}
              <Col md={5} className="offset-md-1">
                <h6 className="mb-4 mt-4 mt-sm-2 text-dark fw-semibold text-uppercase">Subscribe To Newsletters</h6>
                <div className="input-group my-3">
                  <input type="text" className="form-control h-auto" placeholder="Your email" aria-label="keywords" />
                  <Button variant="secondary" className="input-group-text">
                    <IconifyIcon width={20} height={20} className="icon-xs" icon="fe:mail" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Footer;