export interface FeatureDomain {
  id: string;
  label: string;
  summary: string;
  items: string[];
  shot?: string;
  shotAlt?: string;
}

export interface Reason {
  title: string;
  body: string;
}

export interface Layer {
  tag: string;
  crates: string[];
  duty: string;
}

export interface Metric {
  value: string;
  unit: string;
  label: string;
}

export interface BuildFile {
  name: string;
  note?: string;
}

export interface DownloadGroup {
  label: string;
  files: BuildFile[];
}

export interface DownloadPlatform {
  id: string;
  label: string;
  groups: DownloadGroup[];
  note?: string;
}

export interface McpTool {
  name: string;
  duty: string;
  runtimeOnly?: boolean;
}

export interface AppEntry {
  name: string;
  duty: string;
  repo: string;
  site: string;
  icon: string;
  current?: boolean;
}

export const repoUrl = 'https://github.com/storytold/wordcraft';
export const releasesUrl = `${repoUrl}/releases`;
export const latestReleaseUrl = `${repoUrl}/releases/latest`;
export const discordUrl = 'https://discord.gg/artcraft';
export const artcraftUrl = 'https://getartcraft.com/';

export const platforms = [
  'macOS',
  'Windows',
  'Linux',
  'FreeBSD',
  'WebAssembly',
] as const;

export const formats = [
  '.docx',
  '.doc',
  '.odt',
  '.rtf',
  '.html',
  '.md',
  '.tex',
  '.txt',
  'PDF',
  'PNG',
] as const;

export const navLinks = [
  { href: '/#tour', label: '功能一览' },
  { href: '/#why', label: '为何选择' },
  { href: '/#features', label: '功能总览' },
  { href: '/#agents', label: '智能体' },
  { href: '/#download', label: '下载' },
  { href: '/quickstart', label: '快速开始' },
];

export const tourShots = [
  {
    src: '/images/screens/review.webp',
    alt: '审阅选项卡：修订、页边批注气球、接受与拒绝，以及输入时即进行的拼写与语法检查',
    caption: '审阅',
    detail: '修订、批注气球、接受与拒绝',
    span: 'md:col-span-7',
    ratio: '16/10',
    eager: false,
  },
  {
    src: '/images/screens/references.webp',
    alt: '引用选项卡：左右并排的两页，第一页是带点状引导线与页码的目录，第二页是带样式的表格、编号列表与超链接',
    caption: '引用',
    detail: '目录、脚注、APA / MLA / Chicago / IEEE 引文',
    span: 'md:col-span-5',
    ratio: '16/10',
    eager: false,
  },
  {
    src: '/images/screens/layout.webp',
    alt: '布局选项卡，80% 缩放：首字下沉、环绕圆形形状的段落文字、行号与页面边框',
    caption: '布局',
    detail: '首字下沉、文字环绕、自动断字、行号',
    span: 'md:col-span-5',
    ratio: '16/10',
    eager: false,
  },
  {
    src: '/images/screens/design.webp',
    alt: '设计选项卡展示样式集预览：衬线主题、梅紫色标题、淡色斜向 DRAFT 水印',
    caption: '设计',
    detail: '主题、样式集、段落间距、水印、页面颜色',
    span: 'md:col-span-7',
    ratio: '16/10',
    eager: false,
  },
  {
    src: '/images/screens/backstage.webp',
    alt: '文件选项卡起始页：早上好问候语、模板缩略图与最近文档列表',
    caption: '文件',
    detail: '从模板开始、最近文档、导出 PDF',
    span: 'md:col-span-7',
    ratio: '16/10',
    eager: false,
  },
  {
    src: '/images/screens/dark.webp',
    alt: '深色模式与格式标记，以及插入选项卡：表格、图片、形状、链接、页眉页脚、域与符号',
    caption: '深色模式',
    detail: '格式标记与插入选项卡',
    span: 'md:col-span-5',
    ratio: '16/10',
    eager: false,
  },
] as const;

export const reasons: Reason[] = [
  {
    title: '熟悉',
    body: '沿用 Word 的功能区选项卡、组、快捷键与行为。Enter 继续列表，Tab 降级列表，F4 重复上一步，样式库实时预览。',
  },
  {
    title: '你的文件',
    body: '打开并保存 .docx，同时支持 .odt、.rtf、.html、.md、.tex、.txt，并可打开 Word 97–2003 的 .doc。',
  },
  {
    title: '快速',
    body: '段落排版会被缓存，页面按需渲染。一份 188 页的文档中输入时，重新排版仅需约 1.4 毫秒。',
  },
  {
    title: '无处不在',
    body: '一套 Rust 代码库同时支持 macOS、Windows、Linux、BSD 与 Web。没有 Electron，也没有 Tauri。',
  },
  {
    title: '为智能体而生',
    body: '每个操作都是一个带 id 的命令。同样的 422 个命令驱动功能区、快捷键、命令行工具与 MCP 服务器。',
  },
  {
    title: '私密',
    body: '拼写、语法乃至一切功能均可离线运行。文档文本永远不会写进日志。',
  },
  {
    title: '开放',
    body: 'MIT 或 Apache-2.0。净室实现：基于公开规范与观察构建，所有素材均为原创或采用开放许可。',
  },
];

export const features: FeatureDomain[] = [
  {
    id: 'writing',
    label: '写作',
    summary: '输入即所得的日常手感，输入法、智能引号与列表自动套用都在。',
    items: [
      '配合输入法的快速输入与智能引号',
      '自动更正、列表自动套用格式、破折号',
      '词语、句子、段落三级选区与拖拽选择',
      '带格式剪贴板，撤销与重做',
      '支持正则表达式的查找与替换',
    ],
    shot: '/images/screens/dark.webp',
    shotAlt: '深色模式下打开的插入选项卡',
  },
  {
    id: 'format',
    label: '格式',
    summary: '字符级格式覆盖 Word 常用的全部开关。',
    items: [
      '字体、字号、加粗、斜体、下划线、删除线',
      '上标与下标、突出显示、颜色',
      '字符间距',
      '格式刷与清除格式',
      '更改大小写',
    ],
  },
  {
    id: 'paragraph',
    label: '段落',
    summary: '排版控制集中在段落上，标尺可直接拖拽缩进。',
    items: [
      '对齐与缩进（可在标尺上拖拽）',
      '段间距、行距、带引导线的制表位',
      '边框与底纹',
      '与下段同页、孤行控制',
    ],
  },
  {
    id: 'styles',
    label: '样式',
    summary: '样式库实时预览，样式窗格可直接新建与更新。',
    items: ['内置样式集与实时样式库', '样式窗格与样式集', '创建、修改、更新样式', '主题'],
    shot: '/images/screens/design.webp',
    shotAlt: '设计选项卡中的样式集预览',
  },
  {
    id: 'list',
    label: '列表',
    summary: '多级列表可以重新开始、指定起始值，并使用自定义格式。',
    items: ['项目符号与编号', '多级列表', '重新开始与设置值', '自定义编号格式'],
  },
  {
    id: 'table',
    label: '表格',
    summary: '按网格插入，跨页表格有专门的标题行与拆行处理。',
    items: [
      '按网格插入、合并与拆分',
      '带隔行底纹的表格样式、边框、底纹',
      '跨页重复标题行、拆分跨页行',
      '排序与公式',
      '文本与表格互转',
    ],
  },
  {
    id: 'page',
    label: '页面',
    summary: '从纸张大小到分栏符，页面级设置一应俱全。',
    items: [
      '页边距、方向、纸张大小',
      '分栏、分页符、分栏符、分节符',
      '页眉页脚（首页、奇数页 / 偶数页）与页码',
      '水印、页面边框、行号',
      '垂直对齐、首字下沉、自动断字',
    ],
    shot: '/images/screens/layout.webp',
    shotAlt: '布局选项卡下的页面设置',
  },
  {
    id: 'object',
    label: '对象',
    summary: '图片可以裁剪、重新着色、去掉背景，并按四种方式环绕文字。',
    items: [
      '图片缩放、裁剪、重新着色',
      '亮度与对比度、透明度、删除背景、图片样式、旋转',
      '形状与文本框',
      '浮动定位与文字环绕：四周型、上下型、衬于文字下方、浮于文字上方',
    ],
  },
  {
    id: 'reference',
    label: '引用',
    summary: '目录、脚注、引文与索引构成完整的学术写作链路。',
    items: [
      '目录与引文目录',
      '脚注与尾注',
      'APA、MLA、Chicago、IEEE 引文与参考文献',
      '题注、图表目录、交叉引用',
      '索引',
    ],
    shot: '/images/screens/references.webp',
    shotAlt: '引用选项卡中的目录与引文',
  },
  {
    id: 'review',
    label: '审阅',
    summary: '带建议的检查、修订留痕与批注，适合多人协作前的最后一轮。',
    items: [
      '带建议的拼写与语法',
      '同义词库与字数统计',
      '页边批注气球或批注窗格',
      '修订、接受与拒绝、比较文档',
      '限制编辑、辅助功能检查器、文档检查器',
    ],
    shot: '/images/screens/review.webp',
    shotAlt: '审阅选项卡中的修订与批注',
  },
  {
    id: 'mail',
    label: '邮件功能',
    summary: '从 CSV 出发的邮件合并，含地址块、问候语与规则。',
    items: [
      '从 CSV 进行邮件合并',
      '合并域、地址块、问候语行',
      '规则、预览、收尾生成文档',
      '信封与标签',
    ],
  },
  {
    id: 'view',
    label: '视图',
    summary: '九种界面语言，默认跟随系统。',
    items: [
      '页面布局、Web 布局、草稿、阅读模式、聚焦',
      '缩放、单页 / 多页、页宽',
      '导航窗格、标尺、网格线、深色模式',
      '界面语言：English、简体中文、繁體中文、日本語、Português (Brasil)、Español、Українська、Српски、Eesti',
    ],
  },
  {
    id: 'file',
    label: '文件',
    summary: '.docx 双向读写，导出的 PDF 保留真实可选中的文本。',
    items: [
      '.docx 读写，可在 Word 中打开',
      'Word 97–2003 .doc 导入',
      'PDF 导出，保留可选中的文本、链接与书签',
      '.odt、.rtf、.html、.md、.tex、.txt 导入导出',
      '页面图像',
    ],
    shot: '/images/screens/backstage.webp',
    shotAlt: '文件选项卡中的导出与最近文档',
  },
];

export const layers: Layer[] = [
  { tag: 'L0', crates: ['wordcraft-geom'], duty: '单位与度量' },
  {
    tag: 'L1',
    crates: ['wordcraft-doc', 'wordcraft-fonts', 'wordcraft-proof'],
    duty: '文档模型与编辑；字体与文字成形；拼写、语法、断字',
  },
  {
    tag: 'L2',
    crates: ['wordcraft-layout', 'wordcraft-docx', 'wordcraft-formats'],
    duty: '断行、分页、表格、脚注、命中测试；OOXML；ODT / RTF / HTML / Markdown / TXT',
  },
  { tag: 'L3', crates: ['wordcraft-render', 'wordcraft-pdf'], duty: '光栅化（vello_cpu）；PDF（krilla）' },
  { tag: 'L4', crates: ['wordcraft-engine'], duty: '会话、撤销、422 个命令、Word 功能目录' },
  { tag: 'L5', crates: ['wordcraft-mcp'], duty: 'MCP 服务器' },
  { tag: 'L6', crates: ['wordcraft-ui-egui'], duty: 'Word 风格的前端（可替换）' },
  { tag: 'apps', crates: ['wordcraft', 'wordcraft-cli', 'wordcraft-web'], duty: '桌面、命令行、浏览器' },
];

export const roadmapMetrics: Metric[] = [
  { value: '88', unit: '%', label: 'Word 功能区特性已由命令覆盖' },
  { value: '60', unit: '%', label: '全面替代 Word 完成实际工作的自估完成度' },
  { value: '55', unit: '%', label: '典型专业人士每周工作场景的自估完成度' },
  { value: '63', unit: '%', label: '日常基础需求的自估完成度' },
];

export const betaChecklist = [
  '用真实世界的 .docx 文件进行测试',
  '在往返过程中保留图表与 SmartArt',
  '让分页更接近 Word',
  '进行一次稳定性排查',
  '实现原生打印',
];

export const downloads: DownloadPlatform[] = [
  {
    id: 'windows',
    label: 'Windows',
    note: '安装包与可执行文件均经过代码签名。',
    groups: [
      {
        label: 'x64（64 位 Intel / AMD）',
        files: [
          { name: 'wordcraft-<ver>-windows-x64.msi' },
          { name: 'wordcraft-<ver>-windows-x64-portable.zip', note: '便携版' },
        ],
      },
      {
        label: 'arm64（骁龙及其他 ARM 电脑）',
        files: [
          { name: 'wordcraft-<ver>-windows-arm64.msi' },
          { name: 'wordcraft-<ver>-windows-arm64-portable.zip', note: '便携版' },
        ],
      },
      {
        label: 'x86（32 位）',
        files: [
          { name: 'wordcraft-<ver>-windows-x86.msi' },
          { name: 'wordcraft-<ver>-windows-x86-portable.zip', note: '便携版' },
        ],
      },
    ],
  },
  {
    id: 'macos',
    label: 'macOS',
    groups: [
      {
        label: '应用，通用版（Apple 芯片 + Intel）',
        files: [{ name: 'wordcraft-<ver>-macos-universal.dmg', note: '已签名并公证' }],
      },
      {
        label: '命令行工具，通用版',
        files: [{ name: 'wordcraft-cli-<ver>-macos-universal.zip', note: '已签名并公证' }],
      },
    ],
  },
  {
    id: 'linux',
    label: 'Linux',
    groups: [
      {
        label: 'AppImage',
        files: [
          { name: 'wordcraft-<ver>-linux-x86_64.AppImage', note: '随处可运行，自带 .zsync 更新' },
          { name: 'wordcraft-<ver>-linux-aarch64.AppImage' },
        ],
      },
      {
        label: 'Flatpak',
        files: [
          { name: 'wordcraft-<ver>-linux-x86_64.flatpak', note: 'flatpak install --user <file>' },
          { name: 'wordcraft-<ver>-linux-aarch64.flatpak' },
        ],
      },
      {
        label: 'Debian / Ubuntu',
        files: [{ name: 'wordcraft-<ver>-linux-x86_64.deb' }, { name: 'wordcraft-<ver>-linux-aarch64.deb' }],
      },
      {
        label: 'Fedora / RHEL / openSUSE',
        files: [{ name: 'wordcraft-<ver>-linux-x86_64.rpm' }, { name: 'wordcraft-<ver>-linux-aarch64.rpm' }],
      },
      {
        label: '压缩包',
        files: [{ name: 'wordcraft-<ver>-linux-x86_64.tar.gz' }, { name: 'wordcraft-<ver>-linux-aarch64.tar.gz' }],
      },
      {
        label: 'RISC-V（riscv64）',
        files: [{ name: 'wordcraft-<ver>-linux-riscv64.tar.gz', note: 'glibc 2.39+（Ubuntu 24.04、Debian 13 及更新版本）' }],
      },
    ],
  },
  {
    id: 'freebsd',
    label: 'FreeBSD',
    groups: [
      {
        label: 'x86_64',
        files: [{ name: 'wordcraft-<ver>-freebsd-x86_64.tar.gz' }],
      },
    ],
  },
  {
    id: 'web',
    label: '网页',
    groups: [
      {
        label: '静态站点（WebAssembly）',
        files: [{ name: 'wordcraft-web-<ver>.zip', note: '托管到任意静态服务器即可' }],
      },
    ],
  },
];

export const mcpTools: McpTool[] = [
  { name: 'list_commands', duty: '列出全部可用命令及其参数' },
  { name: 'execute', duty: '执行单条带 id 的命令' },
  { name: 'batch', duty: '按顺序执行一组命令' },
  { name: 'type_text', duty: '在光标处输入文本' },
  { name: 'select_text', duty: '按文本或范围建立选区' },
  { name: 'inspect_document', duty: '以 JSON 输出文档结构，无需截图即可核验结果' },
  { name: 'render_page', duty: '渲染指定页面为图像' },
  { name: 'save_document', duty: '保存当前文档' },
  { name: 'screenshot', duty: '截取应用窗口', runtimeOnly: true },
  { name: 'click', duty: '点击界面元素', runtimeOnly: true },
  { name: 'key', duty: '发送按键', runtimeOnly: true },
];

export const craftingApps: AppEntry[] = [
  {
    name: 'PhotoCraft',
    duty: '图像编辑：图层、蒙版、文字与真正的 PSD 文件',
    repo: 'https://github.com/storytold/photocraft',
    site: 'https://getartcraft.com/apps/photocraft',
    icon: '/images/apps/photocraft.png',
  },
  {
    name: 'VectorCraft',
    duty: '矢量插画',
    repo: 'https://github.com/storytold/vectorcraft',
    site: 'https://getartcraft.com/apps/vectorcraft',
    icon: '/images/apps/vectorcraft.png',
  },
  {
    name: 'FilmCraft',
    duty: '视频剪辑、调色与音频',
    repo: 'https://github.com/storytold/filmcraft',
    site: 'https://getartcraft.com/apps/filmcraft',
    icon: '/images/apps/filmcraft.png',
  },
  {
    name: 'LightCraft',
    duty: '照片库与原始格式处理',
    repo: 'https://github.com/storytold/lightcraft',
    site: 'https://getartcraft.com/apps/lightcraft',
    icon: '/images/apps/lightcraft.png',
  },
  {
    name: 'PdfCraft',
    duty: 'PDF 的阅读、整理与保护',
    repo: 'https://github.com/storytold/pdfcraft',
    site: 'https://getartcraft.com/apps/pdfcraft',
    icon: '/images/apps/pdfcraft.png',
  },
  {
    name: 'EffectCraft',
    duty: '动态图形与视觉特效',
    repo: 'https://github.com/storytold/effectcraft',
    site: 'https://getartcraft.com/apps/effectcraft',
    icon: '/images/apps/effectcraft.png',
  },
  {
    name: 'DesignCraft',
    duty: '页面排版与出版',
    repo: 'https://github.com/storytold/designcraft',
    site: 'https://getartcraft.com/apps/designcraft',
    icon: '/images/apps/designcraft.png',
  },
  {
    name: 'WordCraft',
    duty: '写作与文档排版 · 你在这里',
    repo: repoUrl,
    site: 'https://getartcraft.com/apps/wordcraft',
    icon: '/images/apps/wordcraft.png',
    current: true,
  },
];