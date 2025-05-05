import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
const SpaceCard = ({
  spaceOptions,
  idx
}) => {
  const {
    description,
    image,
    space,
    title
  } = spaceOptions;
  return <Card className="shadow-lg rounded" data-aos="fade-up" data-aos-duration={(idx + (3 + idx)) * 200}>
      <Image src={image} height={200} width={356} alt="image" className="card-img-top" />
      <CardBody>
        <div className="">
          <h4 className="mt-0">
            <Link href="" className="text-orange">
              {title}
            </Link>
          </h4>
          <p className="text-muted mb-2">{description}</p>
        </div>

        <div className="pt-3">
          <Row className="align-items-center">
            <Col xs="auto">
              <p className="mb-0">
                <IconifyIcon style={{
                height: 20,
                width: 20
              }} icon={space.icon} className="icon icon-dual icon-xs me-1" />
                <Link href="#" className="fs-13 align-middle text-muted">
                  {space.value}
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>;
};
const SpaceOptions = ({
  spaceOptions
}) => {
  return <section className="py-5 position-relative">
      <Container>
        <Row data-aos="fade-up">
          <Col className="text-center">
            <Badge pill bg="" className="badge-soft-orange px-2 py-1">
              Flexible
            </Badge>
            <h1 className="display-5 fw-medium">Coworking Space Options</h1>
          </Col>
        </Row>

        <Row className="mt-5">
          {(spaceOptions || []).map((option, idx) => {
          return <Col lg={6} xl={4} key={idx}>
                <SpaceCard spaceOptions={option} idx={idx} />
              </Col>;
        })}
        </Row>
      </Container>
    </section>;
};
export default SpaceOptions;