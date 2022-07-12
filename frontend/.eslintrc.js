module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@/*', './src/*']],
        extensions: ['.js', '.json'],
      },
    },
  },
};