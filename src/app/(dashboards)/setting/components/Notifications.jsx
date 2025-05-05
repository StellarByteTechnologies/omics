import { Col, Row } from 'react-bootstrap';
const Notifications = () => {
  return <>
      <h4 className="mt-0">Notifications</h4>
      <form className="password-form mt-4">
        <div className="mb-3">
          <label htmlFor="name">Send me an email, when</label>
          <ul className="list-unstyled">
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="mention" defaultChecked />
                <label className="form-check-label" htmlFor="mention">
                  Someone mentions me
                </label>
              </div>
            </li>
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="replies" />
                <label className="form-check-label" htmlFor="replies">
                  Someone replies to me
                </label>
              </div>
            </li>
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="share-content" defaultChecked />
                <label className="form-check-label" htmlFor="share-content">
                  Someone shares the content
                </label>
              </div>
            </li>
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="new-content" />
                <label className="form-check-label" htmlFor="new-content">
                  There is a new published content
                </label>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="mb-3">
          <label htmlFor="name">Other Subscriptions</label>
          <ul className="list-unstyled">
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="newsletter" defaultChecked />
                <label className="form-check-label" htmlFor="newsletter">
                  Weekly newsletter
                </label>
              </div>
            </li>
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="weekly-jobs" />
                <label className="form-check-label" htmlFor="weekly-jobs">
                  Weekly jobs
                </label>
              </div>
            </li>
            <li className="mt-2">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="events" defaultChecked />
                <label className="form-check-label" htmlFor="events">
                  Events new me
                </label>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <Row className="mt-3">
          <Col lg={12}>
            <button type="submit" className="btn btn-primary">
              Update Preferences
            </button>
          </Col>
        </Row>
      </form>
    </>;
};
export default Notifications;