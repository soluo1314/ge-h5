// 验证身份证号
export function validateIDCard(value) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(value)
}

// 验证手机号
export function validatePhone(value) {
  const reg = /^1[23456789]\d{9}$/
  return reg.test(value)
}

// 验证密码
export function validatePwd(value) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  return reg.test(value)
}

// 验证数字
export function validateDigits(value) {
  const reg = /^\d+$/
  return reg.test(value)
}

// 验证 用户只能包括中文、英文字母、数字和下划线或者空格
export function validateEmoij(value) {
  const reg = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+$')
  return reg.test(value)
}

// 获取字段字节、（中文、英文）
export function strLen(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++
    } else {
      len += 2
    }
  }
  return len
}
