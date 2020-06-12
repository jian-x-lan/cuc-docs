## 关于搭建本文档库

### 本地文档目录结构

1. 文档统一放置在`docs`文件夹内,文件夹内需要新建一个`README.md`文档，可以写当前文件夹的描述，空白亦可。


```
.
├── docs(文档编辑只需要关注这个文件夹即可)
│   ├── 文件夹1
│   │   │── images (存放图片的文件夹，可选)
│   │   │── 文档1-1.md
│   │   ├── 文件夹1-2
│   │   │    │── 文档1-2-1.md
│   │   │    │── 文档1-2-2.md
│   │   │    └── README.md (必须的)
│   │   └── README.md (必须的)
│   ├── 文件夹2
│   │   │── 文档2-1.md
│   │   │── 文档2-2.md
│   │   └── README.md (必须的)
│   └── README.md (必须的)
├── .vuepress
└── package.json
```

::: tip 注意点
每个文件夹下至少包含一个`README.md`文档。`images`可选
:::


2. 目前标题深度为2，3级可自动生成侧边栏。

### 运行与发布

1. 本地预览
```
# 根目录下运行
npm run dev

# 浏览器打开
http://localhost:9000
```

2. 发布

```
# 根目录下运行
npm run deploy

# 浏览器打开
https://jian-x-lan.github.io/cuc-docs/
```



### 相关参考链接

[怎么把使用vuepress搭建的博客部署到Github Pages](https://www.cnblogs.com/LHLVS/p/11376732.html)