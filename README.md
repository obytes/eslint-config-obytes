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

## Using VSCode

- Install VSCode [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Setup some VS Code settings (Workspace)

```js
{
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// if you are using prettier vscode extension
"prettier.disableLanguages": [
  "js"
],
}
```
