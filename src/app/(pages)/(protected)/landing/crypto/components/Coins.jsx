import Image from 'next/image';
import { Button, Col, Container, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const Coins = ({
  coins
}) => {
  return <section className="pt-8 pb-5 position-relative overflow-hidden" data-aos="fade-up">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="display-5 fw-semibold">Supported coins</h1>
            <p className="text-muted mx-auto">
              Fastest way to buy or sell <span className="text-dark fw-medium">popular</span> crypto coins.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          {coins.map((coin, idx) => <Col lg={3} md={6} key={idx}>
              <div className="d-flex align-items-center py-lg-2 my-4">
                <Image src={coin.image} className="icon me-3" alt="coin-img" />
                <div className="flex-grow-1">
                  <h4 className="my-0 fw-medium">{coin.name}</h4>
                </div>
              </div>
            </Col>)}
        </Row>
        <Row className="mt-4">
          <Col lg={12} className="mt-4 mt-lg-2 text-center">
            <Button variant="primary">
              View complete list <IconifyIcon className="ms-2 icon icon-xs" icon="lucide:arrow-right" style={{
              height: 20,
              width: 20
            }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Coins;