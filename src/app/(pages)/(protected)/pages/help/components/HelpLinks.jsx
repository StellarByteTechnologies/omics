import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const HelpCard = ({
  helpLink
}) => {
  const {
    icon,
    links,
    title
  } = helpLink;
  return <div className="mb-5 mb-lg-0">
      <span className="icon icon-md text-primary">{icon}</span>
      <h4 className="mt-4 fw-semibold mb-0">{title}</h4>
      <ul className="list-unstyled text-muted mb-4">
        {links.map((link, idx) => <li className="my-3" key={idx}>
            <Link href="" className="text-muted">
              {link}
            </Link>
          </li>)}
      </ul>
      <Link href="" className="text-primary fw-medium">
        View More <IconifyIcon className="icon-xs ms-1" icon="lucide:chevron-right" />
      </Link>
    </div>;
};
const HelpLinks = ({
  helpLinks
}) => {
  return <Row>
      {helpLinks.map((helpLink, idx) => <Col md={4} key={idx}>
          <HelpCard helpLink={helpLink} />
        </Col>)}
    </Row>;
};
export default HelpLinks;