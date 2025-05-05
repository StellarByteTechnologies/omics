import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Integrations from './components/Integrations';
import { integrations, planFeatures } from './data';
import Pricing from './components/Pricing';
import Footer2 from '@/components/common/Footer2';
export const metadata = {
  title: 'Startup Landing'
};
const Startup = () => {
  return <>
      <div className="header-7">
        <Navbar buttonVariant="secondary" centered />
        <Hero />
      </div>
      <Clients />
      <Features />
      <Integrations integrations={integrations} />
      <Pricing planFeatures={planFeatures} />
      <Footer2 socialIcon />
    </>;
};
export default Startup;