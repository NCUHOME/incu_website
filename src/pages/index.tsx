import React from 'react'
import { Redirect } from '@reach/router'

export default () => {
  function isMobile() {
    const userAgentInfo = navigator.userAgent
    const agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"]

    return agents.some((item) => userAgentInfo.indexOf(item) > 0)
  }

  return isMobile() ? <Redirect to={'./Mobile'}/> : <Redirect to={'./PC'}/>
};
