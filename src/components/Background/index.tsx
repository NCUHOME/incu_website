import React from "react";
import styles from "./index.module.styl";
import { useWindowSize } from "react-use";
import clsx from "clsx";

const randomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function Background() {
  const { width, height } = useWindowSize();
  return (
    <div className={clsx(styles.stars, "animate-start")}>
      {Array.from({ length: 45 }).map((_item, i) => (
        <div
          className={styles.star}
          key={i}
          style={{
            top: randomNumber(width * 0.3, -height * 2),
            left: randomNumber(width * 1.3, 40),
            animationDelay: `-${i % 6 == 0 ? 0 : i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Background;
