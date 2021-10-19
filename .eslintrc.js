module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'jest/no-conditional-expect': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
