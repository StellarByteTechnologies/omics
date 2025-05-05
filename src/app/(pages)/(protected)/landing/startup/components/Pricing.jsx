import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import { currency } from '@/assets/data/constants';
const Pricing = ({
  planFeatures
}) => {
  const checkIcon = <IconifyIcon icon="fe:check" />;
  return <section className="my-5 py-5 position-relative">
      <Container data-aos="fade-up" data-aos-duration={1500}>
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-primary px-2 py-1">Pricing</span>
            <h1 className="display-5 fw-medium">Pricing Plans</h1>
            <p className="text-muted mx-auto">
              Pricing that <span className="text-primary fw-bold">works</span> for everyone.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center justify-content-center">
          <Col lg={12}>
            <div className="table-responsive-lg w-lg-75 mx-lg-auto">
              <table className="table">
                <thead className="text-center">
                  <tr className="border-top">
                    <th scope="col" className="w-50" />
                    <th scope="col">
                      <span className="text-dark">Starter</span>
                      <small className="d-block text-body fw-normal">{currency}40/mo</small>
                    </th>
                    <th scope="col" className="border-start border-end">
                      <span className="text-dark">Professional</span>
                      <span className="badge bg-orange rounded-pill ms-1">Popular</span>
                      <small className="d-block text-body fw-normal">{currency}60/mo</small>
                    </th>
                    <th scope="col">
                      <span className="text-dark">Enterprise</span>
                      <small className="d-block text-body fw-normal">{currency}300/mo</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planFeatures.map((planFeature, idx) => {
                  return <tr className="border-top" key={idx}>
                        <td>{planFeature.name}</td>
                        <td className="text-center">
                          {planFeature.starter.available ? <span className="icon icon-xs text-success">{checkIcon}</span> : !planFeature.starter.available && planFeature.starter.addon ? <span className="badge bg-info rounded-pill">Add-on Available</span> : null}
                        </td>
                        <td className="text-center border-start border-end">
                          {planFeature.professional.available ? <span className="icon icon-xs text-success">{checkIcon}</span> : !planFeature.professional.available && planFeature.professional.addon ? <span className="badge bg-info rounded-pill">Add-on Available</span> : null}
                        </td>
                        <td className="text-center">
                          {planFeature.enterprise.available ? <span className="icon icon-xs text-success">{checkIcon}</span> : !planFeature.enterprise.available && planFeature.enterprise.addon ? <span className="badge bg-info rounded-pill">Add-on Available</span> : null}
                        </td>
                      </tr>;
                })}
                  {/* <tr className="border-top">
                    <td>Drag-and-drop editor</td>
                    <td />
                    <td className="text-center border-start border-end">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr>
                   <tr className="border-top">
                    <td>Email marketing</td>
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                    <td className="text-center border-start border-end">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr>
                   <tr className="border-top">
                    <td>Ad retargeting</td>
                    <td className="text-center">
                      <span className="badge bg-info rounded-pill">Add-on Available</span>
                    </td>
                    <td className="text-center border-start border-end" />
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr>
                   <tr className="border-top">
                    <td>Messenger integration</td>
                    <td className="text-center" />
                    <td className="text-center border-start border-end" />
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr>
                   <tr className="border-top">
                    <td>Live chat</td>
                    <td className="text-center" />
                    <td className="text-center border-start border-end">
                      <span className="badge bg-info rounded-pill">Add-on Available</span>
                    </td>
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr>
                   <tr className="border-top">
                    <td>Conversational bots</td>
                    <td className="text-center" />
                    <td className="text-center border-start border-end">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr>
                   <tr className="border-top">
                    <td>SEO recommendations &amp; optimizations</td>
                    <td className="text-center" />
                    <td className="text-center border-start border-end">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="icon icon-xs text-success">
                        @@include("./assets/images/icons/duotone-icons/navigation/Check.svg")
                      </span>
                    </td>
                   </tr> */}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default Pricing;