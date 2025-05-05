import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import PricingPlans from './components/PricingPlans';
import Benefits from './components/Benefits';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from '@/components/common/Footer';
import { benefits, plans } from './data';
export const metadata = {
  title: 'Pricing'
};
const Pricing = () => {
  return <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />
      <PricingPlans plans={plans} />
      <Benefits benefits={benefits} />
      <FAQs />
      <CTA />
      <Footer />
    </>;
};
export default Pricing;