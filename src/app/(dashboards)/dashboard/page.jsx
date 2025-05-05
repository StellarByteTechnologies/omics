import { Col, Container, Row } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';
import StatWidget from './components/StatWidget';
import RevenueWidget from './components/RevenueWidget';
import RecentProjects from './components/RecentProjects';
import { projects, tasks } from './data';
import Tasks from './components/Tasks';
export const metadata = {
  title: 'Dashboard'
};
const Dashboard = () => {
  return <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-title">
              <h3 className="mb-0">Hi Greeva</h3>
              <p className="mt-1 fw-medium">Welcome to Prompt!</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={5}>
            <ProfileCard />
          </Col>
          <Col lg={3}>
            <StatWidget icon="lucide:check-circle" variant="success" stats={21} title="Tasks Completed" />
            <StatWidget icon="lucide:edit-3" variant="info" stats={21} title="Tasks Inprogress" />
          </Col>
          <RevenueWidget />
        </Row>
        <Row>
          <Col lg={12}>
            <RecentProjects projects={projects} />
          </Col>
        </Row>
        <Tasks tasks={tasks} />
      </Container>
    </section>;
};
export default Dashboard;