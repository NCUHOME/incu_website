import { FunctionComponent } from 'preact'
import { useMemo, useCallback } from 'preact/hooks'
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

const Download: FunctionComponent<Props> = ({ btnType, url }) => {
  const image = useMemo(() => {
    const imageMap: any = {
      appStore,
      android
    }
    return imageMap[btnType]
  }, [btnType])

  const sendEvent = useCallback(() => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Download Button',
      eventAction: 'download',
      eventLabel: btnType
    })
    // NOTE: fallback for iOS
    if (btnType === DownloadType.appStore) {
      window.location.href = url
    }
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
