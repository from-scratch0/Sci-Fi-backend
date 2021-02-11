## 安装脚手架 新建项目 安装antd

## 按需加载

1. 安装react-app-rewired

```
npm i react-app-rewired -S
```

2. 修改package.json

3. 创建config-overrides.js

```
module.exports = function override(config, env) {
    // do stuff with the webpack config... 覆盖webpack配置
    return config;
};
```

4. 安装babel-plugin-import

```
npm i babel-plugin-import -D
```

修改config-overrides.js

5. 自定义主题

```
npm i react-app-rewire-less -D
```

修改config-overrides.js

