const alfonz = require("eslint-config-alfonz");


module.exports = {
  ...alfonz,
  "env": {
    "browser": true,

    "es6": true,
    "node": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "tsconfig.json"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    ...alfonz.rules,
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "node/no-deprecated-api": [
      "warn",
      {
        "ignoreModuleItems": [
          "url.parse"
        ]
      }
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/camelcase": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "multiline-ternary": "off",
    "@typescript-eslint/naming-convention": "off"
  }
}
