'use client';

import { Button, Card, CardBody, CardTitle, OverlayTrigger, Tooltip } from 'react-bootstrap';
const Tooltips = () => {
  const directions = [{
    placement: 'top'
  }, {
    placement: 'bottom'
  }, {
    placement: 'right'
  }, {
    placement: 'left'
  }];
  return <Card id="tooltips">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Tooltips
        </CardTitle>
        <p className="sub-header">
          Examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.
        </p>

        <div className="button-list">
          {(directions || []).map(item => <OverlayTrigger key={item.placement} placement={item.placement} overlay={<Tooltip id={`tooltip-${item.placement}`}>
                  Tooltip on <strong>{item.placement}</strong>.
                </Tooltip>}>
              <Button className="btn-soft-primary me-2">Tooltip on {item.placement}</Button>
            </OverlayTrigger>)}
        </div>
      </CardBody>
    </Card>;
};
export default Tooltips;