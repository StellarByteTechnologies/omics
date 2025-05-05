'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardTitle, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap';
const BasicFormInput = () => {
  return <Form>
      <Row>
        <Col sm={6}>
          <FormGroup className="mb-3" controlId="formBasicText">
            <FormLabel>Text Input</FormLabel>
            <FormControl type="text" placeholder="A text input" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicPassword">
            <FormLabel>Password Input</FormLabel>
            <FormControl type="password" defaultValue="123456" />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup className="mb-3" controlId="formBasicTextArea">
            <FormLabel>Example textarea</FormLabel>
            <FormControl as="textarea" rows={5} defaultValue="text are content goes here..." />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup className="mb-3" controlId="formBasicSelect">
            <FormLabel>Default Select</FormLabel>
            <FormSelect aria-label="Default select example">
              <option>Default Option</option>
              <option value="1">Option Select Name</option>
              <option value="2">Option Select Name</option>
            </FormSelect>
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicFileUpload">
            <FormLabel>File Upload</FormLabel>
            <FormControl type="file" />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup className="mb-3" controlId="formBasicDefaultSelect">
            <FormLabel>Default Select Multiple</FormLabel>
            <select className="form-select" multiple>
              <option value="option_select0">Default Option</option>
              <option value="option_select1">Option select name</option>
              <option value="option_select2">Option select name</option>
              <option value="option_select2">Option select name</option>
              <option value="option_select2">Option select name</option>
            </select>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup className="mb-3" controlId="formBasicInputIcon">
            <FormLabel>Input with icon</FormLabel>
            <div className="form-control-with-hint">
              <input type="text" className="form-control" placeholder="Input placeholder" />
              <span className="form-control-feedback">
                <IconifyIcon icon="lucide:search" className="icon-xs" />
              </span>
            </div>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup className="mb-3" controlId="formBasicDefaultSelect">
            <FormLabel>Input with hint text</FormLabel>
            <div className="form-control-with-hint">
              <input type="text" className="form-control" placeholder="Input placeholder" />
              <span className="form-control-feedback">USD</span>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Form>;
};
const FormInputSize = () => {
  return <Form>
      <Row>
        <Col md={4}>
          <FormControl size="lg" type="text" placeholder=".form-control-lg" />
        </Col>
        <Col md={4}>
          <FormControl type="text" placeholder="Default input" />
        </Col>
        <Col md={4}>
          <FormControl size="sm" type="text" placeholder=".form-control-sm" />
        </Col>
      </Row>
    </Form>;
};
const Checkbox = () => {
  return <Form>
      <FormCheck type="checkbox" id="checkbox1" label="Check this custom checkbox" />
      <FormCheck type="checkbox" id="checkbox2" label="Check this custom checkbox 2" />
    </Form>;
};
const Radio = () => {
  return <Form>
      <FormCheck type="radio" id="radio1" label="Check this custom radio" name="radio" />
      <FormCheck type="radio" id="radio2" label="Check this custom radio 2" name="radio" />
    </Form>;
};
const Range = () => {
  return <Form>
      <Form.Range />
    </Form>;
};
const FormElements = () => {
  return <Card id="forms">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Form Elements
        </CardTitle>
        <p className="sub-header">
          Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
        </p>

        <BasicFormInput />

        <p className="sub-header mt-4">
          Use <code>size</code> on <code>&lt;FormControl&gt;</code> to change the size of the input.
        </p>

        <FormInputSize />

        <p className="sub-header mt-4">
          By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with
          FormCheck.
        </p>

        <Row>
          <Col sm={6}>
            <Checkbox />
          </Col>
          <Col sm={6}>
            <Radio />
          </Col>
        </Row>

        <p className="sub-header mt-4">Use our custom range inputs for consistent cross-browser styling and built-in customization.</p>
        <Row className="mt-3 align-items-center">
          <Col md={6} className="mb-2 mb-md-0">
            <FormSelect id="form-select">
              <option>Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </FormSelect>
          </Col>
          <Col md={6}>
            <Range />
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default FormElements;