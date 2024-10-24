import eslintConfigPrettier from 'eslint-config-prettier'
import config from 'eslint-config-standard'

export default [...[].concat(config), eslintConfigPrettier]
