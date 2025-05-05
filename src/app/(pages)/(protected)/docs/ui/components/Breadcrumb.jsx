import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle } from 'react-bootstrap';
const Breadcrumbs = () => {
  return <Card id="breadcrumb">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Breadcrumb
        </CardTitle>
        <p className="sub-header">
          Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active{' '}
          <code>Breadcrumb.Item</code>
        </p>

        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbItem href="">Home</BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbItem href="#">
            <IconifyIcon icon="lucide:home" className="icon-xs" />
          </BreadcrumbItem>
          <BreadcrumbItem href="">Library</BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </CardBody>
    </Card>;
};
export default Breadcrumbs;