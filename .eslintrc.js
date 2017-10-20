module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "plugins": [
    "flowtype",
    "react",
    "prettier",
    "react-native"
  ],
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "comma-dangle": 0,
    "consistent-return": 1,
    "global-require": 0,
    "import/extensions": [2, "never"],
    "import/no-extraneous-dependencies": ["error", {"packageDir": './'}],
    "import/no-unresolved": [2, { ignore: ['@'] }],
    "import/prefer-default-export": "off",
    "no-case-declarations": 1,
    "no-confusing-arrow": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "no-return-assign": 1,
    "no-shadow": 1,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "padded-blocks": 0,
    "quote-props": 1,
    "quotes": ["error", "single"],
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 1,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": 1,
    "react/no-multi-comp": 1,
    "react/prefer-stateless-function": 1,
  },
  "settings": {
    "import/resolver": {
      "reactnative": {},
    },
  },
};
