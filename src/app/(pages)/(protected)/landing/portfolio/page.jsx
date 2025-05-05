import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import { projects, services, testimonials } from './data';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
export const metadata = {
  title: 'PortFolio Landing'
};
const Portfolio = () => {
  return <>
      <div className="header-6">
        <Navbar buttonVariant="outline-secondary" centered />
        <Hero />
      </div>
      <Services services={services} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <CTA />
      <Footer />
    </>;
};
export default Portfolio;