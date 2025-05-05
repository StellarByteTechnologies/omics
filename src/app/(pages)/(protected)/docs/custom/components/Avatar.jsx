import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

// images
import avatar7 from '@/assets/images/avatars/img-7.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar4 from '@/assets/images/avatars/img-4.jpg';
const AvatarExample = () => {
  return <Row id="avatars">
      <Col>
        <Card>
          <CardBody>
            <CardTitle as="h5" className="mb-0">
              Avatars
            </CardTitle>
            <p className="sub-header">
              Create and group avatars of different sizes and shapes with the size modifier css classes e.g.
              <code>
                avatar-{'{'}xl | lg | md | sm | xs{'}'}
              </code>
              . Using Bootstrap&apos;s naming convention, you can control size of avatar including standard avatar, or scale it up to different sizes.
            </p>

            <div className="pt-4">
              {['xl', 'lg', 'md', 'sm', 'xs'].map((size, idx) => {
              return <Image key={idx} src={avatar7} alt="avatar" className={clsx('img-fluid', 'avatar-' + size, 'rounded-sm', 'shadow-sm', 'ms-5', 'mb-2', 'mb-xl-0')} />;
            })}
            </div>

            <p className="sub-header mt-4">
              Using an additional class <code>.rounded-circle</code>, you can create the rounded avatar.
            </p>

            <div className="pt-4">
              {['xl', 'lg', 'md', 'sm', 'xs'].map((size, idx) => {
              return <Image key={idx} src={avatar7} alt="avatar" className={clsx('img-fluid', 'avatar-' + size, 'rounded-circle', 'shadow-sm', 'ms-5', 'mb-2', 'mb-xl-0')} />;
            })}
            </div>

            <p className="sub-header mt-4">
              Using an additional class <code>.avatar-border</code>, you can give a nice border.
            </p>

            <div className="pt-4">
              <Image src={avatar7} alt="avatar" className="img-fluid avatar-lg rounded-circle avatar-border ms-5" />
            </div>

            <p className="sub-header mt-4">
              Wrap the list of avatars with class <code>.avatar-group</code> to group and show multiple avatars.
            </p>

            <div className="avatar-group">
              {[avatar7, avatar2, avatar4].map((img, idx) => {
              return <Link href="" className="avatar-group-item me-1" key={idx}>
                    <Image src={img} alt="avatar" className="img-fluid avatar-xs rounded-circle avatar-border" />
                  </Link>;
            })}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default AvatarExample;