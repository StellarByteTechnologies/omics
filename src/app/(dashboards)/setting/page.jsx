import { Col, Container, Row } from 'react-bootstrap';
import AllSettings from './components/AllSettings';
export const metadata = {
  title: 'Setting'
};
const Setting = () => {
  return <section className="position-relative p-3 bg-gradient2">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-title">
              <h3 className="my-0">Account Settings</h3>
              <p className="mt-1 fw-medium">Change your account settings</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={12}>
            <AllSettings />
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Setting;