<div align="center">
    <img src="./src/assets/images/logo-vue.png"/>
    <h1>vue2-vant-template</h1>
</div>

## 项目简介
Vue2 Vant Template，基于Vue2 + Vue Router + Vuex + Vant等技术，实现的适配手机的开源免费模板，可用来快速开发H5应用。

## 特性
- Vue Cli4，初始化项目
- ESlint + Prettier，格式化和美化代码
- Git Hook，验证git代码提交，禁止提交未格式化的代码
- 支持多环境打包发布
- Viewport，vw自适应方案
- Vue，类似View，构建用户界面的渐进式框架
- Vue Router，Vue路由
- Vuex，Vue状态管理库
- Vuex Persistedstate，Vuex状态持久化
- Vant，移动端UI组件库
- Sass，Dark Sass
- moment，日期格式化
- easytimer，简单定时器
- store2，Better LocalStorage
- crypto-js，加解密
- axios，网络请求
- async-validator，异步验证表单请求
- accounting，金额格式化
- compression-webpack-plugin，打包Gizp压缩
- script-ext-html-webpack-plugin，按模块打包
- autoprefixer，css前缀
- babel-plugin-import，按需引入
- babel-plugin-dynamic-import-node，动态引入，懒加载

## 预览

演示地址：[https://skysong.gitee.io/vue2-vant-template](https://skysong.gitee.io/vue2-vant-template)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 指定环境打包
```
yarn build:test
yarn build:uat
yarn build:prod
```

### 编码规范

1、全局通用组件放在/src/components目录

2、业务组件放在./components目录

3、文件夹，使用camelCase命名格式

4、*.vue文件使用PascalCase命名格式，index.vue除外

5、属于类的*.js文件，使用PascalCase命名格式，index.js除外

6、属于Api的*.js文件，统一加上Api后缀，使用camelCase命名格式

7、其他类型的*.js文件，使用camelCase命名格式

8、样式文件、图片文件等，使用kebab-case命名格式

9、api模块和view模块，一一对应

10、方便记忆规则和项目开发

### CSS
BEM：就是块（block）、元素（element）、修饰符（modifier）
```
.block{}
.block__element{}
.block--modifier{}

.block 代表了更高级别的抽象或组件。
.block__element 代表.block的后代，用于形成一个完整的.block的整体。
.block--modifier代表.block的不同状态或不同版本
```
