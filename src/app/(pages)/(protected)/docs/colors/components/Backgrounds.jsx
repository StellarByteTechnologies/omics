import clsx from 'clsx';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'react-bootstrap';
const Backgrounds = ({
  variants
}) => {
  return <Card>
      <CardBody>
        <CardTitle as="h4" className="my-0">
          Background
        </CardTitle>
        <CardText className="sub-header">
          Use the contexual class to have background with different shades. E.g.{' '}
          <code>
            .bg-{'{'}primary | secondary | success | danger | info | warning{'}'}
          </code>
        </CardText>
        <Row>
          {(variants || []).map((color, index) => {
          return <Col md={4} xl={2} className="text-center" key={index.toString()}>
                <div className={clsx('rounded', 'p-3', 'mb-3', 'mb-xl-0', 'bg-' + color)}>
                  <h5 className="text-white">.bg-{color}</h5>
                </div>
              </Col>;
        })}
        </Row>
        <CardText className="sub-header mt-4">
          Each color has a translucent shade too. It adds a little transparency. E.g.{' '}
          <code>
            .bg-soft-{'{'}primary | secondary | success | danger | info | warning{'}'}
          </code>
        </CardText>
        <Row>
          {(variants || []).map((color, idx) => {
          return <Col md={4} xl={2} className="text-center" key={idx}>
                <div className={clsx('rounded', 'p-3', 'mb-3', 'mb-xl-0', 'bg-soft-' + color)}>
                  <h5 className={clsx('text-' + color, 'my-0')}>.bg-soft-{color}</h5>
                </div>
              </Col>;
        })}
        </Row>
      </CardBody>
    </Card>;
};
export default Backgrounds;