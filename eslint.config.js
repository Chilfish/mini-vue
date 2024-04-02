import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'vue/no-multiple-template-root': 'off',
    'node/prefer-global/process': 'off',
    'antfu/no-import-dist': 'off',
    'unused-imports/no-unused-vars': 'off',
    'ts/no-this-alias': 'off',
  },
})
