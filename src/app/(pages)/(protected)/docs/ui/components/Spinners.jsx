import { Card, CardBody, CardTitle, Spinner } from 'react-bootstrap';
const Spinners = ({
  variants
}) => {
  return <Card id="spinners">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Spinners
        </CardTitle>
        <p className="sub-header">Spinners can be used to show the loading state in your projects.</p>

        {(variants || []).map((color, idx) => {
        return <Spinner animation="border" key={idx} className="m-2" variant={color}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>;
      })}

        <p className="sub-header mt-4">
          If you don&apos;t fancy a border spinner, switch to the grow spinner. While it doesn&apos;t technically spin, it does repeatedly grow!
        </p>

        {(variants || []).map((color, idx) => {
        return <Spinner animation="grow" key={idx} className="m-2" variant={color}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>;
      })}
      </CardBody>
    </Card>;
};
export default Spinners;