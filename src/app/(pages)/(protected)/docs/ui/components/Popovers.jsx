'use client';

import { Button, Card, CardBody, CardTitle, OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap';
const Popovers = () => {
  const directions = [{
    placement: 'top'
  }, {
    placement: 'bottom'
  }, {
    placement: 'right'
  }, {
    placement: 'left'
  }];
  return <Card id="popovers">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Popovers
        </CardTitle>
        <p className="sub-header">Add small overlays of content, like those on the iPad, to any element for housing secondary information.</p>

        <div className="button-list">
          {(directions || []).map(item => <OverlayTrigger trigger="click" key={item.placement} placement={item.placement} overlay={<Popover id={`popover-positioned-${item.placement}`}>
                  <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                </Popover>}>
              <Button className="btn-soft-primary me-2 mb-2 mb-xxl-0">Popover on {item.placement}</Button>
            </OverlayTrigger>)}

          <OverlayTrigger trigger="focus" placement="right" overlay={<Popover id={`popover-dismissible`}>
                <Popover.Body>And here&apos;s some amazing content. It&apos;s very engaging. Right?</Popover.Body>
              </Popover>}>
            <Button className="me-2 mb-2 mb-xxl-0">Dismissible popover</Button>
          </OverlayTrigger>
        </div>
      </CardBody>
    </Card>;
};
export default Popovers;