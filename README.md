## my-vue3-admin

## 启动

```bash
# 克隆项目
git clone https://gitee.com/violet-mio/my-vue3-admin.git

# 进入项目目录
cd my-vue3-admin

# 安装依赖
yarn
```

# 启动服务

```bash
yarn dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
yarn build:stage

# 构建生产环境
yarn build:prod
```

## 其它

```bash
# 代码格式检查
yarn lint

# 代码格式检查并自动修复
yarn lint:fix
```

## yarn使用

```bash
# 安装项目依赖
yarn add [package]

# 安装开发依赖
yarn add [package] --dev  # dev dependencies

# 移除依赖
yarn remove [package]

# 更新依赖
yarn upgrade
```

更多使用参考 https://yarn.bootcss.com/docs/migrating-from-npm/
