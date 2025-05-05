'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import TextFormInput from '@/components/form/TextFormInput';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import { Button } from 'react-bootstrap';
const RegisterForm = () => {
  const registerSchema = yup.object().shape({
    fullname: yup.string().required('Please enter Fullname'),
    email: yup.string().required('Please enter Email').email('Please enter valid Email'),
    password: yup.string().required('Please enter Password')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullname: 'Prompt Next',
      email: 'user@demo.com',
      password: '123456'
    }
  });
  return <form onSubmit={handleSubmit(() => {})} className="authentication-form">
      <TextFormInput name="fullname" label="Your Name *" control={control} placeholder="Your Name" containerClassName="mb-3" />
      <TextFormInput name="email" type="email" label="Email *" control={control} placeholder="Email" containerClassName="mb-3" />
      <PasswordFormInput name="password" label="Password *" control={control} placeholder="Enter your password" containerClassName="mb-3" />
      <div className="mb-0 text-center d-grid">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </div>
    </form>;
};
export default RegisterForm;