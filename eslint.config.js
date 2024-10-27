import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintConfigPrettier from 'eslint-config-prettier'
import config from 'eslint-config-standard'

export default [
  ...[].concat(config),
  eslintConfigPrettier,
  ...pluginQuery.configs['flat/recommended']
]
