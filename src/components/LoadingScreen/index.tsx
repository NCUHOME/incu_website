import { FunctionComponent } from "preact";
import rolling from "assets/image/Rolling.svgo.svg";
import "./index.styl";

const tips = [
  "正在发呆中...",
  "正在等待 App Store 审核",
  "正在等待 iOS 编译",
  "正在删库跑路",
  "正在等待期末结果",
  "正在学校里找共享单车",
  "正在返校的路上",
  "正在信工楼找上课教室",
];

const LoadingScreen: FunctionComponent = () => {
  return (
    <div className="loading-container">
      <img src={rolling} />
      <span>{tips[Math.floor(Math.random() * tips.length)]}</span>
    </div>
  );
};

export default LoadingScreen;
