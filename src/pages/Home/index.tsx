import React from "react";
import Splash from "components/Splash";
import Footer from "components/Footer";
import Tips from "components/Tips";
import { useTitle } from "react-use";

export default () => {
  useTitle("南大家园 ｜ 你的校园生活轨迹");

  return (
    <div>
      <Tips/> 
      <Splash />
      <Footer />
    </div>
  );
};
