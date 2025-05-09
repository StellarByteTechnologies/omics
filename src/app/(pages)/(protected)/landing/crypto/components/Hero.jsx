import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import cryptoImg from '@/assets/images/hero/crypto.jpg';
import Link from 'next/link';
const Hero = () => {
  return <section className="position-relative overflow-hidden hero-7 py-5">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col lg={6}>
            <div>
              <h1 className="mt-3 mb-4 pb-2 hero-title">
                The <span className="highlight highlight-success d-inline-block">Fastest</span> &amp; Secure way to Buy, Sell and Trade
                <span data-toggle="typed" data-strings='["Cryptocurrency^1000"]' />
              </h1>
              <p className="fs-16 text-muted">A seamless, flexible and diverse platform to buy, sell and manage your cryptocurrency portfolio</p>
              <div className="py-5">
                <Row className="g-2 text-start">
                  <Col sm="auto">
                    <label className="visually-hidden" htmlFor="email">
                      email
                    </label>
                    <div className="form-control-with-hint">
                      <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                      <span className="form-control-feedback uil uil-mail fs-18" />
                    </div>
                  </Col>
                  <Col sm="auto">
                    <button className="btn btn-primary mt-1 mt-sm-0">Get Started</button>
                  </Col>
                </Row>
                <p className="text-muted mb-0 pt-2 fs-14">
                  Already using Omaics? <Link href="/account/login">Log In</Link>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1 hero-right">
            <div className="img-container">
              <Image width={657} height={521} src={cryptoImg} alt="crypto" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;