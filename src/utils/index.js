/**
 * 获取命令行参数
 * @param key
 */
// eslint-disable-next-line no-unused-vars
function getExecParam(param) {
  if (!process.env.npm_config_argv) {
    return ''
  }
  const configArgv = JSON.parse(process.env.npm_config_argv)
  // console.log('configArgv : ' + JSON.stringify(configArgv))
  const original = configArgv.original.slice(1)
  // console.log('original : ' + JSON.stringify(original))
  function getValue(array, key) {
    const tempObj = {}
    for (let i = 0; i < array.length; i++) {
      if (array[i].indexOf('=') !== -1) {
        const tempArray = array[i].split('=')
        if (tempArray.length === 2) {
          if (tempArray[0].trim()) {
            const key2 = tempArray[0].replace(/-/g, '')
            if (key2.trim()) {
              tempObj[key2.trim()] = tempArray[1]
            }
          }
        }
      }
    }
    return tempObj[key]
  }
  const paramValue = getValue(original, param)
  return paramValue
}
