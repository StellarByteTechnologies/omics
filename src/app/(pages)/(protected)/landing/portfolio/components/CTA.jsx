'use client';

import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
const socialIcons = ['dribbble', 'facebook', 'twitter', 'linkedin', 'instagram'];
const CTA = () => {
  const schemaResolver = yup.object().shape({
    name: yup.string().required('Please enter name'),
    subject: yup.string().required('Please enter subject'),
    email: yup.string().required('Please enter email').email('Please enter valid email'),
    message: yup.string().required('Please enter message')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(schemaResolver)
  });
  return <section className="section pt-lg-8 pb-lg-4 pt-4 pb-3 position-relative" id="contact-me-form">
      <Container className="testimonials-3">
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-up" data-aos-duration={600}>
            <h1 className="display-5 fw-medium">Just say hi.</h1>
            <p>I am open to discuss your next project, improve user experience of an existing one or help with your UX/UI design challenges.</p>
            <div className="mt-5 text-muted">Email me at</div>
            <div>
              <h4 className="mt-0 fw-medium">
                <a href="mailto:support@coderthemes.com">hello@coderthemes.com</a>
              </h4>
            </div>
            <div className="mt-5 text-muted">Social</div>
            <ul className="list-inline mt-1">
              {socialIcons.map((icon, idx) => <li className="list-inline-item me-3" key={idx}>
                  <span role="button">
                    <IconifyIcon style={{
                  height: 30,
                  width: 30
                }} className="icon-sm icon-dual" icon={`lucide:${icon}`} />
                  </span>
                </li>)}
            </ul>
          </Col>
          <Col lg={6} data-aos="fade-up" data-aos-duration={900}>
            <form name="ajax-form" id="ajax-form" onSubmit={handleSubmit(() => {})} className="form-main mt-5 mt-lg-0">
              <Row>
                <TextFormInput name="name" placeholder="Your name" containerClassName="mb-3 col-12" control={control} />
                <TextFormInput name="email" placeholder="Your email where we can reach" containerClassName="mb-3 col-12" control={control} />
                <TextFormInput name="subject" placeholder="Subject" containerClassName="mb-3 col-12" control={control} />
              </Row>
              <Row>
                <TextAreaFormInput name="message" placeholder="Write your message here. Keep it simple, concise and intriguing!" containerClassName="mb-3 col-12" rows={5} control={control} />
              </Row>
              <Row>
                <Col className="text-end">
                  <Button type="submit" variant="danger" id="send">
                    Submit
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default CTA;