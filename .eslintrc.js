module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.js'],
  plugins: ['react', 'prettier', 'import', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error'],
    eqeqeq: ['error', 'smart'],
    'func-names': 'error',
    'global-require': 'off',
    'max-classes-per-file': 'off',
    'prefer-destructuring': 'error',
    'class-methods-use-this': 'off',
    'no-console': 'warn',
    'no-restricted-globals': 'warn',
    'no-restricted-syntax': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-underscore-dangle': 'off',
    'no-async-promise-executor': 'warn',
    'no-unused-vars': 'error',
    'object-shorthand': ["error", "always"],

    'react/destructuring-assignment': ['off', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.js', '.jsx'] }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': 'off',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-boolean-value': 'off',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',

    'sort-imports': 'off',
    "simple-import-sort/imports": "error",
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    'import/parsers': {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
    },
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", "tsx"]
      },
      typescript: {
        "alwaysTryTypes": true,
      },
    },
  },
};