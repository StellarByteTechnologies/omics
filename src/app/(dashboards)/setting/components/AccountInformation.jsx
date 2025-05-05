import { Button, Col, FormCheck, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components

// images
import avatar from '@/assets/images/avatars/img-8.jpg';
import Image from 'next/image';
import Link from 'next/link';
import TextFormInput from '@/components/form/TextFormInput';
const AccountInformation = () => {
  /*
  form default values
  */
  const defaultValues = {
    name: 'Greeva Navadiya',
    email: 'greeva@coderthemes.com',
    display_name: 'Greeva N',
    phone: '+1 254 024 5400'
  };

  /*
  form validation schema
  */
  const schemaResolver = yup.object({
    name: yup.string().required('Please enter Name'),
    display_name: yup.string().required('Please enter Display Name'),
    phone: yup.string().matches(/^(\+1 )\(?([0-9 ]{3})\)?[-. ]?([0-9 ]{3})[-. ]?([0-9]{4})$/, {
      message: 'Invalid number',
      excludeEmptyString: false
    }).required('Please enter Phone'),
    email: yup.string().required('Please enter Email').email('Please enter valid Email')
  });

  /*
   * form methods
   */
  const {
    handleSubmit,
    control
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaResolver)
  });

  /*
  handle form submission
  */

  return <>
      <h4 className="mt-3 mt-lg-0">Account Information</h4>

      <form onSubmit={handleSubmit(() => {})} className="account-form">
        <h6 className="mt-4">Your Avatar</h6>
        <Row className="align-items-center">
          <Col xs="auto">
            <Image src={avatar} className="img-fluid avatar-md rounded-circle shadow" alt="..." />
          </Col>
          <Col>
            <Link href="" className="btn btn-outline-primary btn-sm">
              Upload
            </Link>
            <Link href="" className="btn btn-outline-danger btn-sm ms-2">
              Remove
            </Link>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col lg={6}>
            <TextFormInput type="text" label="Name" placeholder="Your Name" name="name" containerClassName="mb-3" control={control} />
            <TextFormInput type="email" label="Email" placeholder="Email" name="email" containerClassName="mb-3" control={control} />
          </Col>
          <Col lg={6}>
            <TextFormInput type="text" label="Display name" placeholder="Display name" name="display_name" containerClassName="mb-3" control={control} />
            <TextFormInput type="text" label="Phone" placeholder="Phone number" name="phone" containerClassName="mb-3" control={control} />
          </Col>
        </Row>

        <hr className="my-2" />

        <Row className="my-3">
          <Col lg={12}>
            <div className="mb-3">
              <label className="form-label">Profile Visibility</label>

              <div className="mt-1">
                <FormCheck type="radio" name="visibility" label="Public" id="visibility1" inline defaultChecked />
                <FormCheck type="radio" name="visibility" label="Private" id="visibility2" className="ms-3" inline />
              </div>

              <small className="form-text text-muted mt-2">Making your profile public means anyone can see your information</small>
            </div>
          </Col>
          <Col lg={12} className="mt-2">
            <div className="mb-3">
              <label className="form-label">Contact Info Visibility</label>

              <div className="mt-1">
                <FormCheck type="radio" name="visibility4" label="Public" id="visibility5" inline defaultChecked />
                <FormCheck type="radio" name="visibility4" label="Private" id="visibility6" className="ms-3" inline />
              </div>

              <small className="form-text text-muted mt-2">Making your contact info public means anyone can see your email and phone number</small>
            </div>
          </Col>
        </Row>

        <hr className="mb-2" />

        <Row>
          <Col lg={12}>
            <Row className="align-items-center my-2">
              <Col>
                <label className="form-label mb-0">Remove account</label>
                <small className="form-text text-muted">By removing your account you will lose all your data</small>
              </Col>

              <Col lg="auto" className="text-end">
                <Button variant="outline-danger" size="sm">
                  Remove Account
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="mt-2">
          <Col xs={12}>
            <Button type="submit">Save Changes</Button>
          </Col>
        </Row>
      </form>
    </>;
};
export default AccountInformation;