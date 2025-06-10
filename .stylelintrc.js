module.exports = {
  // 当前是否根目录
  'root': true,
  // 拓展配置
  'extends': ['alloy', 'alloy/vue', 'plugin:vue/vue3-recommended', 'prettier'],
  // 环境变量配置
  'env': {
    // 浏览器环境
    'browser': true
  },
  // 解析器选项
  'parserOptions': {
    // 源码类型
    'sourceType': 'module',
    // ECMAScript特性
    'ecmaFeatures': {
      // 是否启用JSX
      'jsx': true
    }
  },
  // 全局变量定义
  'globals': {},
  // 自定义规则
  'rules': {
    // Vue属性每行最大数量
    'vue/max-attributes-per-line': [
      0,
      {
        // 单行最大属性数
        'singleline': 5,
        // 多行配置
        'multiline': {
          // 多行最大属性数
          'max': 1
        }
      }
    ],
    // 最大嵌套回调数
    'max-nested-callbacks': [2, 6],
    // 函数最大参数数量
    'max-params': ['error', 6],
    // 圈复杂度限制
    'complexity': ['error', 40],
    // 禁止参数重新赋值
    'no-param-reassign': ['error', {
      // 是否检查属性赋值
      'props': false
    }],
    // 单行HTML元素内容换行规则
    'vue/singleline-html-element-content-newline': 'off',
    // 多行HTML元素内容换行规则
    'vue/multiline-html-element-content-newline': 'off',
    // Vue多单词组件名
    'vue/multi-word-component-names': 'off',
    // 禁止修改props
    'vue/no-mutating-props': 'off',
    // 允许使用v-html
    'vue/no-v-html': 'off',
    // 禁止无用的v-bind
    'vue/no-useless-v-bind': [
      'error',
      {
        // 是否忽略包含注释的绑定
        'ignoreIncludesComment': false,
        // 是否忽略字符串转义
        'ignoreStringEscape': true
      }
    ],
    // 禁止重复属性
    'vue/no-duplicate-attributes': [
      'error',
      {
        // 允许共存class
        'allowCoexistClass': true,
        // 允许共存style
        'allowCoexistStyle': true
      }
    ],
    // getter/setter成对规则
    'accessor-pairs': 2,
    // 箭头函数空格规则
    'arrow-spacing': [
      2,
      {
        // 箭头前空格
        'before': true,
        // 箭头后空格
        'after': true
      }
    ],
    // 块级元素空格规则
    'block-spacing': [2, 'always'],
    // 大括号风格
    'brace-style': [
      2,
      '1tbs',
      {
        // 允许单行
        'allowSingleLine': true
      }
    ],
    // 驼峰命名规则
    'camelcase': [
      0,
      {
        // 属性名规则
        'properties': 'always'
      }
    ],
    // 对象/数组尾逗号
    'comma-dangle': [2, 'never'],
    // 逗号空格规则
    'comma-spacing': [
      2,
      {
        // 逗号前无空格
        'before': false,
        // 逗号后有空格
        'after': true
      }
    ],
    // 逗号位置风格
    'comma-style': [2, 'last'],
    // 构造函数super调用
    'constructor-super': 2,
    // 强制大括号风格
    'curly': [2, 'multi-line'],
    // 点操作符位置
    'dot-location': [2, 'property'],
    // 文件末尾空行
    'eol-last': 2,
    // 相等比较规则
    'eqeqeq': ['error', 'always', {
      // null比较规则
      'null': 'ignore'
    }],
    // generator函数空格
    'generator-star-spacing': [
      2,
      {
        // function关键字前空格
        'before': true,
        // function关键字后空格
        'after': true
      }
    ],
    // 错误回调处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进规则
    'indent': [
      2,
      2,
      {
        // switch case缩进
        'SwitchCase': 1
      }
    ],
    // JSX引号风格
    'jsx-quotes': [2, 'prefer-single'],
    // 键值对空格
    'key-spacing': [
      2,
      {
        // 冒号前无空格
        'beforeColon': false,
        // 冒号后有空格
        'afterColon': true
      }
    ],
    // 关键字空格
    'keyword-spacing': [
      2,
      {
        // 关键字前空格
        'before': true,
        // 关键字后空格
        'after': true
      }
    ],
    // new操作符风格
    'new-cap': [
      2,
      {
        // new后首字母小写
        'newIsCap': false,
        // 大写开头需用new
        'capIsNew': false
      }
    ],
    // new操作符括号
    'new-parens': 2,
    // 禁止数组构造器
    'no-array-constructor': 2,
    // 禁止arguments.caller/callee
    'no-caller': 2,
    // 禁止console
    'no-console': 'warn',
    // 禁止类名重定义
    'no-class-assign': 2,
    // 禁止条件语句赋值
    'no-cond-assign': 2,
    // 禁止const重新赋值
    'no-const-assign': 2,
    // 允许控制字符
    'no-control-regex': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止函数重复参数
    'no-dupe-args': 2,
    // 禁止类成员重复
    'no-dupe-class-members': 2,
    // 禁止对象重复键
    'no-dupe-keys': 2,
    // 禁止case重复
    'no-duplicate-case': 2,
    // 禁止空字符类
    'no-empty-character-class': 2,
    // 禁止空解构
    'no-empty-pattern': 2,
    // 禁止eval
    'no-eval': 2,
    // 禁止catch异常重赋值
    'no-ex-assign': 2,
    // 禁止扩展原生对象
    'no-extend-native': 2,
    // 禁止不必要bind
    'no-extra-bind': 2,
    // 禁止不必要布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要括号
    'no-extra-parens': [2, 'functions'],
    // 禁止switch穿透
    'no-fallthrough': 2,
    // 禁止浮点小数
    'no-floating-decimal': 2,
    // 禁止函数重定义
    'no-func-assign': 2,
    // 禁止隐式eval
    'no-implied-eval': 2,
    // 禁止嵌套声明
    'no-inner-declarations': [2, 'functions'],
    // 禁止无效正则
    'no-invalid-regexp': 2,
    // 禁止不合法空白符
    'no-irregular-whitespace': 2,
    // 禁止__iterator__
    'no-iterator': 2,
    // 禁止标签名与变量名相同
    'no-label-var': 2,
    // 标签使用规则
    'no-labels': [
      2,
      {
        // 允许循环标签
        'allowLoop': false,
        // 允许switch标签
        'allowSwitch': false
      }
    ],
    // 禁止不必要块
    'no-lone-blocks': 2,
    // 禁止混用空格和制表符
    'no-mixed-spaces-and-tabs': 2,
    // 禁止多个空格
    'no-multi-spaces': 2,
    // 禁止多行字符串
    'no-multi-str': 2,
    // 禁止多行空行
    'no-multiple-empty-lines': [
      2,
      {
        // 最大空行数
        'max': 1
      }
    ],
    // 禁止覆盖原生对象
    'no-native-reassign': 2,
    // 禁止in操作符左侧取反
    'no-negated-in-lhs': 2,
    // 禁止Object构造器
    'no-new-object': 2,
    // 禁止new require
    'no-new-require': 2,
    // 禁止Symbol构造器
    'no-new-symbol': 2,
    // 禁止基本类型包装对象
    'no-new-wrappers': 2,
    // 禁止调用Math/JSON
    'no-obj-calls': 2,
    // 禁止八进制字面量
    'no-octal': 2,
    // 禁止八进制转义
    'no-octal-escape': 2,
    // 禁止路径拼接
    'no-path-concat': 2,
    // 禁止__proto__
    'no-proto': 2,
    // 禁止变量重声明
    'no-redeclare': 2,
    // 禁止正则表达式空格
    'no-regex-spaces': 2,
    // 禁止return中使用赋值
    'no-return-assign': [2, 'except-parens'],
    // 禁止自身赋值
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁止逗号操作符
    'no-sequences': 2,
    // 禁止保留字作变量名
    'no-shadow-restricted-names': 2,
    // 禁止函数名与括号间空格
    'no-spaced-func': 2,
    // 禁止稀疏数组
    'no-sparse-arrays': 2,
    // 禁止super前使用this
    'no-this-before-super': 2,
    // 禁止抛出字面量
    'no-throw-literal': 2,
    // 禁止行尾空格
    'no-trailing-spaces': 2,
    // 禁止未定义变量初始化
    'no-undef-init': 2,
    // 禁止意外多行
    'no-unexpected-multiline': 2,
    // 禁止未修改的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁止不必要的三元表达式
    'no-unneeded-ternary': [
      2,
      {
        // 默认赋值规则
        'defaultAssignment': false
      }
    ],
    // 禁止不可达代码
    'no-unreachable': 2,
    // 禁止finally中return
    'no-unsafe-finally': 2,
    // 禁止不必要call/apply
    'no-useless-call': 2,
    // 禁止不必要计算属性
    'no-useless-computed-key': 2,
    // 禁止不必要构造函数
    'no-useless-constructor': 2,
    // 允许转义字符
    'no-useless-escape': 0,
    // 禁止属性前空白符
    'no-whitespace-before-property': 2,
    // 禁用with语句
    'no-with': 2,
    // 变量声明规则
    'one-var': [
      2,
      {
        // 已初始化变量声明方式
        'initialized': 'never'
      }
    ],
    // 操作符换行规则
    'operator-linebreak': [
      2,
      'after',
      {
        // 三元操作符换行
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    // 块内填充规则
    'padded-blocks': [2, 'never'],
    // 引号风格
    'quotes': [
      2,
      'single',
      {
        // 避免转义
        'avoidEscape': true,
        // 允许模板字符串
        'allowTemplateLiterals': true
      }
    ],
    // 分号规则
    'semi': [2, 'never'],
    // 分号空格
    'semi-spacing': [
      2,
      {
        // 分号前无空格
        'before': false,
        // 分号后有空格
        'after': true
      }
    ],
    // 块前空格
    'space-before-blocks': [2, 'always'],
    // 函数括号前空格
    'space-before-function-paren': [2, 'never'],
    // 括号内空格
    'space-in-parens': [2, 'never'],
    // 中缀操作符空格
    'space-infix-ops': 2,
    // 一元操作符空格
    'space-unary-ops': [
      2,
      {
        // 单词类操作符空格
        'words': true,
        // 非单词类操作符空格
        'nonwords': false
      }
    ],
    // 注释空格
    'spaced-comment': [
      2,
      'always',
      {
        // 特殊标记
        'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    // 模板字符串空格
    'template-curly-spacing': [2, 'never'],
    // 使用isNaN
    'use-isnan': 2,
    // 有效typeof值
    'valid-typeof': 2,
    // 立即执行函数括号
    'wrap-iife': [2, 'any'],
    // yield*空格
    'yield-star-spacing': [2, 'both'],
    // 禁止yoda条件
    'yoda': [2, 'never'],
    // 优先使用const
    'prefer-const': 2,
    // 生产环境禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 对象花括号空格
    'object-curly-spacing': [
      2,
      'always',
      {
        // 对象内对象空格
        'objectsInObjects': false
      }
    ],
    // 数组括号空格
    'array-bracket-spacing': [2, 'never'],
    // Vue要求默认prop
    'vue/require-default-prop': 'off',
    // 禁用未定义变量检查
    'no-undef': 'off',
    // 禁用未使用变量检查
    'no-unused-vars': 'off',
    // Vue解析错误
    'vue/no-parsing-error': 'off',
    // Vue要求prop类型
    'vue/require-prop-types': 'off',
    // Vue未使用变量
    'vue/no-unused-vars': 'off',
    // Vue未使用组件
    'vue/no-unused-components': 'off',
    // Vue模板作用域覆盖
    'vue/no-template-shadow': 'off',
    // Vue属性简写
    'vue/prefer-true-attribute-shorthand': 'off',
    // for-in循环检查
    'guard-for-in': 'off',
    // 禁止模板字符串中的花括号
    'no-template-curly-in-string': 'off',
    // 禁止未使用表达式
    'no-unused-expressions': 'off'
  }
}
