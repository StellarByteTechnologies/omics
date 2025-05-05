import Features from '@/components/common/Features';
import Hero from './components/Hero';
import Clients from '@/components/common/Clients';
import FeedbackTestimonial from '@/components/common/FeedbackTestimonial';
import PricingCards from '@/components/common/PricingCards';
import FAQs from '@/components/common/FAQs';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/layout/Navbar';
export const metadata = {
  title: 'SassClassic Landing'
};
const SassClassic = () => {
  return <>
      <Navbar buttonVariant="primary" centered />
      <Hero />
      <Features />
      <Clients />
      <FeedbackTestimonial />
      <PricingCards className="bg-gradient3" />
      <FAQs />
      <Footer />
    </>;
};
export default SassClassic;