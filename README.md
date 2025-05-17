# Next Web Nav - 现代化的前端导航网站

## 前言
在日常学习和工作过程中，我们经常需要收藏和管理大量的网站资源。Next Web Nav 就是为解决这个问题而生的一个现代化导航网站，它不仅提供了优雅的用户界面，还支持完全的自定义配置。

## 特色功能

### 🎯 核心功能
- 📱 完美的响应式设计，支持各种设备
- 🔍 快速的站内实时搜索
- ⚙️ 可视化的导航数据管理界面
- 💾 本地数据持久化存储
- 🌓 优雅的明暗主题切换

### 💡 用户体验
- 🎨 现代化的 UI 设计
- ⚡ 快速的页面加载和响应
- 🔄 流畅的动画过渡效果
- 📝 直观的数据编辑界面
- 🛡️ 安全的数据重置确认机制

### 🛠️ 技术特点
- 基于 Next.js 14 构建
- 使用 Tailwind CSS 实现样式
- 采用 shadcn/ui 组件库
- 使用 Zustand 管理状态
- 支持 TypeScript

## 效果展示
<p align="center">
  <img src="/public/next-web-nav-pc.png" alt="桌面端浅色主题">
  <img src="/public/next-web-nav-pc-dark.png" alt="桌面端深色主题">
</p>

<p align="center">
  <img src="/public/next-web-nav-phone.png" style="width: 45%; margin: 5px;" alt="移动端浅色主题">
  <img src="/public/next-web-nav-phone-dark.png" style="width: 45%; margin: 5px;" alt="移动端深色主题">
</p>

<p align="center"> 基于 <b>Next.js</b> 的现代化前端导航网站 </p>

## 在线预览

🌐 [在线访问地址](https://nav.liwenkai.fun)

## 快速开始

### 1️⃣ 克隆项目
```bash
git clone https://github.com/your-username/next-web-nav.git
cd next-web-nav
```

### 2️⃣ 安装依赖
```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3️⃣ 启动开发服务器
```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

### 4️⃣ 开始使用
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可开始使用

## 自定义导航数据

### 可视化编辑
1. 点击右上角的设置图标 ⚙️
2. 在弹出的设置面板中：
   - ➕ 添加新的分类或链接
   - ✏️ 编辑现有的分类和链接
   - 🗑️ 删除不需要的内容
   - 🔄 一键重置为默认数据
3. 点击保存即可应用更改

### 数据结构
```typescript
interface NavLinkItem {
  icon: string    // 图标URL
  title: string   // 标题
  desc: string    // 描述
  link: string    // 链接URL
}

interface NavCategory {
  title: string        // 分类名称
  items: NavLinkItem[] // 分类下的链接列表
}
```

## 部署指南

### Vercel 部署（推荐）
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liwenka1/next-web-nav)

1. 点击上方按钮
2. 选择或导入你的 GitHub 仓库
3. Vercel 会自动完成部署配置
4. 等待部署完成即可访问

### 其他部署方式
1. 构建生产版本
```bash
pnpm build
```

2. 启动生产服务器
```bash
pnpm start
```

## 贡献指南

### 🤝 如何贡献
1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 🐛 问题反馈
- 使用 GitHub Issues 提交 bug
- 在提交 bug 时请详细描述问题并附上复现步骤

## 开源协议

本项目采用 MIT 协议开源，完整的协议请参考 [LICENSE](LICENSE) 文件。

## 鸣谢

- 感谢所有贡献者的付出
- 如果觉得项目对你有帮助，欢迎给个 Star ⭐
