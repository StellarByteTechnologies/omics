import { Card, CardBody, Col, Row } from 'react-bootstrap';
import coworking2 from '@/assets/images/hero/coworking2.jpg';
import dynamic from 'next/dynamic';
const Jarallax = dynamic(() => import('@/components/Jarallax'), {
  ssr: false
});
const JarallaxExample = () => {
  return <Row id="jarallax">
      <Col>
        <Card>
          <CardBody>
            <h5 className="card-title mb-0">Just Another Parallax</h5>
            <p className="sub-header">
              Smooth parallax scrolling effect for background images, videos. Code in pure JavaScript with NO dependencies + jQuery supported.
              YouTube, Vimeo and Self-Hosted Videos parallax supported.
            </p>
            <div className="py-3">
              <Row className="text-center">
                <Col lg={12}>
                  <div className="position-relative">
                    <Jarallax className="jarallax" data-jarallax data-speed=".2" style={{
                    backgroundImage: `url(${coworking2.src})`,
                    height: 320
                  }} />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default JarallaxExample;