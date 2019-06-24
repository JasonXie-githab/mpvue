# mpvue demo

> A Mpvue project

## Build Setup

``` bash
# 安装依赖（注意查看package.json里面模块的安装版本号）
npm install

# 小程序运行
npm run dev

# H5运行
npm run devH5

# 小程序打包（打包到dist目录)
npm run build

# H5打包（打包到distH5目录)
npm run buildH5

```

# 版本指定
mpvue：1.0.11
mpvue-loader: 1.0.14
mpvue-template-compiler: 1.0.11

# 生命周期
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed

# api
$query 获取当前页面参数
$scrollTo 设置页面滚动 number num
$setStorage 本地存储 string key  string value
$getStorage 获取本地 string key
$removeStorage 删除本地 string key
$finishPullDown 结束下拉刷新
$openMask 打开蒙版
$closeMask 关闭蒙版
$showLoading 显示loading
$hideLoading 关闭loading
$success 显示成功
$message message弹框
$closeMessage 关闭message
$confirm 确认弹框
$closeConfirm 关闭确认弹框
$prompt 对话框
$closePrompt 关闭对话框

# 路由
$go    跳转页面
$back  回退页面
$redirect 重定向
$reLaunch 关闭其他页面打开新的页面
$switchTab 跳转到小程序tab页
参数 string name object query


# 目录
|__ build -- 小程序配置文件
|__ buildH5 -- h5配置文件
|__ config -- 小程序config
    |__ dev.env -- 小程序开发环境
    |__ index
    |__ prod.env -- 小程序生产环境
|__ configH5 -- h5 config
    |__ dev.env -- h5开发环境
    |__ index
    |__ prod.env -- h5生产环境
|__ dist -- 小程序打包文件
|__ distH5 -- h5打包文件
|__ mock
|__ src -- 项目入口
    |__ api -- 项目api
        |__ api_module -- api模块
        |__ common_api -- 小程序h5公共api
        |__ request -- 小程序请求封装
        |__ requestH5 -- H5请求封装
    |__ assets -- 静态资源文件
    |__ components -- 组件模块
    |__ pages -- 项目页面目录
    |__ router -- h5 router
    |__ store -- vuex
        |__ index
        |__ ui -- ui组件控制
    |__ style -- 样式
        |__ common.scss -- 全局样式
        |__ mixins.scss -- 全局mixins
        |__ variables.scss -- 全局scss变量
    |__ utils -- 工具类
        |__ crypto -- 加解密
        |__ filters -- 过滤器
        |__ flexible -- h5首次加载设置font-size
        |__ index
        |__ storage -- 存储
        |__ tools
    |__ App.vue -- 小程序入口vue
    |__ AppH5.vue -- h5入口vue
    |__ main.js -- 小程序入口js
    |__ mainH5.js -- h5入口js
|__ .babelrc
|__ .editorconfig
|__ .eslintignore -- eslint忽略
|__ .eslintrc -- eslint配置
|__ .gitigonre -- git忽略
|__ index.html -- h5 index
|__ tsconfig.json -- ts配置


