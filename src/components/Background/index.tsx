import React from "react";
import styles from "./index.module.styl";

const randomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function Background() {
  const { width, height } = { width: innerWidth, height: innerHeight};
  return (
    <div className={`${styles.stars} animate-start`}>
      {Array.from({ length: 30 }).map((_item, i) => (
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
