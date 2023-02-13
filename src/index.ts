interface SysType {
  ie?: string
  edge?: string
  firefox?: string
  chrome?: string
  opera?: string
  safari?: string
}

export function getBrowser(ua = navigator.userAgent.toLowerCase()) {
  var sys: SysType = {}
  var s
  if (s = ua.match(/edge\/([\d.]+)/)) {
    sys.edge = s[1]
  } else if (s = ua.match(/rv:([\d.]+)\) like gecko/)) {
    sys.ie = s[1]
  } else if (s = ua.match(/msie ([\d.]+)/)) {
    sys.ie = s[1]
  } else if (s = ua.match(/firefox\/([\d.]+)/)) {
    sys.firefox = s[1]
  } else if (s = ua.match(/chrome\/([\d.]+)/)) {
    sys.chrome = s[1]
  } else if (s = ua.match(/opera.([\d.]+)/)) {
    sys.opera = s[1]
  } else if (s = ua.match(/version\/([\d.]+).*safari/)) {
    sys.safari = s[1]
  }
  if (sys.edge) return { browser: 'Edge', version: sys.edge }
  if (sys.ie) return { browser: 'IE', version: sys.ie }
  if (sys.firefox) return { browser: 'Firefox', version: sys.firefox }
  if (sys.chrome) return { browser: 'Chrome', version: sys.chrome }
  if (sys.opera) return { browser: 'Opera', version: sys.opera }
  if (sys.safari) return { browser: 'Safari', version: sys.safari }
  return { browser: '', version: '0' }
}

function versionToNumber(version: string, length: number, exponent: number) {
  if (arguments.length < 3) {
    return 0
  }
  const versions = version.split('.')
  let result = 0
  versions.forEach((value) => {
    result += Number(value) * 10 ** (length * exponent - 1)
    length--
  })
  return result
}

function versionCompare(version: string, targetVersion: string, exponent = 2) {
  if (!version || !targetVersion) {
    throw new Error('Need two versions to compare!')
  }
  if (version === targetVersion) {
    return 0
  }
  const length = Math.max(version.split('.').length, targetVersion.split('.').length)
  const versionNum = versionToNumber(version, length, exponent)
  const targetVersionNum = versionToNumber(targetVersion, length, exponent)
  if (versionNum > targetVersionNum) {
    return 1
  }
  if (versionNum === targetVersionNum) {
    return 0
  }
  return -1
}

interface ConfigItem {
  browser: string
  minVersion: string
}

export function versionCheck(config: ConfigItem[], onUnmatched?: () => void) {
  const browserInfo = getBrowser()
  config.some(item => {
    const unmatched = item.browser === browserInfo.browser
      && versionCompare(browserInfo.version, item.minVersion) < 0
    if (unmatched) {
      onUnmatched?.()
    }
    return unmatched
  })
}
