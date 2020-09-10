import React from 'react'
import Download, { DownloadType } from 'components/Download'
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
        <div className="banner" />
      </div>
      <div className="title-container">
        <img src={title} className="title" draggable="false" />
        <div className="btn-container">
          <Download btnType={DownloadType.android} />
          <Download btnType={DownloadType.appStore} />
        </div>
      </div>
    </div>
  )
}
