import { Col, Container, Nav, NavItem, NavLink, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const ProjectCard = ({
  project
}) => {
  const {
    description,
    image,
    title
  } = project;
  return <div className="bg-light ps-5 pt-5 mb-4 mb-sm-5 rounded feature-item">
      <Row className="align-items-center">
        <Col xs="auto">
          <h3 className="text-dark mt-0">{title}</h3>
        </Col>
        <Col className="text-end pe-5">{description}</Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Image src={image} alt="image" className="img-fluid shadow rounded" />
        </Col>
      </Row>
      <div className="overlay">
        <Link href="" className="btn btn-danger btn-sm btn-view shadow-lg">
          View Project <IconifyIcon className="icon-xs ms-2" icon="lucide:arrow-right" />
        </Link>
      </div>
    </div>;
};
const Projects = ({
  projects
}) => {
  return <section className="py-lg-5 pb-5 pt-2 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-start">
            <h1 className="display-5 fw-medium">Latest Projects</h1>
          </Col>
          <Col xs="auto">
            <Nav defaultActiveKey={'1'} className="nav-pills pe-0 me-0 aling-items-center" id="pills-tab" role="tablist">
              <NavItem role="presentation">
                <NavLink eventKey={'1'} className="rounded-pill" id="pills-design-tab" data-bs-toggle="pill" href="#pills-design" role="tab" aria-selected="true">
                  UI/UX Design
                </NavLink>
              </NavItem>
              <NavItem role="presentation">
                <NavLink eventKey={'2'} className="rounded-pill" id="pills-branding-tab" data-bs-toggle="pill" href="#pills-design" role="tab" aria-selected="false">
                  Branding
                </NavLink>
              </NavItem>
              <NavItem role="presentation">
                <NavLink eventKey={'3'} className="rounded-pill" id="pills-marketing-tab" data-bs-toggle="pill" href="#pills-design" role="tab" aria-selected="false">
                  Marketing
                </NavLink>
              </NavItem>
              <NavItem role="presentation">
                <NavLink eventKey={'4'} className="rounded-pill" id="pills-web-tab" data-bs-toggle="pill" href="#pills-design" role="tab" aria-selected="false">
                  Web Development
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={12}>
            <div className="tab-content mt-2" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                <Row className="features-6" data-aos="fade-up" data-aos-duration={600}>
                  {projects.map((project, idx) => <Col lg={6} key={idx}>
                      <ProjectCard project={project} />
                    </Col>)}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Projects;