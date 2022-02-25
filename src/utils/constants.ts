import arch from 'arch'

export const ANDROID_DOWNLOAD_URL = arch() === 'x64' ?
  'https://incu-download.ncuos.com/iNCU_latest.apk' :
  'https://incu-download.ncuos.com/iNCU_latest_arm32.apk'

export const IOS_DOWNLOAD_URL = 'https://apps.apple.com/cn/app/%E5%8D%97%E5%A4%A7%E5%AE%B6%E5%9B%AD/id1209726561'