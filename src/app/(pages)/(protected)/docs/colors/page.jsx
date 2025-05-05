import { colorVariants } from '@/assets/data/constants';
import { Col, Row } from 'react-bootstrap';
import Backgrounds from './components/Backgrounds';
import TextColors from './components/TextColors';
import Colors from './components/Colors';
export const metadata = {
  title: 'Colors'
};
const ColorsExample = () => {
  return <Row>
      <Col xs={12}>
        <Colors variants={colorVariants} />
        <Backgrounds variants={colorVariants} />
        <TextColors variants={colorVariants} />
      </Col>
    </Row>;
};
export default ColorsExample;