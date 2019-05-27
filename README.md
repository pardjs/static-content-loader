# Static content loader

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.com/pardjs/static-content-loader.svg?branch=master)](https://travis-ci.com/pardjs/static-content-loader)
[![Coverage Status](https://coveralls.io/repos/github/pardjs/static-content-loader/badge.svg?branch=master)](https://coveralls.io/github/pardjs/static-content-loader?branch=master)

Load static content (.json/.md) from remote and cache in local memory. 

---

## Usage
```js
const staticLoader = new StaticContentLodader('https://raw.githubusercontent.com/ole3021/blogs/master/blogs', {
  indexFileName: 'customIndex.json',
  timeout: 4000
})

const indexContent = staticLoader.fetchIndex()

const content = staticLoader.fetchContent('/Knowledge/Pomodoro.md')
```
---

### Maintain
```shell
yarn commit # replace `git commit` with help utils
yarn test:watch # run test in watch mode locally
```