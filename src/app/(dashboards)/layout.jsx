import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Footer4 from '@/components/common/Footer4';
const AuthProtectionWrapper = dynamic(() => import('@/components/wrappers/AuthProtectionWrapper'), {
  ssr: false
});
const Navbar = dynamic(() => import('@/components/layout/Navbar2'));
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));
const Layout = ({
  children
}) => {
  return <AuthProtectionWrapper>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div />}>{children}</Suspense>

      <Suspense fallback={<div />}>
        <Footer4 />
      </Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
    </AuthProtectionWrapper>;
};
export default Layout;