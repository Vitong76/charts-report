module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        'linebreak-style': ['off', 'windows'],
        'eol-last': 0,
        'max-len': 0,
        "x-invalid-end-tag": 0,
        'no-unused-vars': 0,
        'vue/no-unused-components': 0,
    },
};
