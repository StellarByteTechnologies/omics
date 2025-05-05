'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';
const AuthProtectionWrapper = ({
  children
}) => {
  const {
    status
  } = useSession();
  const {
    push
  } = useRouter();
  const pathname = usePathname();
  if (status == 'unauthenticated') {
    push(`/auth/login?redirectTo=${pathname}`);
    return <div />;
  }
  return <Suspense>{children}</Suspense>;
};
export default AuthProtectionWrapper;