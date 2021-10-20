module.exports = {
  '*.{js,jsx,ts,tsx,vue}': [
    'stylelint',
    'prettier --write',
    'eslint --fix',
    'jest --bail --findRelatedTests',
    'git add',
  ],
  // 'src/**/*.scss': ['stylelint --syntax scss --fix', 'git add'],
};
