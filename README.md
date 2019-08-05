# eslint-config-obytes

## installation

Install the package with

`npm install eslint-config-obytes --save-dev`

or

`yarn add eslint-config-obytes -D`

## Eslint Setup

Now add the config to either the package.json:

```js
{
  "eslintConfig": {
    "extends": "obytes"
  }
}
```

or to the .eslintrc or .eslintrc.js:

```js
{
  "extends": "obytes"
}
```

> Make sure to remove the `.prettierrc` file since we're handling prettier inside the eslint config.

## Using VSCode

- Install VSCode [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Setup some VS Code settings (Workspace)

```js
{
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "prettier.disableLanguages": ["javascript", "javascriptreact"]
}
```
