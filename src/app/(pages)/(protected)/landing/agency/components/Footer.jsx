import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/components/common/data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currentYear, developedBy, developedByLink } from '@/assets/data/constants';
import logo from '@/assets/images/logo.png';
const Footer = () => {
  return <div className="pt-5 pb-3 position-relative bg-light">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="me-5">
              <Link className="navbar-brand me-lg-4 me-auto" href="/">
                <Image src={logo} height={30} className="d-inline-block align-top" alt="logo" />
              </Link>
              <p className="mt-4">300 Park Avenue, 12th Floor New York, NY 10022</p>
              <p className="mb-5">1499 Burwell Heights Road Port Arthur Meadow Nashville, TX 77642</p>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {Object.keys(footerLinks).slice(2, 4).map((title, idx) => {
              return <Col sm={'auto'} key={idx}>
                      <div className="ps-md-5">
                        <h6 className="mb-4 mt-5 mt-sm-2 fs-14 fw-semibold">{title}</h6>
                        <ul className="list-unstyled">
                          {footerLinks[title].links.map((link, idx) => <li className="my-2" key={idx}>
                              <Link href="" className="text-muted">
                                {link}
                              </Link>
                            </li>)}
                        </ul>
                      </div>
                    </Col>;
            })}
              <Col xs={'auto'}>
                <div className="ps-md-5">
                  <h5 className="text-dark mb-4 fw-semibold">Get in touch</h5>
                  <ul className="list-unstyled">
                    <li className="my-1">
                      <Link href="" className="text-muted">
                        hello@omaics.com
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item me-3">
                      <Link href="" className="text-muted">
                        <IconifyIcon className="icon-xs" height="20" width="20" icon="lucide:facebook" />
                      </Link>
                    </li>
                    <li className="list-inline-item me-3">
                      <Link href="" className="text-muted">
                        <IconifyIcon className="icon-xs" height="20" width="20" icon="lucide:twitter" />
                      </Link>
                    </li>
                    <li className="list-inline-item me-3">
                      <Link href="" className="text-muted">
                        <IconifyIcon className="icon-xs" height="20" width="20" icon="lucide:linkedin" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="" className="text-muted">
                        <IconifyIcon className="icon-xs" height="20" width="20" icon="lucide:instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="auto">
                <div className="ps-md-5">
                  <h5 className="text-dark mb-4 fw-semibold">Languages</h5>
                  <ul className="list-unstyled">
                    <li className="my-2">
                      <Link href="" className="text-muted">
                        Francais
                      </Link>
                    </li>
                    <li className="my-2">
                      <Link href="" className="text-muted">
                        English
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="pb-0 mb-0 fs-14 text-center text-muted">
                {currentYear} © Omaics. All rights reserved. Crafted by <a href={developedByLink}>{developedBy}</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Footer;