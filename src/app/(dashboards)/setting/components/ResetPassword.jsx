import { Button, Col, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PasswordFormInput from '@/components/form/PasswordFormInput';
const ResetPassword = () => {
  const schemaResolver = yupResolver(yup.object().shape({
    current_password: yup.string().required('Please enter Current Password'),
    new_password: yup.string().required('Please enter New Password').min(6, 'Your password must be longer than 6 characters.'),
    confirm_password: yup.string().oneOf([yup.ref('new_password')], 'Passwords must match').required('Please enter Confirm Password')
  }));
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: schemaResolver
  });
  return <>
      <h4 className="mt-3 mt-lg-0">Password</h4>
      <form onSubmit={handleSubmit(() => {})} className="password-form mt-4">
        <PasswordFormInput label={'Current Password'} name="current_password" control={control} containerClassName={'mb-3'} />
        <PasswordFormInput label={'New Password'} name="new_password" control={control} containerClassName={'mb-3'} />
        <PasswordFormInput label={'Confirm Password'} name="confirm_password" control={control} containerClassName={'mb-3'} />

        <hr className="my-4" />

        <Row className="mt-3">
          <Col lg={12}>
            <Button type="submit">Update Password</Button>
          </Col>
        </Row>
      </form>
    </>;
};
export default ResetPassword;