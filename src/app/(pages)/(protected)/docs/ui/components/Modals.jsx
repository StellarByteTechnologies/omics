'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { Button, Card, Form, FormLabel, FormSelect, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
const StandardModal = () => {
  const {
    isTrue: show,
    toggle
  } = useToggle();
  return <>
      <div className="button-list me-2 mb-2 mb-sm-0">
        <Button className="btn-soft-primary" onClick={toggle}>
          Standard modal
        </Button>
      </div>
      {/* standard modal */}
      <Modal show={show} onHide={toggle}>
        <ModalHeader closeButton>
          <ModalTitle as="h5">Modal Heading</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h5>You are out of storage space.</h5>
          <p>To upload more data, please add additional storage space.</p>
          <Form>
            <FormLabel>Select Size: </FormLabel>
            <FormSelect aria-label="selectSize">
              <option>Choose...</option>
              <option value="1">1 GB</option>
              <option value="10">10 GB</option>
              <option value="50">50 GB</option>
              <option value="100">100 GB</option>
              <option value="500">500 GB</option>
              <option value="1000">1 TB</option>
            </FormSelect>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="white" onClick={toggle}>
            Cancel
          </Button>{' '}
          <Button onClick={toggle}>Upgrade</Button>
        </ModalFooter>
      </Modal>
    </>;
};
const ModalSizes = () => {
  const {
    isTrue: show,
    toggle: handleClose,
    setTrue
  } = useToggle();
  const [size, setSize] = useState();
  const openModalWithSize = size => {
    setSize(size);
    setTrue();
  };
  return <>
      <div className="button-list">
        <Button className="btn-soft-secondary me-2 mb-2 mb-sm-0" onClick={() => openModalWithSize('xl')}>
          Extra large modal
        </Button>
        <Button className="btn-soft-success me-2 mb-2 mb-sm-0" onClick={() => openModalWithSize('lg')}>
          Large modal
        </Button>
        <Button className="btn-soft-info me-2 mb-2 mb-sm-0" onClick={() => openModalWithSize('sm')}>
          Small Modal
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} size={size}>
        <ModalHeader onHide={handleClose} closeButton>
          <ModalTitle as="h5">Modal Heading</ModalTitle>
        </ModalHeader>
        <ModalBody>...</ModalBody>
      </Modal>
    </>;
};
const VerticallyCenteredModal = () => {
  const {
    isTrue: showCenteredModal,
    toggle: toggleCenteredModal
  } = useToggle();
  return <>
      <p className="sub-header mt-4">
        You can vertically center a modal by passing the <code>centered</code> prop.
      </p>
      <div className="button-list">
        <Button className="btn-soft-primary" onClick={toggleCenteredModal}>
          Vertically center
        </Button>
      </div>

      <Modal show={showCenteredModal} onHide={toggleCenteredModal} centered>
        <ModalHeader closeButton>
          <ModalTitle as="h5">Center modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h5>Overflowing text to show scroll behavior</h5>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p className="mb-0">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
        </ModalBody>
      </Modal>
    </>;
};
const ScrollableModal = () => {
  const {
    isTrue: showScrollableModal,
    toggle: toggleScrollableModal
  } = useToggle();
  return <>
      <p className="sub-header mt-4">
        Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead of the entire Modal when overflowing.
      </p>
      <div className="button-list">
        <Button className="btn-soft-primary" onClick={toggleScrollableModal}>
          Scrollable
        </Button>
      </div>
      <Modal show={showScrollableModal} onHide={toggleScrollableModal} scrollable>
        <ModalHeader closeButton>
          <ModalTitle as="h5">Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </ModalBody>
        <Modal.Footer>
          <Button variant="light" onClick={toggleScrollableModal}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>;
};
const ModalWithAlerts = () => {
  const {
    isTrue: showSuccessModal,
    toggle: toggleSuccessModal
  } = useToggle();
  const {
    isTrue: showErrorModal,
    toggle: toggleErrorModal
  } = useToggle();
  return <>
      <p className="sub-header mt-4">A modal can be used to show contexual messages including success, error, warning, information messages, etc.</p>

      <div className="button-list">
        <Button className="btn-soft-success me-2" onClick={toggleSuccessModal}>
          Success
        </Button>
        <Button className="btn-soft-danger" onClick={toggleErrorModal}>
          Error
        </Button>
      </div>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={toggleSuccessModal} size="sm" centered>
        <ModalHeader closeButton className="border-0 pb-0" />
        <ModalBody className="text-center">
          <span className="icon icon-lg text-success">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>Stockholm-icons / Communication / Mail-attachment</title>
              <desc>Created with Sketch.</desc>
              <g id="Stockholm-icons-/-Communication-/-Mail-attachment" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <rect id="bound" x={0} y={0} width={24} height={24} />
                <path d="M14.8571499,13 C14.9499122,12.7223297 15,12.4263059 15,12.1190476 L15,6.88095238 C15,5.28984632 13.6568542,4 12,4 L11.7272727,4 C10.2210416,4 9,5.17258756 9,6.61904762 L10.0909091,6.61904762 C10.0909091,5.75117158 10.823534,5.04761905 11.7272727,5.04761905 L12,5.04761905 C13.0543618,5.04761905 13.9090909,5.86843034 13.9090909,6.88095238 L13.9090909,12.1190476 C13.9090909,12.4383379 13.8240964,12.7385644 13.6746497,13 L10.3253503,13 C10.1759036,12.7385644 10.0909091,12.4383379 10.0909091,12.1190476 L10.0909091,9.5 C10.0909091,9.06606198 10.4572216,8.71428571 10.9090909,8.71428571 C11.3609602,8.71428571 11.7272727,9.06606198 11.7272727,9.5 L11.7272727,11.3333333 L12.8181818,11.3333333 L12.8181818,9.5 C12.8181818,8.48747796 11.9634527,7.66666667 10.9090909,7.66666667 C9.85472911,7.66666667 9,8.48747796 9,9.5 L9,12.1190476 C9,12.4263059 9.0500878,12.7223297 9.14285008,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L14.8571499,13 Z" id="Combined-Shape" fill="#335EEA" opacity="0.3" />
                <path d="M9,10.3333333 L9,12.1190476 C9,13.7101537 10.3431458,15 12,15 C13.6568542,15 15,13.7101537 15,12.1190476 L15,10.3333333 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9,10.3333333 Z M10.0909091,11.1212121 L12,12.5 L13.9090909,11.1212121 L13.9090909,12.1190476 C13.9090909,13.1315697 13.0543618,13.952381 12,13.952381 C10.9456382,13.952381 10.0909091,13.1315697 10.0909091,12.1190476 L10.0909091,11.1212121 Z" id="Combined-Shape" fill="#335EEA" />
              </g>
            </svg>
          </span>
          <h4 className="text-success mt-0">Awesome!</h4>
          <p className="mx-auto text-muted">We receieved your application and will process it shortly.</p>
          <div className="mt-4">
            <Button variant="white btn-sm" onClick={toggleSuccessModal}>
              <IconifyIcon icon="lucide:arrow-left" className="icon-xs me-1" /> Back
            </Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Erroe Modal */}
      <Modal show={showErrorModal} onHide={toggleErrorModal} size="sm" centered>
        <ModalHeader closeButton className="border-0 pb-0" />
        <ModalBody className="text-center">
          <span className="icon icon-xl text-danger">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>Stockholm-icons / General / Sad</title>
              <desc>Created with Sketch.</desc>
              <g id="Stockholm-icons-/-General-/-Sad" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <rect id="bound" x={0} y={0} width={24} height={24} />
                <rect id="Combined-Shape" fill="#335EEA" opacity="0.3" x={2} y={2} width={20} height={20} rx={10} />
                <path d="M6.16794971,14.5547002 C5.86159725,14.0951715 5.98577112,13.4743022 6.4452998,13.1679497 C6.90482849,12.8615972 7.52569784,12.9857711 7.83205029,13.4452998 C8.9890854,15.1808525 10.3543313,16 12,16 C13.6456687,16 15.0109146,15.1808525 16.1679497,13.4452998 C16.4743022,12.9857711 17.0951715,12.8615972 17.5547002,13.1679497 C18.0142289,13.4743022 18.1384028,14.0951715 17.8320503,14.5547002 C16.3224187,16.8191475 14.3543313,18 12,18 C9.64566871,18 7.67758127,16.8191475 6.16794971,14.5547002 Z" id="Path-56" fill="#335EEA" transform="translate(12.000000, 15.499947) scale(1, -1) translate(-12.000000, -15.499947) " />
              </g>
            </svg>
          </span>
          <h4 className="text-danger mt-0">Something went wrong.</h4>
          <p className="mx-auto text-muted mt-2">We are unable to process your request at the moment. Our appologies, try back in about 5 minutes.</p>
          <div className="mt-4">
            <Button variant="white btn-sm" onClick={toggleErrorModal}>
              <IconifyIcon icon="lucide:arrow-left" className="icon-xs me-1" /> Back
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>;
};
const Modals = () => {
  return <Card id="modals">
      <Card.Body>
        <Card.Title as="h5" className="mb-0">
          Modals
        </Card.Title>
        <p className="sub-header">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

        <div className="d-flex">
          <StandardModal />
          <ModalSizes />
        </div>

        <VerticallyCenteredModal />
        <ScrollableModal />
        <ModalWithAlerts />
      </Card.Body>
    </Card>;
};
export default Modals;