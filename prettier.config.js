module.exports = {
  printWidth: 160, // 单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  useTabs: false, // 是否使用缩进符
  semi: false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  bracketSpacing: true, // 是否在对象属性添加空格
  trailingComma: 'none', // 去除对象最末尾元素跟随的逗号
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  proseWrap: 'always', // 当超出print width（上面有这个参数）时就折行
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf' // 换行符使用 lf
}
