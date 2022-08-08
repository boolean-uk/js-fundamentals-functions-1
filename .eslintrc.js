module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
}
