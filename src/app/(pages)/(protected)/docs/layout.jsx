import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
const Navbar = dynamic(() => import('@/components/layout/Navbar'));
const layout = ({
  children
}) => {
  return <>
      <Suspense fallback={<div />}>
        <Navbar buttonVariant="outline-primary" centered />
      </Suspense>
      <section className="py-4 bg-light">
        <Container>
          <Suspense fallback={<div />}>{children}</Suspense>
        </Container>
      </section>
    </>;
};
export default layout;