import { toSentenceCase } from '@/utils/change-casing';
import clsx from 'clsx';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'react-bootstrap';
const Colors = ({
  variants
}) => {
  return <Card>
      <CardBody>
        <CardTitle as="h4" className="my-0">
          Colors
        </CardTitle>
        <CardText className="sub-header">
          These are primary theme colors.They are used for all the elements including buttons, alerts, background, etc.
        </CardText>
        <Row>
          {(variants || []).map((color, idx) => {
          return <Col md={4} xl={2} className="text-center" key={idx.toString()}>
                <div className={clsx('rounded', 'p-5', 'bg-' + color)}></div>
                <h6>{toSentenceCase(color)}</h6>
              </Col>;
        })}
        </Row>
      </CardBody>
    </Card>;
};
export default Colors;