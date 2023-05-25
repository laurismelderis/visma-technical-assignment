module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  ignorePatterns: [
    'manifest.json',
    'package.json',
    'package-lock.json',
    'README.md',
    'src/**.scss'
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    semi: [2, 'never'],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
    "import/extensions": [
      "error", "ignorePackages", { ts: "never", tsx: "never"}
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error", { "allowExpressions": true }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ['**/*.test.jsx', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
}
