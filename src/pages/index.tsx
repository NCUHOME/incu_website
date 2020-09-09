import React from 'react'
import PC from './PC'
import Mobile from './Mobile'

export default () => {
  function isMobile() {
    let userAgentInfo = ''
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      userAgentInfo = navigator.userAgent
    }
    const agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"]

    return agents.some((item) => userAgentInfo.indexOf(item) > 0)
  }

  return (
    <>
      {isMobile() ? <Mobile /> : <PC />}
    </>
  )
};
