import { lazy, Suspense } from "react";
import { Navigate } from "react-router";
import AdminLogin from "../../views/auth/AdminLogin";

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));

const publicRoutes = [
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default publicRoutes;
