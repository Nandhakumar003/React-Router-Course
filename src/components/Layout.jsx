import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="container-flex">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
