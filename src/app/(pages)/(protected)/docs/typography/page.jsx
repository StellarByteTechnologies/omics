import { Col, Row } from 'react-bootstrap';
import RegularHeading from './components/RegularHeading';
import DisplayHeading from './components/DisplayHeading';
import InlineText from './components/InlineText';
export const metadata = {
  title: 'Typography'
};
const Typography = () => {
  return <Row>
      <Col xs={12}>
        <RegularHeading />
        <DisplayHeading />
        <InlineText />
      </Col>
    </Row>;
};
export default Typography;