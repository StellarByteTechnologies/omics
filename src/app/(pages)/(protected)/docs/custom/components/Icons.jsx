import IconifyIcon from '@/components/wrappers/IconifyIcon';
import clsx from 'clsx';
import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
const LucideIconExample = () => {
  return <>
      <CardTitle as="h5" className="mt-4 mb-0">
        Lucide Icons
      </CardTitle>
      <p className="sub-header">
        Lucide is a collection of simply beautiful svg based open source icons. Each icon is designed with an emphasis on simplicity, consistency, and
        flexibility. To use an icon on your page, add a <code>data-lucide</code> attribute with the icon name to an element.
      </p>
      <Row>
        <Col md={'auto'}>
          <IconifyIcon height="24" width="24" icon="lucide:activity" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:shopping-bag" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:credit-card" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:message-square" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:map-pin" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:bell" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:calendar" className="me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:map" />
        </Col>
      </Row>
      <p className="sub-header mt-4">
        For a complete list of icons, check{' '}
        <a href="https://icon-sets.iconify.design/lucide/?keyword=lucide" className="text-primary" target="_blank" rel="noreferrer">
          here
        </a>
        .
      </p>

      <p className="sub-header mt-4">
        Use modifier class <code>.icon-dual</code> to convert it into two-tone. All the color variations are available as well. E.g.{' '}
        <code>
          icon-dual-{'{'}primary | secondary | success | danger | info | warning{'}'}.
        </code>
      </p>
      <Row>
        <Col md={'auto'}>
          <IconifyIcon height="24" width="24" icon="lucide:activity" className="icon-dual me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:shopping-bag" className="icon-dual-primary me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:credit-card" className="icon-dual-secondary me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:message-square" className="icon-dual-success me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:map-pin" className="icon-dual-danger me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:bell" className="icon-dual-info me-2" />
          <IconifyIcon height="24" width="24" icon="lucide:calendar" className="icon-dual-warning" />
        </Col>
      </Row>
      <p className="sub-header mt-4">
        Use size modifier class&nbsp;
        <code>height and width</code> to change the size.
      </p>
      <Row>
        <Col xs={'auto'}>
          {['58', '48', '42', '35', '28', '22', '20'].map((size, idx) => {
          return <IconifyIcon height={size} width={size} icon="lucide:message-circle" className={clsx('me-2')} key={idx} />;
        })}
        </Col>
      </Row>
    </>;
};
const IconExample = () => {
  return <Card id="icons">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Icons
        </CardTitle>
        <p className="sub-header">
          Omaics comes with icon library:{' '}
          <a href="https://icon-sets.iconify.design/lucide/?keyword=lucide" target="_blank" rel="noreferrer">
            Lucide Icons
          </a>
        </p>
        <LucideIconExample />
      </CardBody>
    </Card>;
};
export default IconExample;