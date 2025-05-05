import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import { Button, ButtonGroup, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import desktop from '@/assets/images/hero/desktop.jpg';
import Link from 'next/link';
const Hero = () => {
  return <section className="position-relative overflow-hidden hero-7 pt-6 pb-4">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col lg={6}>
            <div>
              <h1 className="hero-title">
                Speed up your <span className="highlight highlight-warning d-inline-block">performance</span>
              </h1>
              <p className="fs-16 mt-3 text-muted">
                Prompt makes it easier to build better website and application more quickly and with less effort
              </p>
              <div className="py-5">
                <Dropdown as={ButtonGroup}>
                  <Button>
                    <IconifyIcon style={{
                    height: 20,
                    width: 20
                  }} icon="lucide:download" className="icon-xs me-2" />
                    Download for Ubuntu 19.04
                  </Button>
                  <DropdownToggle split id="dropdown-split-basic">
                    <IconifyIcon icon="lucide:chevron-down" className="icon-xs" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem eventKey={1}>Windows 7/8/10</DropdownItem>
                    <hr />
                    <DropdownItem eventKey={2}>Mac OS</DropdownItem>
                    <hr />
                    <DropdownItem eventKey={3}>Ubuntu 18.04</DropdownItem>
                    <DropdownItem eventKey={4}>Ubuntu 16.04</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <div className="rounded d-inline-block mt-3 py-1 px-3 alert bg-soft-warning">
                  <div className="d-flex align-items-center">
                    <div className="text-dark">
                      Looking for other platforms?{' '}
                      <Link href="" className="text-dark fw-medium">
                        Click Here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1 hero-right">
            <div className="img-container" data-aos="fade-left" data-aos-duration={600}>
              <Image src={desktop} width={657} height={443} alt="desktop" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Hero;