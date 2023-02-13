import { getBrowser, versionCheck } from '../lib/index.js'

console.log(getBrowser('Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'.toLowerCase()))
console.log(getBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15'.toLowerCase()))
console.log(getBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3676.400 QQBrowser/10.5.3738.400'.toLowerCase()))
console.log(getBrowser('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36'.toLowerCase()))
console.log(getBrowser('Mozilla/5.0 (Linux; Android 10; MAR-AL00 Build/HUAWEIMAR-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 HuaweiBrowser/10.0.1.336 Mobile Safari/537.36'.toLowerCase()))

versionCheck([
  {
    browser: 'chrome',
    minVersion: '88.0.0',
  },
], () => {
  console.log('浏览器版本太低了！！！')
})
