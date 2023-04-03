import { useEffect, useState } from "preact/hooks";
import Download, { DownloadType } from "components/Download";
import logo from "assets/image/logo.svgo.svg";
import title from "assets/image/title.svgo.svg";
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
    <div className={styles.container} onContextMenu={e => e.preventDefault()}>
      <Background />
      <div className={`${styles["header-bar"]} animate-start`}>
        <img src={logo} className={styles.logo} draggable={false} />
      </div>
      <div className={`${styles["banner-container"]} animate-start`}>
        <div className={`${styles.banner} animate-shake`} />
      </div>
      <div className={`${styles["title-container"]} animate-start`}>
        <img src={title} className={styles.title} draggable={false} />
        <div className={styles["btn-container"]}>
          <Download btnType={DownloadType.android} url={url} />
          <Download btnType={DownloadType.appStore} url={IOS_DOWNLOAD_URL} />
        </div>
      </div>
    </div>
  );
};
