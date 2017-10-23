# Concise

Hexo 简约主题，响应式设计支持 PC、手机等设备，代码高亮使用 monokai-sublime 风格，[在线预览](https://sanonz.github.io/)。

![Preview](preview.png)


### 安装

``` bash
$ git clone https://github.com/sanonz/hexo-theme-concise.git themes/concise
```

**Concise requires Hexo 2.4 and above.**

### 切换

- 在 `_config.yml` 配置文件中 把 `theme` 值改为 `concise`.
- 复制 `themes/concise/_config.example.yml` 配置文件为 `themes/concise/_config.yml`

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

# Disqus 
disqus:
  enable: true
  shortname: sanonz    #your name
  count: true
```

- **excerpt_link** - 文章列表阅读更多显示文字
- **sidebar** - 配置博主个人信息，显示在边栏
