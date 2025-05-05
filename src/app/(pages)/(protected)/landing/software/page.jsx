import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import ClientsReview from './components/ClientsReview';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import { features } from './data';
import PricingCards from '@/components/common/PricingCards';
import Testimonial from '@/components/common/Testimonial';
import Footer from './components/Footer';
export const metadata = {
  title: 'Software Landing'
};
const Software = () => {
  return <>
      <div className="header-2">
        <Navbar centered buttonVariant="primary" />
        <Hero />
      </div>
      <ClientsReview />
      <Feature1 />
      <Feature2 features={features} />
      <PricingCards />
      <Testimonial />
      <Footer />
    </>;
};
export default Software;