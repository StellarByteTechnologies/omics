import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import googleImg from '@/assets/images/buttons/google.png';
import storeImg from '@/assets/images/buttons/store.png';
const CTA = () => {
  return <section className="section pb-0 py-4 pt-sm-6 position-relative" id="section-download" data-aos="fade-up">
      <Container className="text-center">
        <Row className="align-items-center">
          <Col>
            <h1 className="display-5 fw-medium">Start offering your users a better experience</h1>
            <p className="text-muted mx-auto">
              Start working with <span className="text-primary fw-bold">Omaics</span> to showcase your app to thousands of people.
            </p>
            <div className="text-center mt-5">
              <Link href="" className="d-block d-sm-inline-flex">
                <Image src={googleImg} alt="google play" height={52} />
              </Link>
              <Link href="" className="d-block d-sm-inline-flex mt-2 mt-sm-0 ms-0 ms-sm-2">
                <Image src={storeImg} alt="apple store" height={52} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default CTA;