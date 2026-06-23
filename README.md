# TodoMatic React Demo

一个基于 Vite 和 React 的 TodoMatic 示例项目。

## 运行

```bash
npm install
npm run dev
```

打开终端输出的本地地址，例如 `http://127.0.0.1:5173/`。

## 构建

```bash
npm run build
```

## 部署到 GitHub Pages

项目已配置 GitHub Actions 自动部署。推送到 `main` 分支后，GitHub 会构建 `dist` 并发布到 Pages。

首次部署前，在 GitHub 仓库页面进入：

`Settings` -> `Pages` -> `Build and deployment` -> `Source`，选择 `GitHub Actions`。

然后推送代码：

```bash
git add vite.config.js .github/workflows/deploy.yml README.md
git commit -m "Add GitHub Pages deployment"
git push origin main
```

部署完成后访问：

`https://chenmeng91.github.io/js_learning/`
