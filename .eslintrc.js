module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 關閉不使用表達式
    // 'no-unused-expressions': off,
    //  關閉禁止重新分配函數參數
    'no-param-reassign': 0,
    'no-return-assign': 0,
  },
};
