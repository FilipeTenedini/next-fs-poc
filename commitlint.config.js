module.exports = {
  rules: {
    'type-enum': [2, 'always', ['fix', 'types', 'feat', 'lint', 'refact', 'chore', 'test']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100]
  }
};