import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button, ButtonGroup, Card, CardBody, CardTitle, Dropdown, DropdownButton, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
const DefaultDropdown = () => {
  return <Dropdown className="me-2">
      <DropdownToggle id="dropdown-basic">
        Dropdown Button
        <IconifyIcon icon="lucide:chevron-down" className="icon-xs ms-2" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem eventKey="1">Action</DropdownItem>
        <DropdownItem eventKey="2">Another action</DropdownItem>
        <DropdownItem eventKey="3">Something else here</DropdownItem>
        <hr className="my-2" />
        <DropdownItem eventKey="4">Separated link</DropdownItem>
      </DropdownMenu>
    </Dropdown>;
};
const SpiltDropdown = () => {
  return <Dropdown as={ButtonGroup}>
      <Button variant="secondary">Split Button</Button>
      <DropdownToggle split variant="secondary" id="dropdown-split-basic">
        <IconifyIcon icon="lucide:chevron-down" className="icon-xs" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem eventKey="1">Action</DropdownItem>
        <DropdownItem eventKey="2">Another action</DropdownItem>
        <DropdownItem eventKey="3">Something else here</DropdownItem>
        <hr className="my-2" />
        <DropdownItem eventKey="4">Separated link</DropdownItem>
      </DropdownMenu>
    </Dropdown>;
};
const DropdownDirection = () => {
  return <>
      <p className="sub-header mt-4">Trigger dropdown menus above, below, left, or to the right of their toggle elements, with the drop prop.</p>
      <div className="d-flex">
        <DropdownButton variant="success" align="end" title={<>
              Dropdown end
              <IconifyIcon icon="lucide:chevron-down" className="icon-xs ms-2" />
            </>} id="dropdown-menu-align-end" className="me-2">
          <DropdownItem eventKey="1">Action</DropdownItem>
          <DropdownItem eventKey="2">Another action</DropdownItem>
          <DropdownItem eventKey="3">Something else here</DropdownItem>
          <hr className="my-2" />
          <DropdownItem eventKey="4">Separated link</DropdownItem>
        </DropdownButton>

        <DropdownButton variant="info" drop="end" title={<>
              Drop End
              <IconifyIcon icon="lucide:chevron-right" className="icon-xs ms-2" />
            </>} id="dropdown-menu-end" className="me-2">
          <DropdownItem eventKey="1">Action</DropdownItem>
          <DropdownItem eventKey="2">Another action</DropdownItem>
          <DropdownItem eventKey="3">Something else here</DropdownItem>
          <hr className="my-2" />
          <DropdownItem eventKey="4">Separated link</DropdownItem>
        </DropdownButton>

        <DropdownButton variant="danger" drop="start" title={<>
              <IconifyIcon icon="lucide:chevron-left" className="icon-xs me-2" />
              Drop Start
            </>} id="dropdown-menu-start" className="me-2">
          <DropdownItem eventKey="1">Action</DropdownItem>
          <DropdownItem eventKey="2">Another action</DropdownItem>
          <DropdownItem eventKey="3">Something else here</DropdownItem>
          <hr className="my-2" />
          <DropdownItem eventKey="4">Separated link</DropdownItem>
        </DropdownButton>

        <DropdownButton title={<>
              On Hover
              <IconifyIcon icon="lucide:chevron-down" className="icon-xs ms-2" />
            </>} id="dropdown-menu-on-hover" renderMenuOnMount>
          <DropdownItem eventKey="1">Action</DropdownItem>
          <DropdownItem eventKey="2">Another action</DropdownItem>
          <DropdownItem eventKey="3">Something else here</DropdownItem>
          <hr className="my-2" />
          <DropdownItem eventKey="4">Separated link</DropdownItem>
        </DropdownButton>
      </div>
    </>;
};
const CustomDropdown = () => {
  return <div>
      <p className="sub-header mt-4">You can put a form or simple text within a dropdown menu or set the different position</p>
      <Dropdown as={ButtonGroup} className="me-2">
        <DropdownToggle className="cursor-pointer">
          Simple text
          <IconifyIcon icon="lucide:chevron-down" className="icon-xs ms-2" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg p-3">
          <div className="text-muted">
            <p>Some example text that&apos;s free-flowing within the dropdown menu.</p>
            <p className="mb-0">And this is more example text.</p>
          </div>
        </DropdownMenu>
      </Dropdown>

      <Dropdown as={ButtonGroup}>
        <DropdownToggle variant="secondary" className="cursor-pointer">
          Dropdown menu Forms
          <IconifyIcon icon="lucide:chevron-down" className="icon-xs ms-2" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg p-3">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </DropdownMenu>
      </Dropdown>
    </div>;
};
const Dropdowns = () => {
  return <Card id="dropdowns">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Dropdowns
        </CardTitle>

        <p className="sub-header">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>

        <div className="d-sm-inline-flex mb-2 mb-sm-0">
          <DefaultDropdown />
          <SpiltDropdown />
        </div>

        <DropdownDirection />
        <CustomDropdown />
      </CardBody>
    </Card>;
};
export default Dropdowns;