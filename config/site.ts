export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "前端导航",
  description: "基于 Next.js 的前端导航网站",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/liwenka1",
    github: "https://github.com/liwenka1/next-web-nav"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com"
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com"
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu"
      },
      {
        icon: "https://processon.com/favicon.ico",
        title: "ProcessOn",
        desc: "免费在线流程图思维导图",
        link: "https://processon.com/"
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn"
      },
      {
        icon: "https://www.terminalgif.com/favicon.ico",
        title: "Terminal Gif Maker",
        desc: "在线生成 Terminal GIF",
        link: "https://www.terminalgif.com"
      },
      {
        icon: "https://astexplorer.net/favicon.png",
        title: "AST Explorer",
        desc: "一个 Web 工具，用于探索由各种解析器生成的 AST 语法树",
        link: "https://astexplorer.net/"
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "各类数据格式与对象转换",
        link: "https://transform.tools"
      },
      {
        icon: "/icons/hoppscotch.png",
        title: "Hoppscotch",
        desc: "开源 API 开发生态系统",
        link: "https://hoppscotch.io/"
      },
      {
        icon: "/icons/apifox.png",
        title: "Apifox",
        desc: "API 文档、API 调试、API Mock、API 自动化测试",
        link: "https://www.apifox.cn/"
      }
    ]
  },

  {
    title: "React",
    items: [
      {
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        title: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        link: "https://zh-hans.reactjs.org"
      },
      {
        icon: "https://reactrouter.com/favicon-light.png",
        title: "React Router",
        desc: "React 的声明式路由",
        link: "https://reactrouter.com"
      },
      {
        icon: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
        title: "Next.js",
        desc: "一个用于 Web 的 React 框架",
        link: "https://nextjs.org"
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        title: "UmiJS",
        desc: "插件化的企业级前端应用框架",
        link: "https://umijs.org"
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        title: "Ant Design",
        desc: "一套企业级 UI 设计语言和 React 组件库",
        link: "https://ant.design"
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        title: "Ant Design Mobile",
        desc: "构建移动 WEB 应用程序的 React 组件库",
        link: "https://mobile.ant.design"
      },
      {
        icon: "https://docs.pmnd.rs/apple-touch-icon.png",
        title: "Zustand",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction"
      },
      {
        icon: "https://valtio.pmnd.rs/favicon.ico",
        title: "Valtio",
        desc: "makes proxy-state simple for React and Vanilla",
        link: "https://valtio.pmnd.rs"
      },
      {
        icon: "https://jotai.org/favicon.svg",
        title: "Jotai",
        desc: "primitive and flexible state management for React",
        link: "https://jotai.org"
      },
      {
        icon: "https://cn.redux.js.org/img/redux.svg",
        title: "Redux",
        desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
        link: "https://cn.redux.js.org"
      },
      {
        icon: "https://recoiljs.org/zh-hans/img/favicon.png",
        title: "recoil",
        desc: "Recoil is an experimental state management framework for React.",
        link: "https://recoiljs.org/zh-hans/"
      },
      {
        icon: "https://zh.mobx.js.org/assets/mobx.png",
        title: "MobX",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://zh.mobx.js.org"
      },
      {
        icon: "https://ahooks.js.org/simple-logo.svg",
        title: "ahooks",
        desc: "一套高质量可靠的 React Hooks 库",
        link: "https://ahooks.js.org/zh-CN"
      }
    ]
  },
  {
    title: "Vue",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org"
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org"
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue Router",
        desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
        link: "https://router.vuejs.org/zh"
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh"
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com"
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org"
      },
      {
        icon: "https://vitest.dev/favicon.ico",
        title: "Vitest",
        desc: "一个 Vite 原生单元测试框架。它很快！",
        link: "https://cn.vitest.dev/"
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org"
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com"
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant"
      },
      {
        icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        title: "Cube UI",
        desc: "基于 Vue.js 实现的精致移动端组件库",
        link: "https://didi.github.io/cube-ui"
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com"
      }
    ]
  },
  {
    title: "JavaScript",
    items: [
      {
        icon: "https://svelte.dev/svelte-logo-horizontal.svg",
        title: "Svelte",
        desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
        link: "https://svelte.dev"
      },
      {
        icon: "/icons/jquery.svg",
        title: "jQuery API 中文文档",
        desc: "一个兼容多浏览器的 JavaScript 框架",
        link: "https://jquery.cuishifeng.cn"
      },
      {
        title: "ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        icon: "https://echarts.apache.org/zh/images/favicon.png",
        link: "https://echarts.apache.org/"
      },
      {
        title: "AntV",
        desc: "蚂蚁集团全新一代数据可视化解决方案,让数据栩栩如生",
        icon: "/icons/antv.png",
        link: "https://antv.vision/"
      }
    ]
  },
  {
    title: "CSS",
    items: [
      {
        icon: "https://postcss.org/assets/logo-3e39b0aa.svg",
        title: "PostCSS",
        desc: "一个用 JavaScript 转换 CSS 的工具",
        link: "https://postcss.org"
      },
      {
        icon: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com"
      },
      {
        icon: "https://www.tailwindcss.cn/apple-touch-icon.png",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://www.tailwindcss.cn"
      },
      {
        title: "WindiCSS",
        desc: "Windi CSS 是下一代工具优先的 CSS 框架",
        icon: "https://windicss.org/assets/logo.svg",
        link: "https://windicss.org"
      },
      {
        title: "Twind",
        desc: "现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案",
        icon: "/icons/twind.svg",
        link: "https://github.com/tw-in-js/twind"
      },
      {
        title: "UnoCSS",
        desc: "即时按需原子 CSS 引擎",
        icon: "https://uno.antfu.me//favicon.svg",
        link: "https://uno.antfu.me/"
      },
      {
        title: "Bootstrap",
        desc: "Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站",
        icon: "https://img.kuizuo.cn/20210907055816.png",
        link: "https://v5.bootcss.com/"
      },
      {
        title: "w3schools Css 教程",
        desc: "w3schools 从基础到高级的CSS教程",
        icon: "https://www.w3schools.com/favicon.ico",
        link: "https://www.w3schools.com/css"
      },
      {
        title: "CSS-Inspiration",
        desc: "CSS灵感",
        icon: "/icons/css-inspiration.png",
        link: "https://csscoco.com/inspiration"
      },
      {
        title: "CSS常用样式",
        desc: "CSS常用样式",
        icon: "https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        link: "https://github.com/QiShaoXuan/css_tricks"
      },
      {
        title: "CSSFX",
        desc: "一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持",
        icon: "/icons/cssfx.png",
        link: "https://cssfx.netlify.app/"
      },
      {
        title: "NES.css",
        desc: "一个像素风格的CSS框架",
        icon: "https://nostalgic-css.github.io/NES.css/favicon.png",
        link: "https://nostalgic-css.github.io/NES.css/"
      },
      {
        title: "clay.css",
        desc: "claymorphism 泥陶态风格CSS",
        icon: "https://codeadrian.github.io/clay.css/apple-touch-icon.png",
        link: "https://codeadrian.github.io/clay.css/"
      },
      {
        title: "loading.io",
        desc: "Animation Made Easy",
        icon: "/icons/loading.ico",
        link: "https://loading.io/"
      },
      {
        title: "神奇UI样式",
        desc: "我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。",
        icon: "/icons/uiverse.png",
        link: "https://uiverse.io"
      },
      {
        title: "HYPE4",
        desc: "透明玻璃态生成器",
        icon: "https://hype4.academy/_next/static/media/logorwd@2x.b40bc92c.png",
        link: "https://hype4.academy/tools/glassmorphism-generator"
      },
      {
        title: "Omatsuri",
        desc: "收集不同的发电机，让您的生活更轻松。",
        icon: "https://omatsuri.app/assets/favicon.ico",
        link: "https://omatsuri.app"
      },
      {
        title: "smooth shadow",
        desc: "快速轻松地实现基于 CSS 阴影的绝佳工具。您只需要指定一些阴影设置，代码就在您的路上。",
        icon: "https://shadows.brumm.af/favicon.svg",
        link: "https://shadows.brumm.af/"
      },
      {
        title: "FANCY-BORDER-RADIUS",
        desc: "花式边界半径,有助于创建 CSS 花式边框。",
        icon: "https://9elements.github.io/fancy-border-radius/favicon-32x32.png",
        link: "https://9elements.github.io/fancy-border-radius/"
      },
      {
        title: "Coolors",
        desc: "创建调色板",
        icon: "/icons/coolors.png",
        link: "https://coolors.co/"
      }
    ]
  },
  {
    title: "Node",
    items: [
      {
        icon: "https://deno.com/logo.svg",
        title: "deno",
        desc: "Deno is the open-source JavaScript runtime for the modern web.",
        link: "https://deno.com/"
      },
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn"
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com"
      },
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com"
      },
      {
        icon: "https://www.eggjs.org/favicon.png",
        title: "Egg",
        desc: "为企业级框架和应用而生",
        link: "https://www.eggjs.org/zh-CN"
      },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn"
      },
      {
        title: "TypeORM",
        desc: "TypeORM 是一个 ORM 框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)一起使用",
        icon: "/icons/typeorm.ico",
        link: "https://typeorm.bootcss.com"
      },
      {
        title: "Axios",
        desc: "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
        icon: "/icons/axios.ico",
        link: "https://axios-http.cn/"
      },
      {
        title: "NPM",
        desc: "NPM是世界上最大的包管理器",
        icon: "https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png",
        link: "https://www.npmjs.com"
      },
      {
        title: "Yarn",
        desc: "Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求",
        icon: "https://www.yarnpkg.cn/favicon-32x32.png",
        link: "https://www.yarnpkg.cn"
      },
      {
        title: "Pnpm",
        desc: "速度快、节省磁盘空间的软件包管理器",
        icon: "https://www.pnpm.cn/img/favicon.png",
        link: "https://pnpm.io"
      }
    ]
  },
  {
    title: "构建工具",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com"
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev"
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com"
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build"
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn"
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io"
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs"
      }
    ]
  },
  {
    title: "前端文档",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料",
        link: "https://developer.mozilla.org/zh-CN"
      },
      {
        icon: "https://static.runoob.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com"
      },
      {
        icon: "/icons/es6.png",
        title: "ES6 入门教程",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "https://es6.ruanyifeng.com/"
      },
      {
        icon: "/icons/typescript.png",
        title: "深入理解 TypeScript",
        desc: "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法",
        link: "https://jkchao.github.io/typescript-book-chinese/"
      },
      {
        icon: "/icons/rust.svg",
        title: "Rust语言圣经",
        desc: "一份高质量 Rust 教程",
        link: "https://course.rs"
      }
    ]
  },
  {
    title: "UI设计",
    items: [
      {
        title: "Mastergo",
        desc: "面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现",
        icon: "https://mastergo.com/favicon.ico",
        link: "https://mastergo.com/"
      },
      {
        title: "即时设计",
        desc: "可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」",
        icon: "https://img.js.design/assets/webImg/favicon.ico",
        link: "https://js.design/"
      },
      {
        title: "Figma",
        desc: "Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。",
        icon: "/icons/figma.png",
        link: "https://www.figma.com/"
      },
      {
        title: "Pixso",
        desc: "一站式完成原型、设计、交互与交付，为数字化团队协作提效",
        icon: "https://cms.pixso.cn/images/logo.svg",
        link: "https://pixso.cn/"
      },
      {
        title: "AIDesign",
        desc: "10秒创建您的LOGO！",
        icon: "https://ailogo.qq.com//favicon.ico?v=1.1",
        link: "https://ailogo.qq.com/"
      }
    ]
  },
  {
    title: "字体图标",
    items: [
      {
        title: "iconify",
        desc: "数千个图标，一个统一的框架",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/"
      },
      {
        title: "icones",
        desc: "Icon Explorer with Instant searching, powered by Iconify",
        icon: "https://icones.js.org/favicon.svg",
        link: "https://icones.js.org/"
      },
      {
        title: "iconfont",
        desc: "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
        link: "https://www.iconfont.cn/"
      },
      {
        title: "feathericons",
        desc: "简单美丽的开源图标",
        icon: "https://feathericons.com/favicon.ico",
        link: "https://feathericons.com/"
      },
      {
        title: "undraw",
        desc: "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        icon: "https://undraw.co/apple-touch-icon.png",
        link: "https://undraw.co/"
      },
      {
        title: "igoutu",
        desc: "图标、插图、照片、音乐和设计工具",
        icon: "/icons/igoutu.png",
        link: "https://igoutu.cn/"
      },
      {
        title: "Emojiall",
        desc: "Emoji表情大全",
        icon: "https://www.emojiall.com/apple-touch-icon.png",
        link: "https://www.emojiall.com/zh-hans"
      },
      {
        title: "渐变色网站",
        desc: "数百万个自动生成的渐变的网站",
        icon: "https://gradihunt.com/favicon.ico",
        link: "https://gradihunt.com/"
      },
      {
        title: "谷歌字体",
        desc: "一个生成渐变色背景的网站",
        icon: "/icons/google_fonts.ico",
        link: "https://googlefonts.cn/"
      },
      {
        title: "Typing SVG",
        desc: "一个动态生成的可自定义 SVG 打字效果",
        icon: "/icons/typing-svg.png",
        link: "https://readme-typing-svg.herokuapp.com/demo/"
      }
    ]
  },
  {
    title: "跨平台",
    items: [
      {
        title: "Electron",
        desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
        icon: "/icons/electron.ico",
        link: "https://www.electronjs.org/"
      },
      {
        title: "Tauri",
        desc: "Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件",
        icon: "https://tauri.app/meta/favicon-96x96.png",
        link: "https://tauri.app/"
      },
      {
        title: "Flutter",
        desc: "Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用",
        icon: "https://flutter.cn/assets/images/cn/flutter-icon.png",
        link: "https://flutter.cn/"
      },
      {
        title: "Uni-app",
        desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台",
        icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png",
        link: "https://uniapp.dcloud.io/"
      },
      {
        title: "Taro",
        desc: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用",
        icon: "/icons/taro.png",
        link: "https://taro.jd.com"
      }
    ]
  },
  {
    title: "站点生成",
    items: [
      {
        title: "VitePress",
        desc: "Vue 驱动并使用Vite构建的静态网站生成器",
        icon: "https://vuepress.vuejs.org/hero.png",
        link: "https://vitepress.vuejs.org"
      },
      {
        title: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        icon: "https://vuepress.vuejs.org/hero.png",
        link: "https://vuepress.vuejs.org"
      },
      {
        title: "Docusaurus",
        desc: "快速构建以内容为核心的最佳网站",
        icon: "/icons/docusaurus.svg",
        link: "https://docusaurus.io"
      },
      {
        title: "Hexo",
        desc: "快速、简洁且高效的博客框架",
        icon: "https://hexo.io/favicon.ico",
        link: "https://hexo.io"
      },
      {
        title: "GitBook",
        desc: "GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作",
        icon: "https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png",
        link: "https://www.gitbook.com/"
      },
      {
        title: "Docsify",
        desc: "docsify 可以快速帮你生成文档网站",
        icon: "https://docsify.js.org/_media/icon.svg",
        link: "https://docsify.js.org"
      },
      {
        title: "WordPress",
        desc: "WordPress是一款能让您建立出色网站、博客或应用程序的开源软件",
        icon: "https://s.w.org/images/wmark.png",
        link: "https://cn.wordpress.org/"
      }
    ]
  },
  {
    title: "代码托管",
    items: [
      {
        title: "Github",
        icon: "/icons/github.ico",
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com"
      },
      {
        title: "Gitee",
        desc: "Gitee 是中国领先的基于 Git 的代码托管平台，类似于全球知名的 GitHub",
        icon: "/icons/gitee.ico",
        link: "https://gitee.com/"
      },
      {
        title: "Gitlab",
        desc: "更快地交付安全代码，部署到任何云，并推动业务成果",
        icon: "https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64",
        link: "https://gitlab.com/"
      },
      {
        title: "Gitea",
        desc: "Gitea 是一个开源社区驱动的轻量级代码托管解决方案，后端采用 Go 编写，采用 MIT 许可证.",
        icon: "https://gitea.io/images/favicon.png",
        link: "https://gitea.io/"
      },
      {
        title: "Coding",
        desc: "提供一站式研发管理平台及云原生开发工具，让软件研发如同工业生产般简单高效，助力企业提升研发管理效能",
        icon: "/icons/coding.png",
        link: "https://coding.net/"
      }
    ]
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com"
      },
      {
        title: "Netlify",
        desc: "Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能",
        icon: "/icons/netlify.png",
        link: "https://www.netlify.com"
      },
      {
        title: "Coolify",
        desc: "一个开源和自我托管的 Heroku/Netlify 替代品",
        icon: "/icons/coolify.png",
        link: "https://coolify.io"
      },
      {
        title: "GitHub Codespace",
        desc: "全球最大的软件项目托管平台，发现优质开源项目",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        link: "https://github.com/codespaces"
      },
      {
        title: "Railway",
        desc: "带上你的代码，剩下交给我们 ",
        icon: "/icons/railway.png",
        link: "https://railway.app/"
      },
      {
        title: "Supabase",
        desc: "Supabase 是一个开源的后端即服务（BaaS）平台，它可以帮助开发者快速构建应用程序，无需编写后端代码。",
        icon: "/icons/supabase.png",
        link: "https://supabase.com/"
      }
    ]
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com"
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn"
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com"
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com"
      },
      {
        title: "博客园",
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com"
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://zhihu.com"
      }
    ]
  }
]
