import Hero from './components/Hero';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Testimonial from '@/components/common/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navbar from '@/components/layout/Navbar';
export const metadata = {
  title: 'App Landing'
};
const App = () => {
  return <>
      <Navbar buttonVariant="orange" />
      <Hero />
      <Features1 />
      <Features2 />
      <Testimonial />
      <CTA />
      <Footer />
    </>;
};
export default App;