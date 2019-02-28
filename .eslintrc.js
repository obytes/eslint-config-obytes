module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["jest", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    "jest/globals": true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    "shared-node-browser": true
  },

  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        bracketSpacing: false,
        jsxBracketSameLine: true
      }
    ],
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-case-declarations": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/no-danger": 0,
    "react/prop-types": 0
  }
};
