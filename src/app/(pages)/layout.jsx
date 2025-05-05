import AuthProtectionWrapper from '@/components/wrappers/AuthProtectionWrapper';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));
const HorizontalLayout = ({
  children
}) => {
  return <AuthProtectionWrapper>
      <Suspense fallback={<div />}>{children}</Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
    </AuthProtectionWrapper>;
};
export default HorizontalLayout;