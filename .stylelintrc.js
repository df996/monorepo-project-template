module.exports = {
  // 是否根目录
  'root': true,
  // 拓展
  'extends': [
    // eslint 配置
    'stylelint-config-standard',
    // scss 配置
    'stylelint-config-standard-scss',
    // vue scss 推荐配置
    'stylelint-config-recommended-vue/scss',
    // 属性顺序规则
    'stylelint-config-rational-order'
  ],
  // 插件
  'plugins': ['stylelint-scss', 'stylelint-order'],
  // 覆盖配置
  'overrides': [
    {
      // 文件匹配模式
      'files': ['**/*.{vue,html}']
    }
  ],
  // 规则配置
  'rules': {
    // 禁用源文件末尾换行检查
    'no-missing-end-of-source-newline': null,
    // 最大嵌套深度
    'max-nesting-depth': 3,
    // 选择器最大组合选择器数量
    'selector-max-compound-selectors': 3,
    // 禁用未知@规则检查
    'at-rule-no-unknown': null,
    // scss 特殊@规则检查
    'scss/at-rule-no-unknown': [
      true,
      {
        // 忽略tailwind指令
        'ignoreAtRules': ['tailwind']
      }
    ]
  }
}
