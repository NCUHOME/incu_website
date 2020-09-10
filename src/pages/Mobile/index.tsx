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
          />
          <Download
            btnType={DownloadType.appStore}
            size={SizeType.large}
          />
        </div>
      </div>
    </div>
  )
}
