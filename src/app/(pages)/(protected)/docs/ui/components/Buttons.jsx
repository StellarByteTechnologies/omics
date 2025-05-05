import { extendedColorVariants } from '@/assets/data/constants';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { toSentenceCase } from '@/utils/change-casing';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';
const Buttons = ({
  variants
}) => {
  return <Card id="buttons">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Buttons
        </CardTitle>
        <p className="sub-header">
          Use any of the available button style types to quickly create a styled button. Just modify the <code>variant</code> prop.
        </p>

        {(extendedColorVariants || []).map((item, idx) => {
        return <Button variant={item} className="me-2 mb-2 mb-xxl-0" key={idx}>
              {toSentenceCase(item)}
            </Button>;
      })}

        <p className="sub-header mt-4">
          For a lighter touch, Buttons also come in <code>outline-*</code> variants with no background color.
        </p>

        {[...extendedColorVariants, 'white'].map((item, idx) => {
        return <Button variant={item !== 'white' ? 'outline-' + item : item} className="me-2 mb-2 mb-xxl-0" key={idx}>
              {toSentenceCase(item)}
            </Button>;
      })}

        <p className="sub-header mt-4">
          Replace the default modifier classes with the <code>.btn-soft-*</code>
          ones to have a softer background color on any button.
        </p>

        {(extendedColorVariants || []).map((item, idx) => {
        return <Button variant={'soft-' + item} className="me-2 mb-2 mb-xl-0" key={idx}>
              {toSentenceCase(item)}
            </Button>;
      })}

        <p className="sub-header mt-4">
          Add a class <code>.btn-rounded</code> with the default modifier classes to have rounded edges.
        </p>

        {(extendedColorVariants || []).map((item, idx) => {
        return <Button variant={item} className="btn-rounded me-2 mb-2 mb-xl-0" key={idx}>
              {toSentenceCase(item)}
            </Button>;
      })}

        <p className="sub-header mt-4">
          Fancy larger or smaller buttons? Add <code>size=&quote;lg&quote;</code>, <code>size=&quote;sm&quote;</code> for additional sizes.
        </p>

        <Button variant="primary" size="lg" className="me-2 mb-2 mb-sm-0">
          Large button
        </Button>
        <Button variant="primary" className="me-2 mb-2 mb-sm-0">
          Large button
        </Button>
        <Button variant="primary" size="sm" className="me-2 mb-2 mb-sm-0">
          Large button
        </Button>

        <p className="sub-header mt-4">Buttons with icon - variations</p>

        <Button variant="primary" className="me-2 mb-2 mb-sm-0">
          <IconifyIcon icon="lucide:play" className="me-1" />
          Button with icon on left
        </Button>
        <Button variant="primary" className="me-2 mb-2 mb-sm-0">
          Button with icon on right
          <IconifyIcon icon="lucide:play" className="ms-1" />
        </Button>
        <Button variant="primary" className="me-2 mb-2 mb-sm-0 btn-icon d-inline-flex">
          <IconifyIcon icon="lucide:play" />
        </Button>
        <Button variant="primary" className="btn-rounded-circle btn-icon d-inline-flex">
          <IconifyIcon icon="lucide:play" />
        </Button>
      </CardBody>
    </Card>;
};
export default Buttons;