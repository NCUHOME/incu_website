import React from "react";
import styles from "./index.module.styl";

/**
 * 判断是不是微信浏览器
 * @returns {boolean}
 */
export function isWechat(): boolean {
  const ua = navigator?.userAgent?.toLowerCase?.();
  return ua.match(/MicroMessenger/i)?.[0] === "micromessenger";
}

export default () => {
  if (!isWechat()) return null;

  return <div className={styles.container}>请在浏览器打开本页面 ⬆️</div>;
};
