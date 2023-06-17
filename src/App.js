import React, { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
import DepartmentForm from "pages/masterForms/Department";
import DesignationForm from "pages/masterForms/Designation";
import UserForm from "pages/masterForms/User";
import ProfilePage from "pages/userProfile";
import ForgotPassword from "pages/admin/ForgotPassword";
import { MENUITEMS, woMenuItems } from "constants/sidebarItems";
import CpgcAddPage from "pages/cpgc/addCpgc";
import LPAddPage from "pages/logisticPartner/addUser";
import WarehouseAddPage from "pages/Warehouse/AddUser";
import CpgcManage from "pages/cpgc/Manage";
import LogisticManage from "pages/logisticPartner/Manage";
import WarehouseManage from "pages/Warehouse/Manage";
import CpgcDetailPage from "pages/cpgc/Manage/DetailsPage";
import CpgcRequestDetailPage from "pages/cpgc/Requests/DetailsPage";
import LogisticDetailPage from "pages/logisticPartner/Manage/DetailsPage";
import WarehouseDetailPage from "pages/Warehouse/Manage/DetailsPage";
import CpgcRequest from "pages/cpgc/Requests";
const Layout = React.lazy(() => import("./customComponents/Layout"));
const MasterLayout = React.lazy(() => import("./customComponents/MasterLayout"));
const LoginPage = React.lazy(() => import("./pages/admin/Login"));
const RegistrationPage = React.lazy(() => import("./pages/admin/Registration"));
const CountryForm = React.lazy(() => import("pages/masterForms/Country"));
const StateForm = React.lazy(() => import("pages/masterForms/State"));
const CityForm = React.lazy(() => import("pages/masterForms/City"));
const CountryAddForm = React.lazy(() => import("pages/masterForms/Country/add"));
const CityAddForm = React.lazy(() => import("pages/masterForms/City/add"));
const StateAddForm = React.lazy(() => import("pages/masterForms/State/add"));
const DepartmentAddForm = React.lazy(() => import("pages/masterForms/Department/add"));
const DesignationAddForm = React.lazy(() => import("pages/masterForms/Designation/add"));
const UserAddForm = React.lazy(() => import("pages/masterForms/User/add"));
const DashboardPage = React.lazy(() => import("pages/Dashboard"));
const MaterialTypeForm = React.lazy(() => import("pages/masterForms/MaterialType"));
const MaterialAddForm = React.lazy(() => import("pages/masterForms/MaterialType/add"));
const MMRequestForm = React.lazy(() => import("pages/materialmovement/newrequest"))


const user = {
  name: 'Someone',
  role: 'cpgc'
};

const App = () => {
  let router;

  switch (user.role) {
    case 'cpgc':
      router = createBrowserRouter([
        {
          path: "/",
          element: <Layout menuItems={MENUITEMS} />,
          errorElement: <h1>Error</h1>,
          children: [
            {
              path: "/dashboard",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/dashboard",
                  element: <DashboardPage />,
                },
              ]
            },
            {
              path: "/settings",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/settings/profile/edit-profile",
                  element: <ProfilePage />
                },
              ]
            },
            {
              path: "/master-forms",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/master-forms/country/add",
                  element: <CountryAddForm />,
                },
                {
                  path: "/master-forms/country",
                  element: <CountryForm />,
                },
                {
                  path: "/master-forms/state/add",
                  element: <StateAddForm />
                },
                {
                  path: "/master-forms/state",
                  element: <StateForm />
                },
                {
                  path: "/master-forms/city/add",
                  element: <CityAddForm />
                },
                {
                  path: "/master-forms/city",
                  element: <CityForm />
                },
                {
                  path: "/master-forms/material/add",
                  element: <MaterialAddForm />,
                },
                {
                  path: "/master-forms/material",
                  element: <MaterialTypeForm />,
                },
                {
                  path: "/master-forms/material-movement/new",
                  element: <MMRequestForm />,
                },
                {
                  path: "/master-forms/department/add",
                  element: <DepartmentAddForm />
                },
                {
                  path: "/master-forms/department",
                  element: <DepartmentForm />
                },
                {
                  path: "/master-forms/designation/add",
                  element: <DesignationAddForm />
                },
                {
                  path: "/master-forms/designation",
                  element: <DesignationForm />
                },
                {
                  path: "/master-forms/user/add",
                  element: <UserAddForm />
                },
                {
                  path: "/master-forms/user",
                  element: <UserForm />
                },
                {
                  path: "*",
                  element: <h1>In maintanance</h1>
                },
              ]
            },
            {
              path: "/material-movement",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/material-movement/new",
                  element: <MMRequestForm />,
                },]
              },
            {
              path: "/cpgc",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/cpgc/add",
                  element: <CpgcAddPage />
                },
                {
                  path:"/cpgc/manage",
                  element: <CpgcManage />
                },
                {
                  path: "/cpgc/details",
                  element: <CpgcDetailPage />
                },
                {
                  path: "/cpgc/requests",
                  element: <CpgcRequest />
                },
                {
                  path: "/cpgc/requests/details",
                  element: <CpgcRequestDetailPage />
                }
              ] 
            },
            {
              path: "/logistics",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/logistics/add",
                  element: <LPAddPage />
                },
                {
                  path: "/logistics/manage",
                  element: <LogisticManage />
                },
                {
                  path: "/logistics/details",
                  element: <LogisticDetailPage />
                }
              ] 
            },
            {
              path: "/warehouse",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/warehouse/add",
                  element: <WarehouseAddPage />
                },
                {
                  path: "/warehouse/manage",
                  element: <WarehouseManage />
                },
                {
                  path: "/warehouse/details",
                  element: <WarehouseDetailPage />
                }
              ] 
            },
            {
              path: "*",
              element: <h1>In maintanance</h1>
            }
          ],
        },
        {
          path: "/admin/login",
          element: <LoginPage />,
          errorElement: <p>Error has occured</p>,
        },
        {
          path: "/admin/signup",
          element: <RegistrationPage />,
          errorElement: <p>Error has occured</p>,
        },
        {
          path: "/admin/forgot-password",
          element: <ForgotPassword />,
          errorElement: <p>Error has occured</p>
        }
      ]);
      break;
    case 'wo':
      router = createBrowserRouter([
        {
          path: "/",
          element: <Layout menuItems={woMenuItems} />,
          errorElement: <h1>Error</h1>,
          children: [
            {
              path: "/dashboard",
              element: <h1>Home page</h1>,
            },
            {
              path: "/master-forms",
              errorElement: <p>Error has occured</p>,
              children: [
                {
                  path: "/master-forms/country",
                  element: <CountryForm />,
                },
                {
                  path: "/master-forms/state",
                  element: <StateForm />
                },
                {
                  path: "/master-forms/city",
                  element: <CityForm />
                },
                {
                  path: "/master-forms/department",
                  element: <DepartmentForm />
                },
                {
                  path: "/master-forms/designation",
                  element: <DesignationForm />
                },
                {
                  path: "/master-forms/user",
                  element: <UserForm />
                },
                {
                  path: "*",
                  element: <h1>In maintanance</h1>
                },
              ]
            },
            {
              path: "*",
              element: <h1>In maintanance</h1>
            }
          ],
        },
      ]);
      break;
    default:
      router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          errorElement: <h1>Error</h1>,
          children: [
            {
              path: "/dashboard",
              element: <h1>Home page</h1>,
            },
          ]
        }
      ]);
  }

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App; 
