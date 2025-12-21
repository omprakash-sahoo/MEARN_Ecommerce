import React from "react";
import { useRoutes } from "react-router";

const Router = ({ allRoutes }) => {
  const routes = useRoutes([...allRoutes]);
  return routes;
};

export default Router;
