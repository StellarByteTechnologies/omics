import Navbar from '@/components/layout/Navbar';
import AccountPages from './AccountPages';
import CTA from './CTA';
import { accountPages, features, landings, secondaryPages } from './data';
import Demos from './Demos';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import InnerPages from './InnerPages';
export const metadata = {
  title: 'Hero'
};
const Home = () => {
  return <>
      <div className="bg-gradient3">
        <Navbar buttonVariant="outline-primary" centered />
        <Hero />
      </div>
      <Demos landings={landings} />
      <InnerPages innerPages={secondaryPages} />
      <AccountPages accountPages={accountPages} />
      <Features features={features} />
      <CTA />
      <Footer />
    </>;
};
export default Home;