import React from 'react'
import appStore from 'assets/image/app-store.svg'
import android from 'assets/image/android.svg'
import './index.styl'

export enum DownloadType {
  android = 'android',
  appStore = 'appStore'
}

interface Props {
  btnType: DownloadType
}

const Download: React.FC<Props> = ({ btnType }) => {
  const image = () => {
    const imageMap: any = {
      appStore,
      android
    }
    return imageMap[btnType]
  }

  return (
    <a
      className="download-container"
      href={
        btnType === 'android'
          ? 'https://incu-download.ncuos.com/iNCU_latest.apk'
          : 'https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561'
      }
    >
      <img src={image()} />
    </a>
  )
}

export default Download
