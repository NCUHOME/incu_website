import React from 'react'
import appStore from 'assets/image/app-store.svg'
import android from 'assets/image/android.svg'
import ga from 'ga-lite'
import { ANDROID_DOWNLOAD_URL, IOS_DOWNLOAD_URL } from 'utils/constants'
import styles from './index.module.styl'

export enum DownloadType {
  android = 'android',
  appStore = 'appStore'
}

interface Props {
  btnType: DownloadType
}

const Download: React.FC<Props> = ({ btnType }) => {
  const image = React.useMemo(() => {
    const imageMap: any = {
      appStore,
      android
    }
    return imageMap[btnType]
  }, [btnType])

  const sendEvent = React.useCallback(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Download Button',
      eventAction: 'download',
      eventLabel: btnType
    })
  }, [btnType])

  return (
    <a
      className={styles['download-container']}
      href={btnType === 'android' ? ANDROID_DOWNLOAD_URL : IOS_DOWNLOAD_URL}
      onClick={() => sendEvent()}
    >
      <img src={image} />
    </a>
  )
}

export default Download
