import React from 'react'
import Download, { DownloadType, SizeType } from 'components/Download'
import header from 'assets/image/m-header.png'
import logo from 'assets/image/logo.svg'
import title from 'assets/image/title.svg'
import './index.styl'

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <div className="header-bar-m">
        <img src={logo} className="logo-m" draggable="false" />
      </div>
      <div className="banner-contianer-m">
        <img src={header} className="banner-m" draggable="false" />
      </div>
      <div className="title-container-m">
        <img src={title} className="title-m" draggable="false" />
        <div className="btn-container-m">
          <Download
            btnType={DownloadType.android}
            size={SizeType.large}
            url={"https://incu-download.ncuos.com/iNCU_latest.apk"}
          />
          <Download
            btnType={DownloadType.appStore}
            size={SizeType.large}
            url={"https://itunes.apple.com/us/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561?mt=8"}
          />
        </div>
      </div>
    </div>
  )
}
