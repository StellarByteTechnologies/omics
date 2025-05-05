import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Testimonial from './components/Testimonial';
import Footer from '@/components/common/Footer';
import Navigation from './components/Navigation';
export const metadata = {
  title: 'Portfolio Items'
};
const PortfolioItem = () => {
  return <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />
      <Content />
      <Testimonial />
      <Navigation />
      <Footer />
    </>;
};
export default PortfolioItem;