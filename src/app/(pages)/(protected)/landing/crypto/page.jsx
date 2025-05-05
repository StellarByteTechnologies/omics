import Footer from '@/components/common/Footer';
import Navbar from '@/components/layout/Navbar';
import Blogs from './components/Blogs';
import Coins from './components/Coins';
import Features from './components/Features';
import Hero from './components/Hero';
import Integration from './components/Integration';
import Stats from './components/Stats';
import { blogs, coins, features } from './data';
export const metadata = {
  title: 'Crypto Landing'
};
const Crypto = () => {
  return <>
      <div className="header-1">
        <Navbar buttonVariant="outline-primary" />
        <Hero />
      </div>
      <Coins coins={coins} />
      <Features features={features} />
      <Integration />
      <Stats />
      <Blogs blogs={blogs} />
      <Footer />
    </>;
};
export default Crypto;