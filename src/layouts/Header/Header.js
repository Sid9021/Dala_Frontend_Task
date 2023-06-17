import React, { Fragment } from "react";
import { Dropdown, Container, Form, Nav, Navbar, InputGroup, } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import Searchable from "react-searchable-dropdown";

// FuScreen-start
function Fullscreen() {
  if (
    (document.fullScreenElement && document.fullScreenElement === null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
// FullScreen-end
function Header() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${process.env.PUBLIC_URL}/`;
    navigate(path);
  }

  const openCloseSidebar1 = () => {
    document.querySelector(".header-settings").classList.toggle("show");
    document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
  };
  //  headerToggleButton
  const headerToggleButton = () => {
    let body = document.querySelector("body");
    let innerWidth = window.innerWidth;
    if (body !== !body) {
      if (innerWidth >= 992) {
        document.querySelector("body")?.classList.toggle("main-sidebar-hide");
        document.querySelector("body")?.classList.remove("main-sidebar-show");
      } else if (document.body.classList.contains("horizontalmenu")) {
        document.querySelector("body")?.classList.toggle("main-navbar-show");
        document.querySelector("body")?.classList.remove("main-sidebar-show");
        document.querySelector("body")?.classList.remove("main-sidebar-hide");
      } else {
        document.querySelector("body")?.classList.toggle("main-sidebar-show");
        document.querySelector("body")?.classList.remove("main-sidebar-hide");
      }
    }
  };

  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
  }
  const Darkmode = () => {
    document.querySelector("body").classList.toggle("dark-theme");
  };
  return (
    <Fragment>
      <Navbar
        expand="lg"
        className="main-header side-header sticky"
      // style={{ marginBottom: "-64px" }}
      >
        <Container fluid className="main-container container-fluid">
          <div className="main-header-left">
            <Link
              to="#"
              className="main-header-menu-icon"
              id="mainSidebarToggle"
              onClick={() => headerToggleButton()}
            >
              <span></span>
            </Link>
            <div className="hor-logo">
              <Link
                to={`${process.env.PUBLIC_URL}/dashboard/`}
                className="main-logo"
              >
                <img
                  src={require("../../assets/dala-assets/img/Dala_1.png")}
                  className="header-brand-img desktop-logo"
                  alt="logo"
                  width={37}
                  height={37}
                />
                <img
                  src={require("../../assets/dala-assets/img/Dala_1.png")}
                  className="header-brand-img desktop-logo-dark"
                  alt="logo"
                  width={37}
                  height={37}
                />
              </Link>
            </div>
          </div>
          <div className="main-header-center">
            <div className="responsive-logo">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/`}>
                <img
                  src={require("../../assets/dala-assets/img/Dala_1.png")}
                  className="mobile-logo"
                  alt="logo"
                  width={37}
                  height={37}
                />
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/dashboard/`}>
                <img
                  src={require("../../assets/dala-assets/img/Dala_1.png")}
                  className="mobile-logo-dark"
                  alt="logo"
                  width={37}
                  height={37}
                />
              </Link>
            </div>

          </div>
          <div className="main-header-right">
            <div className="navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
              <div className="d-flex header-setting-icon demo-icon">
                <Dropdown className="dropdown d-flex main-header-theme">
                  <Nav.Link
                    className="nav-link icon layout-setting"
                    onClick={() => Darkmode()}
                  >
                    <span className="dark-layout">
                      <i className="fe fe-sun header-icons"></i>
                    </span>
                    <span className="light-layout">
                      <i className="fe fe-moon header-icons"></i>
                    </span>
                  </Nav.Link>
                </Dropdown>
                <Dropdown className="main-profile-menu">
                  <Dropdown.Toggle className="d-flex p-0" variant="default">
                    <span className="main-img-user mx-1">
                      <img
                        alt="avatar"
                        src={require("../../assets/dala-assets/img/Dala_1.jpg")}
                      />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ margin: "0px" }}>
                    <div className="header-navheading">
                      <h6 className="main-notification-title">
                        Dala Admin
                      </h6>
                      <p className="main-notification-text">Manager</p>
                    </div>
                    <Dropdown.Item
                      className="border-top"
                      href={`${process.env.PUBLIC_URL}/settings/profile/edit-profile`}
                    >
                      <i className="fe fe-user"></i> My Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      href={`${process.env.PUBLIC_URL}/settings/profile/edit-profile`}
                    >
                      <i className="fe fe-edit"></i> Edit Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      href={`${process.env.PUBLIC_URL}/dashboard/profile`}
                    >
                      <i className="fe fe-settings"></i> Account Settings
                    </Dropdown.Item>
                    <Dropdown.Item
                      href={`${process.env.PUBLIC_URL}/dashboard/profile`}
                    >
                      <i className="fe fe-settings"></i> Support
                    </Dropdown.Item>
                    <Dropdown.Item
                      href={`${process.env.PUBLIC_URL}/dashboard/profile`}
                    >
                      <i className="fe fe-compass"></i> Activity
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => { navigate('/admin/login') }}
                    >
                      <i className="fe fe-power"></i> Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
