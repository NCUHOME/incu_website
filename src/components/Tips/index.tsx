import React from "react";
import styles from "./index.module.styl";
import { isAlipay, isDingTalk, isWeChat, isWeCom } from 'check-platform'
import { UA } from 'check-platform/es/Platform'

const isQQ = Boolean(UA) && UA.indexOf('qq') > 0;

export default () => {
  if (isAlipay || isDingTalk || isWeChat || isWeCom || isQQ) {
    return <div className={styles.container}>若无法自动跳转<br></br>请在浏览器打开本页面 ⬆️</div>;
  }
  return null
};
