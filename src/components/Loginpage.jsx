import React from "react";
import Login from "./Login";
import Footer from "./Footer";

const Loginpage = (props) => {
  return (
    <>
      <Login setShow={props.setShow} />
      <Footer />
    </>
  );
};

export default Loginpage;
