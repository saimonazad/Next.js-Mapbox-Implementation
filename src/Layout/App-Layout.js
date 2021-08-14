import React, { Fragment } from "react";
//import component
import Navbar from "./Navbar";
import Header from "./Header";

//main func
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">{children}</div>
          {/* /End replace */}
        </div>
      </main>
    </Fragment>
  );
};

export default Layout;
