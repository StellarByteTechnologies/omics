import { Card, CardBody, CardText, CardTitle, Col, Row } from 'react-bootstrap';

// types
import clsx from 'clsx';
const TextColors = ({
  variants
}) => {
  return <Card>
      <CardBody>
        <CardTitle as="h4" className="my-0">
          Text Colors
        </CardTitle>
        <CardText className="sub-header">
          Even your text can have the contexual color. E.g.{' '}
          <code>
            .text-{'{'}primary | secondary | success | danger | info | warning{'}'}
          </code>
        </CardText>
        <Row>
          {(variants || []).map((color, idx) => {
          return <Col md={4} xl={2} className="text-center" key={idx}>
                <div className="bg-white rounded p-2"></div>
                <h5 className={clsx('text-' + color)}>.text-{color}</h5>
              </Col>;
        })}
        </Row>
      </CardBody>
    </Card>;
};
export default TextColors;