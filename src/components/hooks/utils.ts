/**
 * 判断是不是微信浏览器
 * @returns {boolean}
 */
function isWechat() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i)[0] === "micromessenger"
}
