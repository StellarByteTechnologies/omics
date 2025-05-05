'use client';

import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import AccountInformation from './AccountInformation';
import ResetPassword from './ResetPassword';
import Notifications from './Notifications';
const AllSettings = () => {
  return <Card>
      <CardBody>
        <Row>
          <TabContainer defaultActiveKey={'account'}>
            <Col lg={3}>
              <Nav className="navtab-bg nav-pills flex-column">
                <NavItem>
                  <NavLink eventKey="account">
                    <span>Account</span>
                  </NavLink>
                </NavItem>
                <NavItem className="my-2">
                  <NavLink eventKey="password">
                    <span>Password</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="notifications-form">
                    <span>Notifications</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg={9}>
              <TabContent className="p-0">
                <TabPane eventKey="account" className="fade px-3">
                  <AccountInformation />
                </TabPane>
                <TabPane eventKey="password" className="fade px-3" style={{
                minHeight: 600
              }}>
                  <ResetPassword />
                </TabPane>
                <TabPane eventKey="notifications-form" className="fade px-3" style={{
                minHeight: 600
              }}>
                  <Notifications />
                </TabPane>
              </TabContent>
            </Col>
          </TabContainer>
        </Row>
      </CardBody>
    </Card>;
};
export default AllSettings;