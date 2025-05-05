import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { features } from './data';
import Features2 from './components/Features2';
import Features3 from './components/Features3';
import Features4 from './components/Features4';
import FeedbackTestimonial from '@/components/common/FeedbackTestimonial';
import Footer2 from '@/components/common/Footer2';
export const metadata = {
  title: 'Marketing Landing'
};
const Marketing = () => {
  return <>
      <div className="header-3">
        <Navbar buttonVariant="outline-primary" />
        <Hero />
      </div>
      <Features features={features} />
      <Features2 />
      <Features3 />
      <Features4 />
      <FeedbackTestimonial />
      <Footer2 />
    </>;
};
export default Marketing;