# browser-version

浏览器版本工具

## 使用

### 使用CDN直接导入

```html
<script src="//cdn.jsdelivr.net/npm/@mario34/browser-version/lib/index.iife.js"></script>
<script>
M34BV.versionCheck([
  {
    browser: 'chrome',
    minVersion: '88.0.0',
  },
], () => {
  console.log('浏览器版本太低了！！！')
})
</script>
```

### 通过NPM导入

```js
import { versionCheck } from '@mario34/browser-version'

versionCheck([
  {
    browser: 'chrome',
    minVersion: '88.0.0',
  },
], () => {
  console.log('浏览器版本太低了！！！')
})
```

## 选项说明

browser: 浏览器，可选值 `ie`, `edge`, `firefox`, `chrome`, `opera`, `safari`
minVersion: 版本号格式 `*.*.*`
