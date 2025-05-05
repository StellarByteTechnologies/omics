import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import { galleryItems } from './data';
import Footer from '@/components/common/Footer';
export const metadata = {
  title: 'Portfolio Masonary'
};
const Masonry = () => {
  return <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />
      <Gallery galleryItems={galleryItems} />

      <Footer />
    </>;
};
export default Masonry;