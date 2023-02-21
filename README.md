# browser-version

浏览器版本工具

## 使用

### 使用CDN直接导入

```html
<script src="//cdn.jsdelivr.net/npm/@mario34/browser-version/lib/index.iife.js"></script>
<script>
M34BV.versionCheck([
  {
    browser: 'Chrome',
    minVersion: '88.0.0',
  },
  {
    browser: 'IE',
    minVersion: '12',
  },
], function (){
  console.log('浏览器版本太低了！！！')
})
</script>
```

### 通过NPM导入

```js
import { versionCheck } from '@mario34/browser-version'

versionCheck([
  {
    browser: 'Chrome',
    minVersion: '88.0.0',
  },
  {
    browser: 'IE',
    minVersion: '12',
  },
], () => {
  console.log('浏览器版本太低了！！！')
})
```

## 选项说明

- browser: 浏览器，可选值 `IE`, `Edge`, `Firefox`, `Chrome`, `Opera`, `Safari`
- minVersion: 版本号格式 `*.*.*`

## 部分Chromium内核浏览器UA

- 360极速浏览器12.2.1662.0： `Mozilla/5.0 (Macintosh; Intel Mac OS X -1_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36`
- 2345浏览器： `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3947.100 Safari/537.36`
- QQBrowser 10.5.3738.400： `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3676.400 QQBrowser/10.5.3738.400`
- QQBrowser 4.5.123.400： `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36 QQBrowser/4.5.123.400`
