import React from 'react'
import appStore from 'assets/image/app-store.svgo.svg'
import android from 'assets/image/android.svgo.svg'
import ga from 'ga-lite'
import styles from './index.module.styl'

export enum DownloadType {
  android = 'android',
  appStore = 'appStore'
}

interface Props {
  btnType: DownloadType
  url?: string
}

const Download: React.FC<Props> = ({ btnType, url }) => {
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
      href={url}
      onClick={() => sendEvent()}
    >
      <img src={image} />
    </a>
  )
}

export default Download
