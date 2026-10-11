<p align="center">
  <a href="https://getartcraft.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/brand/artcraft-logo-white.svg">
      <img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/brand/artcraft-logo.svg" width="200">
    </picture>
  </a>
</p>

<h1 align="center">WordCraft</h1>

<p align="center">
  <b>写作与文档排版；一款开源、以净室（clean-room）方式重新实现的 Microsoft Word，完全用 Rust 重写。</b>
</p>

<p align="center">
  一款快速、开源的文字处理软件，沿用你早已熟悉的 Word 工作流：功能区、样式、
  表格、修订、引用与邮件合并。它支持读写 .docx，原生运行于
  macOS、Windows、Linux 与 BSD，并可通过 WebAssembly 在浏览器中使用。<br>
  <i>由 ArtCraft 团队打造。</i>
</p>

<p align="center">
  <img alt="Written in Rust" src="https://img.shields.io/badge/written%20in-Rust-2b47b5?style=flat-square&logo=rust&logoColor=white">
  <img alt="Runs on macOS, Windows, Linux, BSD and the web" src="https://img.shields.io/badge/runs%20on-macOS%20%C2%B7%20Windows%20%C2%B7%20Linux%20%C2%B7%20BSD%20%C2%B7%20Web-3b5bdb?style=flat-square">
  <img alt="License: MIT OR Apache-2.0" src="https://img.shields.io/badge/license-MIT%20%2F%20Apache--2.0-2b47b5?style=flat-square">
  <img alt="Agent-drivable over MCP" src="https://img.shields.io/badge/agents-MCP%20%C2%B7%20CLI-3b5bdb?style=flat-square">
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="Join the ArtCraft community on Discord" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<p align="center">
  <a href="https://getartcraft.com/apps/wordcraft"><b>getartcraft.com 上的 WordCraft</b></a> ·
  <a href="https://getartcraft.com/">ArtCraft</a> ·
  <a href="https://getartcraft.com/apps">全部 Crafting 应用</a>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/hero.png" alt="功能区的“开始”选项卡展开在一份两页文档之上，文档标题为《The Open Studio Handbook》。左侧的导航窗格列出了文档的各处标题，样式库实时预览“正文”“标题 1”“标题”与“副标题”，第一段中的一个词语处于选中状态。" width="100%">
  <br><sub><b>《The Open Studio Handbook》</b>，WordCraft 内置的示例文档：功能区、实时样式库、标尺与导航窗格。</sub>
</p>

> [!NOTE]
> **ArtCraft 是一个汇集了各行各业艺术家的社区。** 画家、摄影师、
> 电影人、插画师、设计师、动画师、爱好者，以及上周才刚拿起铅笔的人。只要你创作，
> 你就是其中一员。 **[来 Discord 跟我们打个招呼吧](https://discord.gg/artcraft)。**

<p align="center">
  <a href="#a-tour">功能一览</a> ·
  <a href="#why-wordcraft">为何选择 WordCraft</a> ·
  <a href="#what-works-today">当前可用功能</a> ·
  <a href="#quick-start">快速开始</a> ·
  <a href="#for-agents-cli-and-mcp">面向 AI 智能体</a> ·
  <a href="#architecture">架构</a> ·
  <a href="#roadmap">路线图</a> ·
  <a href="#downloads">下载</a> ·
  <a href="#the-crafting-apps">Crafting 应用系列</a> ·
  <a href="#license-and-credits">许可证与致谢</a>
</p>

## 功能一览

下面每一张截图都是 WordCraft 本身，由它自带的 UI 测试工具在屏幕外渲染而成
（`cargo run -p wordcraft-ui-egui --example ui_shot`）。

<table>
<tr>
<td width="50%" valign="top"><img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/review.png" alt="“审阅”选项卡中已开启修订：单词 forty 以洋红色插入、thirty 被加上删除线；三段加批注的文字带有底纹，并通过虚线引导线连接到页面右侧灰色标记区里的批注气球" width="100%"><p align="center"><sub><b>审阅。</b> 修订、页边批注气球、接受与拒绝、输入时即进行的拼写与语法检查。</sub></p></td>
<td width="50%" valign="top"><img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/references.png" alt="“引用”选项卡，左右并排两页：第一页是带点状引导线与页码的目录，第二页是带样式的表格、编号列表与超链接" width="100%"><p align="center"><sub><b>引用。</b> 目录、脚注、APA / MLA / Chicago / IEEE 格式的引文、索引与题注。</sub></p></td>
</tr>
<tr>
<td width="50%" valign="top"><img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/design.png" alt="“设计”选项卡展示样式集预览；文档采用衬线主题，梅紫色标题由细横线点缀，文字背后有一层淡色的斜向 DRAFT 水印" width="100%"><p align="center"><sub><b>设计。</b> 主题、样式集、段落间距、水印、页面颜色与边框。</sub></p></td>
<td width="50%" valign="top"><img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/dark.png" alt="WordCraft 深色模式，展开“插入”选项卡并显示格式标记：段落结尾的回车符、空格处的小圆点" width="100%"><p align="center"><sub><b>深色模式</b> 与格式标记，以及“插入”选项卡：表格、图片、形状、链接、页眉页脚、域与符号。</sub></p></td>
</tr>
<tr>
<td colspan="2"><img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/layout.png" alt="“布局”选项卡，80% 缩放：第一段以一个三行的首字下沉 E 开头，第二段旁边有一个深蓝色圆形，其段落文字环绕该图形并在行尾将 art-ist 断字，左侧页边距为每一行编号，页面四周有一圈细蓝边框" width="100%"><p align="center"><sub><b>布局。</b> 首字下沉、文字环绕图片与形状、自动断字、行号与页面边框。</sub></p></td>
</tr>
<tr>
<td colspan="2"><img src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/images/backstage.png" alt="“文件”选项卡起始页，带有“早上好”问候语，以及空白文档、工作室手册、信函、简历与报告等模板的缩略图，还有最近文档列表" width="100%"><p align="center"><sub><b>文件。</b> 从模板开始、打开最近文档、编辑属性、导出为 PDF 等其他格式。</sub></p></td>
</tr>
</table>

## 为何选择 WordCraft

- **熟悉。** 沿用 Word 的功能区选项卡、组、快捷键与行为：Enter 继续列表，
  Tab 降级列表，Ctrl/⌘+B 加粗光标下的单词，样式库实时预览样式，
  F4 重复上一步，F7 检查拼写，F8 扩展选区。
- **你的文件。** 打开并保存 .docx（OOXML），同时支持 .odt、.rtf、.html、.md、.tex（LaTeX）、.txt；可打开 Word 97–2003 的 .doc；导出 PDF
  时保留真实、可选中的文本、链接与书签。
- **快速。** 段落排版会被缓存，因此在一份 188 页的文档中输入时，重新排版仅需约
  1.4 毫秒；页面按需渲染。
- **无处不在。** 一套 Rust 代码库同时支持 macOS、Windows、Linux、BSD 与 Web。没有 Electron，没有
  Tauri：原生 [egui](https://github.com/emilk/egui) 直接运行于 GPU 之上。
- **为智能体而生。** 每个操作都是一个带 id 的命令。同样的 422 个命令驱动着
  功能区、键盘快捷键、命令搜索、命令行工具、JSON 控制通道以及一个
  MCP 服务器。
- **私密。** 拼写、语法乃至一切功能均可离线运行。
- **开放。** MIT 或 Apache-2.0。净室实现：基于公开规范与观察构建，
  所有素材均为原创或采用开放许可。

## 当前可用功能

| 领域 | 亮点 |
|---|---|
| **写作** | 配合输入法的快速输入、智能引号、自动更正、列表自动套用格式（`* `、`1. `）、破折号；词语、句子、段落级选区；拖拽选择；带格式剪贴板；撤销/重做；支持正则的查找与替换 |
| **格式** | 字体、字号、加粗/斜体/下划线、删除线、上标/下标、大小写、突出显示、颜色、字符间距、格式刷、更改大小写、清除格式 |
| **段落** | 对齐、缩进（可在标尺上拖拽）、间距、行距、带引导线的制表位、边框、底纹、与下段同页、孤行控制 |
| **样式** | 内置样式集、实时样式库、样式窗格、创建/修改/更新样式、样式集、主题 |
| **列表** | 项目符号、编号、多级列表、重新开始、设置值、自定义格式 |
| **表格** | 按网格插入、合并/拆分、带隔行底纹的样式、边框、底纹、跨页重复标题行、拆分跨页行、排序、公式、文本 ↔ 表格互转 |
| **页面** | 页边距、方向、纸张大小、分栏、分页符/分栏符/分节符、页眉和页脚（首页、奇数页/偶数页）、页码、水印、页面边框、行号、垂直对齐、首字下沉、自动断字 |
| **对象** | 图片（缩放、裁剪、重新着色、亮度/对比度、透明度、删除背景、图片样式、旋转）、形状、文本框、带文字环绕的浮动定位（四周型、上下型、衬于文字下方或浮于文字上方） |
| **引用** | 目录、脚注与尾注、引文与参考文献（APA、MLA、Chicago、IEEE）、题注、图表目录、交叉引用、索引、引文目录 |
| **审阅** | 带建议的拼写与语法、同义词库、字数统计、页边批注气球或批注窗格、修订、接受/拒绝、比较文档、限制编辑、辅助功能检查器、文档检查器 |
| **邮件功能** | 从 CSV 进行邮件合并、合并域、地址块、问候语行、规则、预览、收尾生成文档；信封与标签 |
| **视图** | 页面布局、Web 布局、草稿、阅读模式、聚焦、缩放、单页/多页、页宽、导航窗格、标尺、网格线、深色模式；界面语言支持 English、简体中文、繁體中文、日本語、Português (Brasil)、Español、Українська、Српски / Srpski 或 Eesti（默认跟随系统语言） |
| **文件** | .docx 读写（可在 Word 中打开）、Word 97–2003 .doc 导入、PDF 导出、.odt/.rtf/.html/.md/.tex/.txt 导入导出、页面图像 |

逐项、分领域的真实情况见 [ROADMAP.md](https://github.com/storytold/wordcraft/blob/main/ROADMAP.md)、
[对等性评估](https://github.com/storytold/wordcraft/blob/main/docs/target-app-parity.md) 以及自动生成的
[功能清单](https://github.com/storytold/wordcraft/blob/main/docs/parity-checklist.md)。

## 快速开始

```sh
git clone https://github.com/storytold/wordcraft
cd wordcraft
cargo run --release -p wordcraft -- --sample        # 带示例文档的桌面应用
cargo run --release -p wordcraft -- report.docx     # 打开一个文档
```

命令行：

```sh
wordcraft-cli convert report.docx report.pdf        # docx、pdf、odt、rtf、html、md、tex、txt、png
wordcraft-cli text report.docx                      # 纯文本
wordcraft-cli inspect report.docx                   # 以 JSON 输出文档结构
wordcraft-cli run --template sample \
  --cmd 'select.text={"text":"Membership"}' --cmd format.bold --save out.docx
```

Web 端：执行 `cd apps/wordcraft-web && trunk serve`，然后打开 <http://127.0.0.1:8771/?sample>。

## 面向 AI 智能体：CLI 与 MCP

WordCraft 从设计之初就既可由人驱动，也可由 AI 智能体驱动。

```sh
claude mcp add wordcraft -- wordcraft-cli mcp                  # 无界面的文档操作
wordcraft --control 7981 &                                     # 或驱动正在运行的应用……
claude mcp add wordcraft-app -- wordcraft-cli mcp --connect 127.0.0.1:7981
```

工具包括 `list_commands`、`execute`、`batch`、`type_text`、`select_text`、`inspect_document`、
`render_page`、`save_document`，以及在应用运行时的 `screenshot`、`click` 与 `key`。智能体
可通过 `inspect_document` 在无需截图的情况下核验结果。详见 [docs/mcp.md](https://github.com/storytold/wordcraft/blob/main/docs/mcp.md)
与[控制协议](https://github.com/storytold/wordcraft/blob/main/docs/control-protocol.md)。宏可记录任意命令序列并
回放（`tools.recordMacro`、`tools.macros`）。

## 日志

桌面应用会将日志记录写入标准错误，以及其偏好设置旁边的 `logs/wordcraft.log`：
在 Linux 上为 `$XDG_CONFIG_HOME/wordcraft/logs/`（默认 `~/.config/wordcraft/logs/`），
在 macOS 上为 `~/Library/Application Support/WordCraft/logs/`，在 Windows 上为 `%APPDATA%\WordCraft\logs\`。
从桌面菜单或 Dock 启动时没有终端，因此这个文件就是要附在
缺陷报告里的内容：.docx 中无法读取的部分、PDF 导出不得不舍弃的图片或字体，以及命令保护机制从中恢复的崩溃。
每次启动会把上一次的日志移到 `wordcraft.1.log`（再把那份移到 `wordcraft.2.log`），
因此一次崩溃运行的日志会在下次启动后保留；日志增长到 16 MiB 后停止写入。`--version` 不写文件，
以 `WORDCRAFT_NO_PREFS` 运行（智能体的测试运行）只写入标准错误。文档文本永远不会被记录；
崩溃信息会省略它所引用的文本。

默认情况下，WordCraft 自身的 crate 以 `info` 级别记录，其余一切以 `warn` 级别。
`RUST_LOG` 会将其替换为 env_logger 风格的规则，例如 `RUST_LOG=debug`、
`RUST_LOG=warn,wordcraft_docx=trace` 或 `RUST_LOG=info,wgpu_core=warn`；以 `*` 结尾的规则
覆盖所有以此开头的记录目标（`wordcraft*=debug`）。日志记录器位于
`apps/wordcraft/src/logging.rs`。

## 架构

| 层 | Crate | 职责 |
|---|---|---|
| L0 | `wordcraft-geom` | 单位与度量 |
| L1 | `wordcraft-doc`、`wordcraft-fonts`、`wordcraft-proof` | 文档模型与编辑；字体与文字成形；拼写、语法、断字 |
| L2 | `wordcraft-layout`、`wordcraft-docx`、`wordcraft-formats` | 断行、分页、表格、脚注、命中测试；OOXML；ODT/RTF/HTML/Markdown/TXT |
| L3 | `wordcraft-render`、`wordcraft-pdf` | 光栅化（vello_cpu）；PDF（krilla） |
| L4 | `wordcraft-engine` | 会话、撤销、422 个命令、Word 功能目录 |
| L5 | `wordcraft-mcp` | MCP 服务器 |
| L6 | `wordcraft-ui-egui` | Word 风格的前端（可替换） |
| apps | `wordcraft`、`wordcraft-cli`、`wordcraft-web` | 桌面、命令行、浏览器 |

`cargo xtask ci` 会运行格式化、clippy、约 800 个测试、素材署名检查、分层
检查以及 wasm 构建。贡献者与智能体指南见 [AGENTS.md](https://github.com/storytold/wordcraft/blob/main/AGENTS.md)。

## 路线图

WordCraft 目前处于 **alpha（内测）** 阶段。如今它已用命令覆盖 Word 功能区特性的 88%；
若计入深度、文件保真度、稳定性等其余维度，我们估计它在全面替代 Word 完成实际工作方面
约完成 60%，在典型专业人士的每周工作方面约 55%，在日常基础需求方面约 63%。
要达到 Beta（公测），还需要用真实世界的 .docx 文件进行测试、在往返过程中保留图表与 SmartArt、
让分页更接近 Word、进行一次稳定性排查，以及实现原生打印。详见
[ROADMAP.md](https://github.com/storytold/wordcraft/blob/main/ROADMAP.md) 与[我们的不足之处](https://github.com/storytold/wordcraft/blob/main/docs/gaps.md)。

## 下载

从 GitHub **下载 WordCraft**：[最新版本](https://github.com/storytold/wordcraft/releases/latest) 包含下列全部构建，[所有版本](https://github.com/storytold/wordcraft/releases) 则包含更早的版本及其说明。文件名中的 `<ver>` 为版本号，`SHA256SUMS.txt` 列出了每个文件的校验和。

### Windows

| 构建 | 安装包 | 便携版 |
|---|---|---|
| x64（64 位 Intel/AMD） | `wordcraft-<ver>-windows-x64.msi` | `wordcraft-<ver>-windows-x64-portable.zip` |
| arm64（骁龙及其他 ARM 电脑） | `wordcraft-<ver>-windows-arm64.msi` | `wordcraft-<ver>-windows-arm64-portable.zip` |
| x86（32 位） | `wordcraft-<ver>-windows-x86.msi` | `wordcraft-<ver>-windows-x86-portable.zip` |

安装包与可执行文件均经过代码签名。

**如果应用在 Windows 上无法打开：** 桌面应用默认仅初始化 DirectX 12。
让 wgpu 同时创建 OpenGL 实例，可能会在窗口出现前就让某些显卡驱动（AMD 的
`atio6axx.dll`）崩溃，表现为应用在任务管理器中一闪即退。`WGPU_BACKEND`
可覆盖默认设置用于排障（例如 `dx12` 或 `vulkan`）。在
PowerShell 中，于包含该可执行文件的文件夹下执行：

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\wordcraft.exe
Remove-Item Env:WGPU_BACKEND                     # 恢复后续启动的默认设置
```

显式指定 `gl` 可能在受影响的系统上再次引发驱动崩溃。macOS、Linux
与 Web 的默认后端保持不变。

**如果在较老的 Windows 电脑上运行缓慢：** 当 DirectX 12 找不到带对应驱动的独立显卡时
（例如 Windows 11 上的 Intel 第四代核显），它只会提供微软的软件渲染器，
由处理器逐帧绘制。此时 WordCraft 会改用 OpenGL，无需任何设置。日志文件会记录这一选择
（以 `graphics:` 开头的行）。`WGPU_BACKEND` 仍可覆盖它，例如 `$env:WGPU_BACKEND = "gl"` 或 `"dx12"`。

### macOS

| 构建 | 文件 | 说明 |
|---|---|---|
| 应用，通用版（Apple 芯片 + Intel） | `wordcraft-<ver>-macos-universal.dmg` | 已签名并公证 |
| 命令行工具，通用版 | `wordcraft-cli-<ver>-macos-universal.zip` | 已签名并公证 |

### Linux

| 格式 | x86_64 | aarch64（ARM64） | 说明 |
|---|---|---|---|
| AppImage | `wordcraft-<ver>-linux-x86_64.AppImage` | `wordcraft-<ver>-linux-aarch64.AppImage` | 随处可运行；通过 [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)（`.zsync` 文件）自我更新 |
| Flatpak | `wordcraft-<ver>-linux-x86_64.flatpak` | `wordcraft-<ver>-linux-aarch64.flatpak` | 沙箱隔离；`flatpak install --user <file>` |
| Debian/Ubuntu | `wordcraft-<ver>-linux-x86_64.deb` | `wordcraft-<ver>-linux-aarch64.deb` | |
| Fedora/RHEL/openSUSE | `wordcraft-<ver>-linux-x86_64.rpm` | `wordcraft-<ver>-linux-aarch64.rpm` | |
| 压缩包 | `wordcraft-<ver>-linux-x86_64.tar.gz` | `wordcraft-<ver>-linux-aarch64.tar.gz` | 可解压到任意位置 |

RISC-V（riscv64）：`wordcraft-<ver>-linux-riscv64.tar.gz`，为 glibc 2.39+（Ubuntu 24.04、Debian 13 及更新版本）交叉编译的压缩包。

### FreeBSD

| 构建 | 文件 |
|---|---|
| x86_64 | `wordcraft-<ver>-freebsd-x86_64.tar.gz` |

### Web（WebAssembly）

| 构建 | 文件 | 说明 |
|---|---|---|
| 静态站点 | `wordcraft-web-<ver>.zip` | 可在现代浏览器中运行；托管到任意静态服务器即可 |

## Crafting 应用系列

WordCraft 是 **Crafting 应用系列** 的一员：由
[ArtCraft](https://getartcraft.com/) 团队出品的免费、开源创意工具，每一款都用 Rust 从零写就，
且都能独立运行。

| | 应用 | 用途 | 代码 | 了解更多 |
|:-:|---|---|---|---|
| <img src="https://raw.githubusercontent.com/storytold/photocraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.photocraft.png" alt="" width="32" height="32"> | **PhotoCraft** | 图像编辑：图层、蒙版、文字与真正的 PSD 文件 | [GitHub](https://github.com/storytold/photocraft) | [官网](https://getartcraft.com/apps/photocraft) |
| <img src="https://raw.githubusercontent.com/storytold/vectorcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.vectorcraft.png" alt="" width="32" height="32"> | **VectorCraft** | 矢量插画 | [GitHub](https://github.com/storytold/vectorcraft) | [官网](https://getartcraft.com/apps/vectorcraft) |
| <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.filmcraft.png" alt="" width="32" height="32"> | **FilmCraft** | 视频剪辑、调色与音频 | [GitHub](https://github.com/storytold/filmcraft) | [官网](https://getartcraft.com/apps/filmcraft) |
| <img src="https://raw.githubusercontent.com/storytold/lightcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.lightcraft.png" alt="" width="32" height="32"> | **LightCraft** | 照片库与原始格式（raw）处理 | [GitHub](https://github.com/storytold/lightcraft) | [官网](https://getartcraft.com/apps/lightcraft) |
| <img src="https://raw.githubusercontent.com/storytold/pdfcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.pdfcraft.png" alt="" width="32" height="32"> | **PdfCraft** | PDF 的阅读、整理与保护 | [GitHub](https://github.com/storytold/pdfcraft) | [官网](https://getartcraft.com/apps/pdfcraft) |
| <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.effectcraft.png" alt="" width="32" height="32"> | **EffectCraft** | 动态图形与视觉特效 | [GitHub](https://github.com/storytold/effectcraft) | [官网](https://getartcraft.com/apps/effectcraft) |
| <img src="https://raw.githubusercontent.com/storytold/designcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.designcraft.png" alt="" width="32" height="32"> | **DesignCraft** | 页面排版与出版 | [GitHub](https://github.com/storytold/designcraft) | [官网](https://getartcraft.com/apps/designcraft) |
| <img src="https://raw.githubusercontent.com/storytold/wordcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.wordcraft.png" alt="" width="32" height="32"> | **WordCraft** | **写作与文档排版 · 你在这里** | [GitHub](https://github.com/storytold/wordcraft) | [官网](https://getartcraft.com/apps/wordcraft) |

以及 [**ArtCraft**](https://getartcraft.com/) 本身——我们面向想要真正掌控权的艺术家的 AI 图像与视频工作室。

<br>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="Join the ArtCraft community on Discord" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<h3 align="center">来和我们一起创作吧</h3>

<p align="center">
  我们的 Discord 是各类艺术家相聚的地方：绘画的、摄影的、绘画插图的、剪片的、
  排版的，以及还在摸索自己喜欢创作什么的人。分享你的作品，
  寻求帮助，告诉我们哪里不好用，或者告诉我们你希望这些工具能做什么。
  无论你用什么媒介、无论你入行多久，这里都欢迎你。
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><b>discord.gg/artcraft</b></a> ·
  <a href="https://getartcraft.com/">getartcraft.com</a> ·
  <a href="https://getartcraft.com/apps">Crafting 应用系列</a> ·
  <a href="https://getartcraft.com/apps/wordcraft">WordCraft</a>
</p>

## 许可证与致谢

WordCraft 采用双重许可，你可任选 [MIT](https://github.com/storytold/wordcraft/blob/main/LICENSE-MIT) 或 [Apache-2.0](https://github.com/storytold/wordcraft/blob/main/LICENSE-APACHE)。
版权所有 (c) 2026 ArtCraft 团队与 WordCraft 贡献者。必要的声明见 [NOTICE](https://github.com/storytold/wordcraft/blob/main/NOTICE)。

所捆绑的字体、图标、图像及其他素材保留各自的开放许可；每项的作者、来源与许可均列于
[ATTRIBUTION.md](https://github.com/storytold/wordcraft/blob/main/ATTRIBUTION.md)。

拼写词典与断字数据来自 Grady Ward 处于公共领域的 Moby Hyphenator II 词表。示例文档与模板均为
专为 WordCraft 撰写的原创文本。

[`docs/brand/`](https://github.com/storytold/wordcraft/blob/main/docs/brand/) 中的 ArtCraft 名称、字标与徽标是
ArtCraft 团队的商标，不受本许可证覆盖。它们只能原样、且只能作为本仓库与 WordCraft 的一部分使用，
并须遵守 [`docs/brand/LICENSE-brand.txt`](https://github.com/storytold/wordcraft/blob/main/docs/brand/LICENSE-brand.txt)。
分支版本与修改版本必须移除它们。

<sub>Microsoft 与 Microsoft Word 是微软集团公司的商标。Adobe、Photoshop、Illustrator、Premiere Pro、Lightroom、Acrobat、After Effects 与 InDesign 是 Adobe 公司在美国及/或其他国家/地区的商标或注册商标。WordCraft 是一个独立的开源项目，与微软公司或 Adobe 公司无隶属、赞助或背书关系；提及这些名称仅用于描述其所兼容的工作流。</sub>

<p align="center">
  <a href="https://getartcraft.com/"><img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/wordcraft/main/docs/brand/artcraft-mark.svg" width="28"></a><br>
  <sub>由 <a href="https://getartcraft.com/">ArtCraft</a> 团队与社区打造。</sub>
</p>
