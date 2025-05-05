import { Card, CardBody, CardText, CardTitle, Col, Row } from 'react-bootstrap';
const RegularHeading = () => {
  return <Card>
      <CardBody>
        <CardTitle as="h4">Regular Headings</CardTitle>
        <CardText>
          All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.
        </CardText>
        <Row>
          <Col>
            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default RegularHeading;