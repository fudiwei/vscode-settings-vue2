# VSCode 配置：Vue 项目开发环境

---

## 说明：

本项目是为了统一 VSCode 前端在开发 Vue 项目时所使用的格式化配置和 Lint 规则，规范代码风格，提升代码质量。

如果你的项目是基于 `Vue 3.x` 的，请移步 [vscode-settings-vue3](https://github.com/fudiwei/vscode-settings-vue3)。

包括如下功能：

-   基于 `Vue 2.x` + `Vue-CLI 3/4`。

-   解决了 `Prettier + ESlint + Vetur` 等几个插件冲突问题。

-   提供了主流前端项目的通用 `Git` 忽略项。

-   提供了 `TypeScript` 的支持。

其中有关格式化的配置作出了如下统一：

-   统一文件字符集：无 BOM 的 UTF-8；

-   统一文本缩进方式：4 个空格；

-   统一文本单行长度：120 个字符；

-   统一文本换行格式：CRLF（Windows）；

-   统一文本结尾空行：1 个；

-   统一 JavaScript 分号风格：强制包含结尾分号；

-   统一 JavaScript 引号风格：强制使用单引号；

-   其余未列出事项遵循各插件的默认值。

---

## 使用步骤：

### 安装 VSCode 插件

> 注意：以下插件在 VSCode 插件商店中可能存在多个同名搜索结果，请以括号内的插件名为准。

-   **EditorConfig for VS Code** (插件名：`editorconfig.editorconfig`)

-   **Prettier - Code formatter** (插件名：`esbenp.prettier-vscode`)

-   **ESLint** (插件名：`dbaeumer.vscode-eslint`)

-   **Vetur** (插件名：`octref.vetur`)

-   **AutoPrefixer**（插件名：`mrmlnc.vscode-autoprefixer`）

### 配置 VSCode

使用 `vue-cli` 脚手架初始化项目后，将本项目下除 `README.md` 外的全部文件，拷贝到对应开发项目的根目录中，覆盖同名文件。

### 安装 npm 依赖

> 注意：为了避免因版本问题造成的配置冲突，安装时请务必指定特定版本号。

```shell
# 以 npm 为例，使用 yarn 等其他包管理工具的请自行替换成相应命令。

npm install @babel/plugin-syntax-dynamic-import@7.8.3 --save-dev
npm install @babel/plugin-transform-async-to-generator@7.14.5 --save-dev
npm install @babel/plugin-transform-regenerator@7.14.5 --save-dev
npm install @babel/plugin-transform-runtime@7.15.8 --save-dev
npm install @babel/types@7.15.6 --save-dev
npm install @typescript-eslint/eslint-plugin@4.33.0 --save-dev
npm install @typescript-eslint/parser@4.33.0 --save-dev
npm install @vue/cli-plugin-babel@4.5.14 --save-dev
npm install @vue/cli-plugin-eslint@4.5.14 --save-dev
npm install @vue/cli-plugin-typescript@4.5.14 --save-dev
npm install @vue/eslint-config-prettier@6.0.0 --save-dev
npm install @vue/eslint-config-typescript@8.0.0 --save-dev
npm install babel-eslint@10.1.0 --save-dev
npm install babel-plugin-import@1.13.3 --save-dev
npm install eslint@7.32.0 --save-dev
npm install eslint-plugin-html@6.2.0 --save-dev
npm install eslint-plugin-prettier@3.4.1 --save-dev
npm install eslint-plugin-vue@7.20.0 --save-dev
npm install prettier@2.4.1 --save-dev
npm install vue-eslint-parser@7.11.0 --save-dev
```

### 开发

在 VSCode 内开始开发吧！

按 `Ctrl + S` 时文件就会自动格式化并执行 Lint 操作。
