import Navbar from '@/components/layout/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import { blogPosts, jobDetails, projects, services } from './data';
import Portfolios from './components/Portfolios';
import Clients from './components/Clients';
import Blogs from './components/Blogs';
import Vacancies from './components/Vacancies';
import Footer from './components/Footer';
export const metadata = {
  title: 'Agency Landing'
};
const Agency = () => {
  return <>
      <div className="header-4">
        <Navbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <Services services={services} />
      <Portfolios portfolios={projects} />
      <Clients />
      <Blogs blogs={blogPosts} />
      <Vacancies jobDetails={jobDetails} />
      <Footer />
    </>;
};
export default Agency;