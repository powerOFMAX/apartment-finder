module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/extensions": "off",
    "object-curly-newline": "off",
    "import/prefer-default-export": "off",
    "semi": ["error", "never"],
    "react/jsx-filename-extension": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "react/require-default-props": "off",
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": "off",
    "react/forbid-prop-types": "off",
    "jsx-a11y/label-has-for": "off",
    "max-len": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-case-declarations": "off",
    "eqeqeq": "off",
    "no-param-reassign": 0
  },
};
