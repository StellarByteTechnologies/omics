import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/RegulatedGradeData';
import { features, spaceOptions, testimonials } from './data';
import SpaceOptions from './components/SpaceOptions';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
export const metadata = {
  title: 'CoWorking Landing'
};
const Coworking = () => {
  return <>
      <div className="header-5">
        <Navbar buttonVariant="outline-orange" />
        <Hero />
      </div>
      <About />
      <Features features={features} />
      <SpaceOptions spaceOptions={spaceOptions} />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </>;
};
export default Coworking;