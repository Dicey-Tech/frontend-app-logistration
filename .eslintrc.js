const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('eslint', {
  rules: {
    // Temporarily update the 'indent', 'template-curly-spacing' and
    // 'no-multiple-empty-lines' rules since they are causing eslint
    // to fail for no apparent reason since upgrading 
    // @edx/frontend-build from v3 to v5:
    // - TypeError: Cannot read property 'range' of null
    'indent': [
      'error',
      2,
      { 'ignoredNodes': ['TemplateLiteral', 'SwitchCase'] }
    ],
    'template-curly-spacing': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'htmlFor',
      depth: 25
    }],
    'import/no-extraneous-dependencies': "off"
  },
});
