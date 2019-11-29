# Concise

Hexo 简约主题，响应式设计支持 PC、手机等设备，代码高亮使用 monokai-sublime 风格。可以最低兼容到 IE8。[在线预览](https://sanonz.github.io/)。

![Preview](preview.png)


### 前提

因为这个主题使用了 less 编译，Hexo 默认的编译器为 [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus) 要切换为 [hexo-renderer-less](https://github.com/hexojs/hexo-renderer-less)
``` bash
$ npm install hexo-renderer-less --save
```

如果你不需要 `hexo-renderer-stylus` 可以把它卸载掉
``` bash
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
$ cd themes/concise
$ git pull
```

## 配置

修改 `themes/concise/_config.yml` 配置文件

``` yml
# Header
menu:
  首页: /
  前端: /categories/front-end
  后端: /categories/back-end
  标签: /tags
  归档: /archives
  订阅: /atom.xml
  关于: /about

# Content
excerpt_link: 阅读更多
content_max_width: 800px

# Sidebar
author:
  name: Sanonz
  work: Web Developer &amp; Designer
  location: Shenzhen, China
  avatar_url: /images/avatar.jpg

# Links:
links:
  - svg: ./source/svg/github.svg
    url: https://github.com/sanonz
  - svg: ./source/svg/more.svg
    url: http://weibo.com/sanonz
  - svg: ./source/svg/twitter.svg
    url: https://twitter.com/sanonze

# github comment 
git_commit:
  enable: true
  client_id: 7fbe80427f54741e289f
  client_secret: f34ed5fd92e54c9000bd37ba951948cb939deff5
  repo: sanonz.github.io
  owner: sanonz
  admin:
  - sanonz
  per_page: 10

# Baidu
baidu:
  id: e4027971a230b210f4671f485b33846a

# Miscellaneous
rss: /atom.xml
favicon: /images/favicon.ico
```

- **menu** - 导航列表
- **excerpt_link** - 文章列表阅读更多显示文字
- **content_max_width** - 站点布局内容区域的最大宽度，超过最大宽度左右留白出现翻页按钮，默认最大 `800px`
- **sidebar** - 配置博主个人信息，显示在边栏
- **links** - 配置博主个人信息下边的链接，icon 存放位置为：./source/svg
- **git_commit** - 配置评论，使用的 gitalk 插件，具体配置说明请到官方查看 [https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)
- **baidu** - 配置站点访问统计，需要自行注册 [百度统计](https://tongji.baidu.com/) 然后获取 ID 填写到这里
- **rss** - 在 `<head>` 标签中显示 RSS 链接
- **favicon** - favicon URL 地址配置

## 小技巧

#### 想要自定义 icon 的话，可以到 [fontawesome](https://fontawesome.com/icons)、[iconfont](http://iconfont.cn) 下载 svg 格式图标，放到 `./source/svg` 目录，按着如下例子配置
``` yml
links:
  - svg: ./source/svg/github.svg
    url: https://github.com/sanonz
  - svg: ./source/svg/twitter.svg
    url: https://twitter.com/sanonze
```

#### 可以关闭单个文章的评论，把 `comments` 设置为 `false`，默认为 `true`，例如：
``` markdown
---
title: Hello World
date: 2017-10-20 20:00:00
comments: false
---
```

#### 访问 Tags 页面 404，执行一下命令，然后修改 `source\tags\index.md` 文件，添加 `layout: tags`
``` bash
$ hexo new page tags
INFO  Created: E:\blog\source\tags\index.md
```

``` markdown
---
title: tags
date: 2019-09-29 17:27:33
layout: tags
---
```

#### 添加分类列表，设置文章的 `categories` 字段然后访问 `/categories/front-end`
``` markdown
---
title: Hello World
date: 2017-10-20 20:00:00
categories: front-end
---
```

#### 单独设置归档(Archive)每页显示文章数量，例如每页 `30` 篇
```yml
# Archive page setting
archive_generator:
  per_page: 30
  order_by: -date
```

#### 列表文章显示 `阅读更多` 按钮，在需要截断的地方插入 `<!-- more -->` 注释

#### 其它一些小问题

1. [解决订阅页面空白问题](https://github.com/sanonz/hexo-theme-concise/issues/28#issuecomment-506638925)
2. [添加 MathJax / KaTeX 数学公式支持](https://github.com/sanonz/hexo-theme-concise/issues/33#issuecomment-557409332)
