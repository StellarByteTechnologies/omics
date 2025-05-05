import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import codeImg from '@/assets/images/other/code.jpg';
const Integration = () => {
  return <section className="position-relative py-xl-8 py-6 features-3" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="mb-5 mb-lg-0">
              <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3">
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <title>Stockholm-icons / Code / Code</title>
                  <desc>Created with Sketch.</desc>
                  <g id="Stockholm-icons-/-Code-/-Code" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <rect id="bound" x={0} y={0} width={24} height={24} />
                    <path d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z" id="Combined-Shape" fill="#335EEA" />
                    <rect id="Rectangle-28" fill="#335EEA" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) " x={11} y={4} width={2} height={16} rx={1} />
                  </g>
                </svg>
              </span>
              <h1 className=" mb-1 my-4">Easy to Integrate - SDK</h1>
              <p className="text-muted my-4">
                Maecenas blandit aliquam sem, auctor accumsan mauris finibus pellentesque. In vestibulum ac nunc ut rutrum. Donec mollis viverra magna
                vel tincidunt.
              </p>
              <p className="text-muted mt-3 mb-5">
                Ut faucibus libero non tortor commodo, ac faucibus lectus fermentum. Sed sit amet ornare turpis, ac lobortis urna.
              </p>
              <Button variant="primary" className="me-2">
                Explore the SDK
              </Button>
              <Button variant="soft-primary">Documentation</Button>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-1">
            <Image src={codeImg} alt="app img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Integration;