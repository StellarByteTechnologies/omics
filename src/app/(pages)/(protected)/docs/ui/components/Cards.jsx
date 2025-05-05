import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'react-bootstrap';

// images
import CardImg1 from '@/assets/images/photos/1.jpg';
import Link from 'next/link';
const Cards = () => {
  return <Card id="cards">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Cards
        </CardTitle>
        <p className="sub-header">
          Bootstrap&apos;s cards provide a flexible and extensible content container with multiple variants and options. Check out{' '}
          <Link rel="noreferrer" href={{
          pathname: 'https://react-bootstrap.netlify.app/components/cards/'
        }} target="_blank">
            Bootstrap&apos;s Doc
          </Link>
          for more examples.
        </p>

        <Row>
          <Col lg={5} xl={3}>
            <Card className="border">
              <CardImg variant="top" src={CardImg1.src} alt="Card Img" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                <Button variant="primary">Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg={7} xl={9}>
            <div className="code-block">
              <h6>Example</h6>
              <button className="btn btn-sm btn-copy-clipboard" data-clipboard-target="#card-ex-1">
                Copy
              </button>
              <pre className="prettyprint lang-html escape" id="card-ex-1">
                <div className="card">
                  {'\n'}
                  {'    '}
                  <img className="card-img-top img-fluid" src="assets/images/photos/1.jpg" alt="Card image cap" />
                  {'\n'}
                  {'    '}
                  <div className="card-body">
                    {'\n'}
                    {'        '}
                    <h5 className="card-title">Card title</h5>
                    {'\n'}
                    {'        '}
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                    </p>
                    {'\n'}
                    {'        '}
                    <a href="" className="btn btn-primary">
                      Button
                    </a>
                    {'\n'}
                    {'    '}
                  </div>
                  {'\n'}
                </div>
                {'\n'}
                {'                                                '}
              </pre>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Card className="border">
              <Row className="g-0 align-items-center">
                <Col md={5}>
                  <CardImg src={CardImg1.src} alt="Card Img" />
                </Col>
                <Col md={7}>
                  <CardBody>
                    <CardTitle className="mb-0">Card Title</CardTitle>
                    <CardText className="text-muted">This is a wider card with supporting text lead-in to additional content.</CardText>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </CardBody>
                </Col>
              </Row>
            </Card>
            <Card className="border mb-0">
              <Row className="g-0 align-items-center">
                <Col md={7}>
                  <CardBody>
                    <CardTitle className="mb-0">Card Title</CardTitle>
                    <CardText className="text-muted">This is a wider card with supporting text lead-in to additional content.</CardText>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </CardBody>
                </Col>
                <Col md={5}>
                  <CardImg src={CardImg1.src} alt="Card Img" />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6}></Col>
        </Row>
      </CardBody>
    </Card>;
};
export default Cards;