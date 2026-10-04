# 小日记 · Little Diary

无聊的时候，从签筒里抽一篇以前的日记；或者切到「玄学签」，用小六壬、梅花易数、大六壬、八字、紫微斗数、黄历起一支有依据的签。

纯前端静态页面，没有后端，所有数据存在浏览器 localStorage 里。

## 本地预览

直接双击 `index.html` 就能打开。也可以在这个文件夹里起一个本地服务器：

```bash
python3 -m http.server 8000
# 然后打开 http://localhost:8000
```

## 用 GitHub Pages 测试

1. 把整个文件夹推到一个 GitHub 仓库（`index.html` 放在仓库根目录）。
2. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，Branch 选 `main`、目录 `/ (root)`，保存。
3. 一两分钟后访问 `https://<你的用户名>.github.io/<仓库名>/`。

`.nojekyll` 是为了让 GitHub Pages 原样发布文件，别删。

## 目录

| 路径 | 内容 |
|---|---|
| `index.html` | 页面结构和全部样式 |
| `js/app.js` | 全部交互逻辑：签筒动画、写日记、导入、设置、玄学签起课 |
| `js/xdata.js` | 《周易》六十四卦卦爻辞、《梅花易数》占断原文 |
| `js/vendor.js` | 三个排盘库打包后的文件（自动生成，不要手改） |
| `vendor-src/` | 重新生成 `js/vendor.js` 的入口和依赖清单 |

重新打包排盘库：

```bash
cd vendor-src
npm install
npm run build
```

## 第三方授权

| 名称 | 用途 | 授权 |
|---|---|---|
| lunar-javascript | 农历、节气、八字、黄历 | MIT |
| iztro | 紫微斗数排盘 | MIT |
| liuren-ts-lib（依赖 tyme4ts） | 大六壬排盘 | Apache-2.0（tyme4ts 为 MIT） |
| @freizl/yijing | 《周易》卦爻辞文本 | MIT |
| opencode-tianji 数据 | 《梅花易数》原文条目 | MIT |
| 站酷小薇、思源宋体、思源黑体、龙藏体、Instrument Serif | 字体（Google Fonts 在线加载） | SIL OFL 1.1 |

小六壬歌诀取民间通行本，各本字句略有出入。
