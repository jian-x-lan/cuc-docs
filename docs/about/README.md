## 关于搭建本文档库

### 运行与发布
```
1. 全局安装vuepress
npm install vuepress -g

2. 下载本项目
git clone https://github.com/jian-x-lan/cuc-docs.git

3. 安装依赖
cd cuc-docs
npm install

4. 本地预览
# 根目录下运行
npm run dev

# 浏览器本地预览
http://localhost:9000


5. 发布
# 根目录下运行
npm run deploy

# 浏览器查看发布后的效果(需要时间，等待几分钟后清缓存再刷新页面查看效果)
https://jian-x-lan.github.io/cuc-docs/
```
::: tip 注意点
修改`.vuepress/config.js`文件，及`新增/删除/重命名`文档时，需要执行以下命令

npm run dev
:::

### 相关参考链接

- [怎么把使用vuepress搭建的博客部署到Github Pages](https://www.cnblogs.com/LHLVS/p/11376732.html)