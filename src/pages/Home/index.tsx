import Splash from "components/Splash";
import Footer from "components/Footer";
import Tips from "components/Tips";

export default () => {
  document.title = "南大家园 ｜ 你的校园生活轨迹";

  return (
    <div>
      <Tips/> 
      <Splash />
      <Footer />
    </div>
  );
};
