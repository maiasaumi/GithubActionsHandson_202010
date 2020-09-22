module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'rules': {
    "semi": ["error"]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
