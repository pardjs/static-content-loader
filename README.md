# Static content loader

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