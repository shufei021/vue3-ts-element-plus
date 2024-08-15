module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended', // 新增
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended', // 新增
        'plugin:prettier/recommended' // 解决ESlint和Prettier冲突
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: 'vue-eslint-parser',
    parserOptions: { parser: '@typescript-eslint/parser', ecmaFeatures: { jsx: true } },
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off'
    }
}
