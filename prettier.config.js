module.exports = {
  // 超过最大值换行
  printWidth: 100,
  // 缩进字节数
  tabWidth: 2,
  // 缩进不使用tab，使用空格
  useTabs: false,
  // 句尾不添加分号
  semi: false,
  vueIndentScriptAndStyle: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象属性中加引号的规则，as-needed只在需要的时候给对象属性加引号
  quoteProps: 'as-needed',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  trailingComma: 'es5',
  // 在jsx中把'>'是否单独放一行
  jsxBracketSameLine: false,
  // 在jsx中使用单引号代替双引号
  jsxSingleQuote: false,
  // 箭头函数的参数加入括号
  arrowParens: 'always',
  // 是否在文件顶部插入一个format注释
  insertPragma: false,
  // 文件顶部是否需要注释说明文件
  requirePragma: false,
  // 指定文件折行方式
  proseWrap: 'never',
  // 指定html文件空格的敏感性，strict空格敏感
  htmlWhitespaceSensitivity: 'strict',
  // 行尾换行样式
  endOfLine: 'auto',
  // 指定文件需要代码格式化的范围
  rangeStart: 0,
}
