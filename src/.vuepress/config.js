import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  title: "Hexo-Theme-Ning安装指南",
  description: "ning,ning主题,ning主题,博客,简单的hexo主题,简洁的hexo主题,hexo",
  lang: "zh-CN",
  base: "/docs/",
  head: [["link", { rel: "icon", href: "https://www.yuanning0818.tk/logo.png" }]],
  theme: defaultTheme({
    sidebarDepth: 1,
    logo: "https://www.yuanning0818.tk/logo.png",
    contributorsText: "贡献者",
    lastUpdatedText: "上次更新",
    navbar: [
      { text: "指南", link: "/" },
      { text: "Github", link: "https://github.com/ning0818/hexo-theme-ning/" },
      { text: "作者博客", link: "https://www.yuanning0818.tk/" },
    ],
    sidebar: [
      {
        text: "简介",
        link: "/",
      },
      {
        text: "快速上手",
        link: "/quick-start.html",
      },
      {
        text: "页面配置",
        link: "/page-configuration.html",
      },
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
    copyCodePlugin({
      // your options
    }),
    mdEnhancePlugin({
      align: true,
      attrs: true,
      card: true,
      tabs: true,
      container: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    }),
  ],
});