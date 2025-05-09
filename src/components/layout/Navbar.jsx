'use client';

import useScrollEvent from '@/hooks/useScrollEvent';
import useToggle from '@/hooks/useToggle';
import clsx from 'clsx';
import { Button, Collapse, Container } from 'react-bootstrap';
import LogoBox from '../LogoBox';
import AppMenu from './AppMenu';
const Navbar = ({
  buttonVariant,
  centered
}) => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle();
  const {
    scrollY
  } = useScrollEvent();
  return <header>
      <nav className={clsx('navbar navbar-expand-lg topnav-menu z-10 navbar-light', {
      'navbar-sticky': scrollY >= 80
    })} data-toggle="sticky">
        <Container>
          <LogoBox />
          <button onClick={toggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content" aria-controls="topnav-menu-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse in={isOpen} className="navbar-collapse">
            <div>
              <AppMenu centered={centered} />
              <ul className="navbar-nav align-items-lg-center d-flex">
                <li className="nav-item ms-2">
                  {/* <Button variant={buttonVariant} size="sm">
                    Download
                  </Button> */}
                </li>
              </ul>
            </div>
          </Collapse>
        </Container>
      </nav>
    </header>;
};
export default Navbar;