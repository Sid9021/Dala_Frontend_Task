import React, { Fragment, useEffect } from "react";
import Header from "../layouts/Header/Header";
import Sidebar from "../layouts/SideBar/SideBar";
import Footer from "../layouts/Footer/Footer";
import Switcher from "../layouts/Switcher/Switcher";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Rightside from "../layouts/Rightside/Rightside";
import { Backtotop1 } from "../layouts/Backtotop/Backtotop";
import { MENUITEMS } from "constants/sidebarItems";
const Layout = ({ menuItems = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  document.querySelector("body").classList.remove("error-1");
  document.querySelector("body").classList.remove("app", "sidebar-mini", "landing-page", "horizontalmenu")
  document.querySelector("body").classList.add("main-body", "leftmenu")
  const remove = () => {
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    document.querySelector("body").classList.remove("main-sidebar-show");
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
  };


  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard/");
    }
  }, [location.pathname]);

  return (
    <Fragment >
      <div className="horizontalMenucontainer">
        <Switcher />
        <div className="page">
          <Header />
          <Sidebar sidebarItems={menuItems} />
          <div className="main-content mt-5 pt-0 side-content">
            <div className="main-container container-fluid pt-3">
              <div className="inner-body" >
                <Outlet />
              </div>
            </div>
          </div>
          {/* <Rightside /> */}
        </div>
        <Backtotop1 />
      </div>
      <Footer />
    </Fragment>
  );
};
export default Layout;