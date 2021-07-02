import React from "react";
import Download, { DownloadType } from "components/Download";
import logo from "assets/image/logo.svg";
import title from "assets/image/title.svg";
import clsx from "clsx";
import styles from "./index.module.styl";
import Background from "components/Background";

export default () => {
  return (
    <div className={styles.container}>
      <Background />
      <div className={clsx(styles["header-bar"], "animate-start")}>
        <img src={logo} className={styles.logo} draggable="false" />
      </div>
      <div className={clsx(styles["banner-container"], "animate-start")}>
        <div className={clsx(styles.banner, "animate-shake")} />
      </div>
      <div className={clsx(styles["title-container"], "animate-start")}>
        <img src={title} className={styles.title} draggable="false" />
        <div className={clsx(styles["btn-container"])}>
          <Download btnType={DownloadType.android} />
          <Download btnType={DownloadType.appStore} />
        </div>
      </div>
    </div>
  );
};
