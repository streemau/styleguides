const config = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',

    'class-methods-use-this': 'off',

    // allow paren-less arrow functions
    'arrow-parens': 0,
    'one-var': 0,

    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    'semi': [2, 'always'],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};

const mergeConfig = (cfg = {}) => {
  return Object.assign({}, config, cfg);
};

module.exports = mergeConfig;
