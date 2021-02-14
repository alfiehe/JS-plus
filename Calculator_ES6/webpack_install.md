# webpack 打包工具安装

## 基本三件套

1. webpack
2. webpack-cli
3. webpack-dev-server

```
tnpm i -D webpack webpack-cli webpack-dev-server
```

## 处理JS

> ES6 ES7 ES8 装饰器

1. babel-loader@7
2. babel-core
3. babel-preset-env
4. babel-plugin-transform-runtime
5. babel-plugin-transform-decorators
6. babel-plugin-transform-decorators-legacy

```
tnpm i babel-loader@7 babel-core babel-preset-env babel-plugin-transform-runtime babel-plugin-transform-decorators babel-plugin-transform-decorators-legacy -D
```

## 处理CSS

> sass -> css -> style

1. sass-loader
2. node-sass
3. css-loader
4. style-loader

```
tnpm i -D sass-loader node-sass css-loader style-loader
```

### 处理HTML

- html-webpack-plugin
- ejs-loader

```
tnpm i -D html-webpack-plugin ejs-loader
```