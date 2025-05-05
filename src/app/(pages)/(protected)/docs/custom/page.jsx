import { Col, Row } from 'react-bootstrap';
import AvatarExample from './components/Avatar';
import BlogItemsExample from './components/BlogItems';
import PricingCards from './components/PricingItems';
import Gallery from './components/Gallery';
import IconExample from './components/Icons';
export const metadata = {
  title: 'Custom'
};
const Custom = () => {
  return <Row>
      <Col xs={12}>
        <AvatarExample />
        <BlogItemsExample />
        <PricingCards />
        <Gallery />
        <IconExample />
      </Col>
    </Row>;
};
export default Custom;