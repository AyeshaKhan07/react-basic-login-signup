import React from "react";
import Header from "./Header";
const Layout = ({ title, description, children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
