import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { Card, CardBody } from 'react-bootstrap';
const SupportCenter = () => {
  return <Card className="rounded border sticky-el" data-margin-top={50}>
      <CardBody className="px-5 py-4">
        <h4 className="fw-medium">
          <IconifyIcon width="29" height="29" className="icon-sm text-muted me-3" icon="lucide:life-buoy" />
          Support center
        </h4>
        <h5 className="text-muted fw-normal mb-4 pb-3">
          <span className="fw-medium">Can&apos;t find the answer?</span> We are here to help you all the time.
        </h5>
        <h5 className="fw-normal">
          <Link href="/pages/contact" className="text-muted">
            <IconifyIcon height="20" width="20" className="me-2" icon="lucide:message-square" />
            Talk to Support Team
          </Link>
        </h5>
        <h5 className="fw-normal mt-3">
          <Link href="" className="text-muted">
            <IconifyIcon height="20" width="20" className="me-2" icon="lucide:mail" />
            help@coderthemes.com
          </Link>
        </h5>
        <h5 className="fw-normal mt-3">
          <Link href="" className="text-muted">
            <IconifyIcon height="20" width="20" className="me-2" icon="lucide:twitter" />
            @coderthemes
          </Link>
        </h5>
      </CardBody>
    </Card>;
};
export default SupportCenter;