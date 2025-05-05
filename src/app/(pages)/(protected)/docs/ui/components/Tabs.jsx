'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardTitle, Nav, NavItem, NavLink, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';
const text1 = `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`;
const text2 = `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.`;
const tabContents = [{
  id: 1,
  title: 'Home',
  icon: 'lucide:home',
  text: text1,
  text2: text2
}, {
  id: 2,
  title: 'Profile',
  icon: 'lucide:user',
  text: text2,
  text2: text1
}, {
  id: 3,
  title: 'Messages',
  icon: 'lucide:mail',
  text: text1,
  text2: text2
}];
const NavTabs = () => {
  return <TabContainer defaultActiveKey="Profile">
      <Nav as="ul" variant="tabs">
        {(tabContents || []).map((tab, idx) => {
        return <NavItem as="li" key={idx}>
              <NavLink className="cursor-pointer" eventKey={tab.title}>
                <span className="d-block d-sm-none">
                  <IconifyIcon icon={tab.icon} />
                </span>
                <span className="d-none d-sm-block">{tab.title}</span>
              </NavLink>
            </NavItem>;
      })}
      </Nav>
      <TabContent className="p-3 text-muted">
        {(tabContents || []).map((tab, idx) => {
        return <TabPane eventKey={tab.title} id={String(tab.id)} key={idx}>
              <p>{tab.text}</p>
              <p className="mb-0">{tab.text2}</p>
            </TabPane>;
      })}
      </TabContent>
    </TabContainer>;
};
const NavPills = () => {
  return <Tab.Container defaultActiveKey="Profile">
      <Nav as="ul" justify variant="pills" className="p-1 navtab-bg">
        {(tabContents || []).map((tab, index) => {
        return <NavItem as="li" key={index.toString()}>
              <NavLink className="cursor-pointer" eventKey={tab.title}>
                <span className="d-block d-sm-none">
                  <IconifyIcon icon={tab.icon} />
                </span>
                <span className="d-none d-sm-block">{tab.title}</span>
              </NavLink>
            </NavItem>;
      })}
      </Nav>
      <Tab.Content className="text-muted">
        {(tabContents || []).map((tab, idx) => {
        return <TabPane eventKey={tab.title} id={String(tab.id)} key={idx}>
              <p>{tab.text}</p>
              <p className="mb-0">{tab.text2}</p>
            </TabPane>;
      })}
      </Tab.Content>
    </Tab.Container>;
};
const TabsExample = () => {
  return <Card id="tabs">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Tabs
        </CardTitle>
        <p className="sub-header">
          <code>Tabs</code> is a higher-level component for quickly creating a <code>Nav</code> matched with a set of <code>TabPanes</code>.
        </p>

        <NavTabs />
        <NavPills />
      </CardBody>
    </Card>;
};
export default TabsExample;