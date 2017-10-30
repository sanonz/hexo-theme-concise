# Concise

Hexo 简约主题，响应式设计支持 PC、手机等设备，代码高亮使用 monokai-sublime 风格，[在线预览](https://sanonz.github.io/)。

![Preview](preview.png)


### 前提

因为这个主题使用了 less 编译，Hexo 默认的编译器为 [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus) 要切换为 [hexo-renderer-less](https://github.com/hexojs/hexo-renderer-less)
```bash
$ npm install hexo-renderer-less --save
```

如果你不需要 `hexo-renderer-stylus` 可以把它卸载掉
```bash
$ npm uninstall hexo-renderer-stylus --save
```

### 安装

``` bash
$ git clone https://github.com/sanonz/hexo-theme-concise.git themes/concise
```

**Concise 主题需要 Hexo 2.4 或者更高的版本**

### 切换

1. 在 `_config.yml` 配置文件中 把 `theme` 值改为 `concise`.
2. 复制 `themes/concise/_config.example.yml` 配置文件为 `themes/concise/_config.yml`

### 更新

``` bash
cd themes/concise
git pull
```

## 配置

修改 `themes/concise/_config.yml` 配置文件

``` yml
# Content
excerpt_link: 阅读更多

# Sidebar
author:
  name: Sanonz
  work: Web Developer &amp; Designer
  location: Shenzhen, China

# Livere 
livere:
  enable: true
  uid: uid
```

- **excerpt_link** - 文章列表阅读更多显示文字
- **sidebar** - 配置博主个人信息，显示在边栏
- **Livere** - 配置评论，需要自行注册 [Livere](https://livere.com/) 然后获取 uid 填写到这里

可以关闭单个文章的评论，把 `comments` 设置为 `false`，默认为 `true`，例如：
```md
---
title: Hello World
date: 2017-10-20 20:00:00
comments: true
---
```
