'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useToggle from '@/hooks/useToggle';
import { Button, Card, CardBody, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
const OffcanvasPlacement = ({
  name,
  placement
}) => {
  const {
    isTrue: show,
    toggle
  } = useToggle();
  return <>
      <Button className="btn-soft-primary me-2" onClick={toggle}>
        {name} offcanvas
      </Button>
      <Offcanvas show={show} onHide={toggle} placement={placement}>
        <OffcanvasHeader closeButton>
          <h5 id="offcanvasTopLabel">Offcanvas {placement}</h5>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
          <Dropdown className="mt-3">
            <DropdownToggle variant="secondary" id="dropdown-basic" className="cursor-pointer">
              Dropdown button <IconifyIcon icon="lucide:chevron-down"></IconifyIcon>
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem href="">Action</DropdownItem>
              <DropdownItem href="">Another action</DropdownItem>
              <DropdownItem href="">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </OffcanvasBody>
      </Offcanvas>
    </>;
};
const OffcanvasExample = () => {
  const placementOptions = [{
    name: 'Top',
    placement: 'top'
  }, {
    name: 'Bottom',
    placement: 'bottom'
  }, {
    name: 'Left',
    placement: 'start'
  }, {
    name: 'Right',
    placement: 'end'
  }];
  return <Card id="offcanvas">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Offcanvas
        </CardTitle>
        <p className="sub-header">
          Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the
          <code>.show</code> class on an element with the <code>.offcanvas</code> class.
        </p>

        <div className="button-list">
          {placementOptions.map((option, idx) => <OffcanvasPlacement key={idx} placement={option.placement} name={option.name} />)}
        </div>
      </CardBody>
    </Card>;
};
export default OffcanvasExample;