import React from 'react'
import Download, { DownloadType } from 'components/Download'
import header from 'assets/image/header.png'
import logo from 'assets/image/logo.svg'
import title from 'assets/image/title.svg'
import './index.styl'

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <div className="header-bar">
        <img src={logo} className="logo" draggable="false" />
      </div>
      <div className="banner-contianer">
        <img src={header} className="banner" draggable="false" />
      </div>
      <div className="title-container">
        <img src={title} className="title" draggable="false" />
        <div className="btn-container">
          <Download
            btnType={DownloadType.android}
            url={"https://incu-download.ncuos.com/iNCU_latest.apk"}
          />
          <Download
            btnType={DownloadType.appStore}
            url={"https://itunes.apple.com/us/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561?mt=8"}
          />
        </div>
      </div>
    </div>
  )
}
