# Swagger


## Setting


### babel

```bash
npm install -D @babel/core @babel/cli @babel/node @babel/preset-env
```

### Swagger

```
npm i -D swagger-jsdoc swagger-ui-express
```

### nodemon
- nodemon.json

```json
npm i -D nodemon rimraf express
```

```json
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules",
    "dist"
  ],
  "verbose": true,
  "execMap": {
    "js": "node"
  },
  "runOnChangeOnly": false,
  "watch": [
    "src/**/*.js",
    "src/**/*.graphql",
    "src/**/*.gql"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,graphql"
}
```


## scripts

```json
{
  "scripts": {
    "dev": "nodemon --exec npm run restart",
    "restart": "rimraf dist && npm run build && npm run start",
    "build": "babel src --out-dir dist --source-maps inline --copy-files",
    "start": "node dist/app.js"
  },
}
```



## 참고 문헌

- [프론트엔드 개발환경의 이해: Babel](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)
- [node.js 에서 import 구문 사용하기](https://medium.com/@moony211/node-js-%EC%97%90%EC%84%9C-import-%EA%B5%AC%EB%AC%B8-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-77547b079136)
- [하나의 바이너리 파일 만들기](https://blog.outsider.ne.kr/1379)