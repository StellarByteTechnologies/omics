import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
const BlogCard = ({
  blog
}) => {
  const {
    category,
    date,
    duration,
    image,
    readTime,
    title,
    variant
  } = blog;
  return <div className="mb-4" data-aos="fade-up" data-aos-duration={duration}>
      <div className="crypto-blog-box position-relative">
        <span className={`ribbon bg-${variant} fw-medium`}>{category}</span>
        <Image src={image} alt="crypto" className="img-fluid d-block shadow rounded" />
      </div>
      <p className="text-muted mt-3 mb-0 fs-14">
        {date} <b>·</b> {readTime}
      </p>
      <h4 className="mt-1">
        <Link href="" className="text-dark">
          {title}
        </Link>
      </h4>
    </div>;
};
const Blogs = ({
  blogs
}) => {
  return <section className="position-relative py-xl-8 py-6 features-3">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="display-5 fw-medium">Useful Reading</h1>
            <p className="text-muted mx-auto">Few articles to read to know more about cryptocurrency</p>
          </Col>
        </Row>
        <Row className="mt-5">
          {blogs.map((blog, idx) => <Col lg={4} key={idx}>
              <BlogCard blog={blog} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Blogs;