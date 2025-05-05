import { colorVariants } from '@/assets/data/constants';
import clsx from 'clsx';
import { Alert, Card, CardBody, Col, Row } from 'react-bootstrap';
const OutlineAlerts = () => {
  return <>
      {(colorVariants || []).map((color, idx) => {
      return <Alert variant={color} key={idx} dismissible className={clsx('bg-white', 'border', 'show', 'text-' + color)}>
            <span className={clsx('badge', 'badge-soft-' + color, 'align-items-center', 'me-3')}>{color}</span>A simple {color} alert—check it out!
          </Alert>;
    })}
    </>;
};
const DefaultAlerts = () => {
  return <>
      {colorVariants.slice(0, 3).map((color, idx) => {
      return <Alert variant={color} key={idx}>
            A simple {color} alert—check it out!
          </Alert>;
    })}

      {(colorVariants.slice(3, 6) || []).map((color, idx) => {
      return <Alert variant={color} key={idx} dismissible className={clsx('show', {
        'mb-0': idx === colorVariants.length - 1
      })}>
            A simple {color} alert—check it out!
          </Alert>;
    })}
    </>;
};
const Alerts = () => {
  return <Row id="alerts">
      <Col>
        <Card>
          <CardBody>
            <h5 className="card-title mb-0">Alerts</h5>
            <p className="sub-header">
              Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
            </p>
            <OutlineAlerts />
            {/* <div className="mt-3" /> */}
            <DefaultAlerts />
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default Alerts;