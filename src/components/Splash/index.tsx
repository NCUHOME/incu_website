import React, { useEffect, useState } from "react";
import Download, { DownloadType } from "components/Download";
import logo from "assets/image/logo.svg";
import title from "assets/image/title.svg";
import clsx from "clsx";
import styles from "./index.module.styl";
import Background from "components/Background";
import { IOS_DOWNLOAD_URL } from "utils/constants";

export default () => {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("https://plot.ncuos.com/api/update")
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.download);
      });
  }, []);

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
          <Download btnType={DownloadType.android} url={url} />
          <Download btnType={DownloadType.appStore} url={IOS_DOWNLOAD_URL} />
        </div>
      </div>
    </div>
  );
};
