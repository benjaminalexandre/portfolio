module.exports = {
  extends: ['airbnb', 'airbnb-base', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true
  },
  rules: {
    'react/no-typos': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': ['always', { ignoreClassFields: true }],
    'react/no-unescaped-entities': 'off',
    'lines-between-class-members': 'off',
    'react/no-array-index-key': 'off',
    'linebreak-style': 'off',
    'spaced-comment': 'off',
    'no-bitwise': 'off',
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'one-var': 'off'
  },
  settings: {
    'import/resolver': {
      alias: [
        ['utils', './src/app/utils/'],
        ['modules', './src/app/modules/'],
        ['lib', './src/app/lib/'],
        ['assets', './src/app/assets/'],
        ['app', './src/app/']
      ]
    }
  }
}
