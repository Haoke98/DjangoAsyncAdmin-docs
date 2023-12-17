import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/DjangoAsyncAdmin-docs/',
    title: "DjangoAsyncAdmin",
    description: "Django 新的动态Admin , 具有异步请求, 异步列表页刷新和加载, UI更加美观. 基于vue2+ElementUI2.X来对传统的DjangoAdmin进行重写. 非常易于使用, 便于快速搭建高性能后台管理. ",
    lastUpdated: true,
    lang: 'en-US',
    themeConfig: {
        i18nRouting: true,
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: '安装', link: '/markdown-examples'},
            {
                text: '组件库',
                items: [
                    {text: 'Foo', link: '/foo'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            },
            {
                text: 'Demo',
                items: [
                    {text: '数字化世界', link: 'https://github.com/Haoke98/AllKeeper'},
                    {text: 'AI实验室🧪', link: '#'},
                    {text: '过程可视化数据处理引擎', link: '#'}
                ]
            },
            {text: 'Examples', link: '/markdown-examples'},
        ],
        logo: '/static/LOGO.png',
        // aside: 'left',

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Sadam·Sadik'
        },
        sidebar: [
            {
                text: 'Examples',
                items: [
                    {
                        text: 'Markdown Examples', items: [
                            {text: 'Introduction', link: '/introduction'},
                            {text: 'Getting Started', link: '/getting-started'}
                        ]
                    },
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            },
            {
                text: 'Guide',
                items: [
                    {text: 'Introduction', link: '/introduction'},
                    {text: 'Getting Started', link: '/getting-started'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Haoke98/DjangoAsyncAdmin'},
            // {icon: 'instagram', link: 'https://github.com/vuejs/vitepress'},
            // {icon: 'discord', link: 'https://github.com/vuejs/vitepress'},
            // {icon: 'x', link: 'https://github.com/vuejs/vitepress'}
        ],
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        }
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        zh: {
            label: '中文',
            lang: 'zh', // optional, will be added  as `lang` attribute on `html` tag

            // other locale specific properties...
        }
    }
})
