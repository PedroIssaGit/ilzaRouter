module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["google"],
  parserOptions: {
    "sourceType": "module",
    ecmaVersion: 12
  },
  rules: {
    "max-len": [1, {"code": 80, "ignoreUrls": true, "ignoreComments": true, "ignoreRegExpLiterals": true, "ignoreStrings": true, ignorePattern: 'require' }],
    "no-restricted-globals": ["error", "event", "fdescribe", "err", "evt", "elm", "element", "list",  "data",  "req", "res", "request", "response"],
    "no-implicit-globals": 2,
    "no-implied-eval": "error",
    "no-eval": "error",
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: false,
        MethodDefinition: false,
        ClassDeclaration: false,
     }
    }],
    "prefer-rest-params": "off"
  }

};
