import { Col, Row } from 'react-bootstrap';
import Alerts from './components/Alerts';
import AccordionExample from './components/Accordions';
import Badges from './components/Badges';
import { colorVariants, extendedColorVariants } from '@/assets/data/constants';
import Breadcrumbs from './components/Breadcrumb';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import TabsExample from './components/Tabs';
import Carousels from './components/Carousel';
import Dropdowns from './components/Dropdown';
import FormElements from './components/FormsElement';
import Modals from './components/Modals';
import Progressbars from './components/Progressbars';
import Paginations from './components/Pagination';
import Spinners from './components/Spinners';
import OffcanvasExample from './components/Offcanvas';
import Popovers from './components/Popovers';
import Tooltips from './components/Tooltips';
export const metadata = {
  title: 'Typography'
};
const BaseUi = () => {
  return <Row>
      <Col xs={12}>
        <Alerts />
        <AccordionExample />
        <Badges variants={colorVariants} />
        <Breadcrumbs />
        <Buttons variants={extendedColorVariants} />
        <Cards />
        <TabsExample />
        <Carousels />
        <Dropdowns />
        <FormElements />
        <Modals />
        <Progressbars />
        <Paginations />
        <Spinners variants={colorVariants} />
        <OffcanvasExample />
        <Popovers />
        <Tooltips />
      </Col>
    </Row>;
};
export default BaseUi;