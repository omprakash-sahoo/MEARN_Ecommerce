import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes.jsx";
import Login from "./views/auth/Login.jsx";

function App() {
  const [allRoutes] = useState([...publicRoutes]);
  return <Router allRoutes={allRoutes} />;
}

export default App;
