import React from 'react'
import appStore from 'assets/image/app-store.svg'
import android from 'assets/image/android.svg'
import './index.styl'

export enum DownloadType {
  android = 'android',
  appStore = 'appStore'
}

export enum SizeType {
  mid = 'mid',
  large = 'large'
}

interface Props {
  btnType: DownloadType
  size?: SizeType
  url: string
}

const Download: React.FC<Props> = ({ btnType, url, size = SizeType.mid }) => {

  const image = () => {
    const imageMap: any = {
      appStore,
      android
    }
    return imageMap[btnType]
  }

  return (
    <a className={size === 'large' ? "download-container-large" : "download-container-mid"} href={url}>
      <img src={image()} />
    </a>
  )
}

export default Download