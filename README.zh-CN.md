# 学术个人主页模板

一个适合研究者、学生和开发者的中英双语个人主页模板，使用 React、Vite 和 Tailwind CSS。页面包含个人简介、教育经历、论文、近期动态、工作经历、项目和联系信息，并适配桌面与手机屏幕。

[English README](README.md)

![通用学术个人主页模板预览](docs/preview.jpg)

> 模板中的姓名、学校、论文、工作和项目均为虚构示例；头像是通用 SVG 占位图，不包含原主页的个人资料。

## 本地运行

需要 Node.js 20.19+ 或 22.12+，以及 npm。GitHub Actions 使用 Node.js 24。

```bash
npm ci
npm run dev
```

打开终端显示的本地地址。检查生产构建：

```bash
npm run build
npm run preview
```

## 修改内容

主要编辑 [src/content.js](src/content.js)，将 `en` 和 `zh` 两部分的示例文字都替换成自己的内容。

| 内容 | 位置 |
| --- | --- |
| 姓名、身份、学校、地点和自我介绍 | `content.en`、`content.zh` |
| 邮箱和 GitHub 链接 | `site.email`、`site.github`；留空则不显示 |
| 头像 | 替换 `public/avatar.svg`，改文件名时同步修改 `site.avatar` |
| 教育、论文、动态、经历和项目 | 对应语言下的数组，可增删条目 |
| 默认语言 | `site.defaultLanguage`，填 `"en"` 或 `"zh"` |
| 网页标题和搜索摘要 | `index.html` 中的 `<title>` 与 description |
| 配色、间距、字体 | `src/Portfolio.jsx` 和 `src/styles.css` |

论文条目的 `authorName` 会加粗，`coauthors` 接在名字后面。`paperUrl`、`codeUrl` 和项目 `url` 留空时，页面不显示相应按钮；论文 `metrics: []` 会隐藏指标行。将 `publications`、`news`、`experience` 或 `projects` 设为 `[]`，对应栏目和导航入口会一起隐藏。将 `education` 设为 `[]` 可隐藏教育经历。

发布前请逐项替换虚构示例，不要让示例论文、项目或占位链接留在正式主页上。中英文内容需要分别修改和检查。

## 部署到 GitHub Pages

1. 在 GitHub 点击 **Use this template** 创建自己的仓库。
2. 在新仓库的 **Settings → Pages** 中将发布来源设为 **GitHub Actions**。
3. 修改内容后推送到 `main`。仓库中的工作流会自动构建并部署。
4. 等待 **Actions → Deploy portfolio to GitHub Pages** 成功。通常访问地址为 `https://<用户名>.github.io/<仓库名>/`。

Vite 会根据 GitHub Actions 的仓库名称自动配置路径；用户名主页仓库 `<用户名>.github.io` 则使用根路径 `/`。如果部署在其他域名，可用 `VITE_BASE_PATH` 覆盖构建路径。

## 让别人更容易找到仓库

建议在 GitHub 仓库设置中写清楚英文简介，并添加准确主题标签，例如 `academic-portfolio`、`personal-website`、`researcher-portfolio`、`react`、`vite`、`github-pages`。这些标签用于 GitHub 仓库搜索；网页在搜索引擎中的收录时间由搜索引擎决定。

## 许可

本项目使用 [MIT License](LICENSE)。
