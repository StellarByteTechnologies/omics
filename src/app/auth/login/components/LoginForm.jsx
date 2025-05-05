'use client';

import TextFormInput from '@/components/form/TextFormInput';
import useSignIn from './useSignIn';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import Link from 'next/link';
import { Button, FormCheck } from 'react-bootstrap';
const LoginForm = () => {
  const {
    control,
    loading,
    login
  } = useSignIn();
  return <form className="authentication-form" onSubmit={login}>
      <TextFormInput name="email" label="Email *" containerClassName="mb-3" control={control} />
      <PasswordFormInput name="password" label={<>
            <label className="form-label" htmlFor="password">
              Password <small>*</small>
            </label>
            <Link href="/auth/forget-pass" className="float-end text-muted text-unline-dashed ms-1 fs-13">
              Forgot your password?
            </Link>
          </>} placeholder="Enter your password" containerClassName="mb-3" control={control} />
      <div className="mb-3">
        <FormCheck type="checkbox" id="remember" label="Remember me" />
      </div>
      <div className="mb-0 text-center d-grid">
        <Button variant="primary" type="submit" disabled={loading}>
          Log In
        </Button>
      </div>
    </form>;
};
export default LoginForm;