// import React, { Fragment, useEffect } from "react";
// import Header from "../layouts/Header/Header";
// import Sidebar from "../layouts/SideBar/SideBar";
// import Switcher from "../layouts/Switcher/Switcher";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { Backtotop1 } from "../layouts/Backtotop/Backtotop";
// import { MASTERFORMMENU } from "constants/sidebarItems";
// const App = () => {
//   document.querySelector("body").classList.remove("error-1");
//   document.querySelector("body").classList.remove("app", "sidebar-mini", "landing-page", "horizontalmenu")
//   document.querySelector("body").classList.add("main-body", "leftmenu")

//   // useEffect(() => {
//   //   if (location.pathname === "/") {
//   //     navigate("/admin/master-forms/");
//   //   }
//   // }, [location.pathname]);

//   return (
//     <Fragment >
//       <div className="horizontalMenucontainer">
//         <Switcher />
//         <div className="page">
//           <Header />
//           <Sidebar sidebarItems={MASTERFORMMENU} />
//           <div className="main-content mt-5 pt-0 side-content">
//             <div className="main-container container-fluid pt-3">
//               <div className="inner-body" >
//                 <Outlet />
//               </div>
//             </div>
//           </div>
//           {/* <Rightside /> */}
//         </div>
//         <Backtotop1 />
//       </div>
//     </Fragment>
//   );
// };
// export default App;