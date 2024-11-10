const themes = {
    // 1. 深海蓝
    'deep-sea': {
        name: '深海蓝',
        colors: {
            primary: {
                base: '#0EA5E9',    // 更现代的蓝色
                light: '#38BDF8',   // 清新的浅蓝色
                dark: '#0369A1'     // 沉稳的深蓝色
            },
            background: {
                dark: '#0F172A',    // 深邃的背景色
                medium: '#1E293B',  // 优雅的中间色
                light: '#334155'    // 柔和的浅色
            },
            text: {
                primary: '#F8FAFC',   // 清晰的主文本
                secondary: '#94A3B8'  // 柔和的次要文本
            },
            accent: {
                light: '#BAE6FD',    // 点缀的浅色
                dark: '#0284C7'      // 强调的深色
            }
        },
        styles: `
            .reveal[data-theme="deep-sea"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="deep-sea"] .slides section {
                background: var(--bg-200);
                border: 1px solid var(--bg-300);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
        `
    },

    // 2. 晨光白
    'morning-light': {
        name: '晨光白',
        colors: {
            primary: {
                base: '#71c4ef',    // 清新的蓝色
                light: '#d4eaf7',   // 柔和的浅蓝
                dark: '#00668c'     // 稳重的深蓝
            },
            background: {
                light: '#fffefb',   // 纯净的白色
                medium: '#f5f4f1',  // 温和的灰白
                dark: '#cccbc8'     // 柔和的深灰
            },
            text: {
                primary: '#1d1c1c',   // 清晰的黑色
                secondary: '#313d44'  // 优雅的灰色
            }
        },
        styles: `
            .reveal[data-theme="morning-light"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="morning-light"] .slides section {
                background: rgba(245, 244, 241, 0.9);
                border: 1px solid rgba(204, 203, 200, 0.2);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
        `
    },

    // 3. 梦幻紫
    'dream-purple': {
        name: '梦幻紫',
        colors: {
            primary: {
                base: '#9333EA',     // 梦幻的紫色
                light: '#A855F7',    // 轻盈的浅紫
                dark: '#7E22CE'      // 神秘的深紫
            },
            background: {
                light: '#FAF5FF',    // 柔和的背景
                medium: '#F3E8FF',   // 淡雅的中间色
                dark: '#E9D5FF'      // 优雅的深色
            },
            text: {
                primary: '#1E1B4B',  // 沉稳的主文本
                secondary: '#4338CA'  // 活力的次要文本
            }
        },
        styles: `
            .reveal[data-theme="dream-purple"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="dream-purple"] .slides section {
                background: var(--bg-200);
                border: 1px solid var(--bg-300);
                box-shadow: 0 4px 20px rgba(147, 51, 234, 0.1);
            }
        `
    },

    // 4. 深邃蓝
    'deep-blue': {
        name: '深邃蓝',
        colors: {
            primary: {
                base: '#2563EB',     // 主蓝色
                light: '#3B82F6',    // 浅蓝色
                dark: '#1D4ED8'      // 深蓝色
            },
            background: {
                dark: '#0F172A',     // 深色背景
                medium: '#1E293B',   // 中等背景
                light: '#334155'     // 浅色背景
            },
            text: {
                primary: '#F8FAFC',  // 主要文字
                secondary: '#CBD5E1' // 次要文字
            }
        },
        styles: `
            .reveal[data-theme="deep-blue"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="deep-blue"] .slides section {
                background: var(--bg-200);
                border: 1px solid var(--bg-300);
                box-shadow: 0 4px 15px rgba(37, 99, 235, 0.1);
            }
        `
    },

    // 5. 橙光夕阳
    'sunset-orange': {
        name: '橙光夕阳',
        colors: {
            primary: {
                base: '#F97316',     // 主橙色
                light: '#FB923C',    // 浅橙色
                dark: '#EA580C'      // 深橙色
            },
            background: {
                dark: '#0F172A',     // 深色背景
                medium: '#1E293B',   // 中等背景
                light: '#334155'     // 浅色背景
            },
            text: {
                primary: '#F8FAFC',  // 主要文字
                secondary: '#CBD5E1' // 次要文字
            }
        },
        styles: `
            .reveal[data-theme="sunset-orange"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="sunset-orange"] .slides section {
                background: var(--bg-200);
                border: 1px solid var(--bg-300);
                box-shadow: 0 4px 15px rgba(249, 115, 22, 0.1);
            }
        `
    },

    // 6. 翠绿森林
    'forest-green': {
        name: '翠绿森林',
        colors: {
            primary: {
                base: '#059669',     // 主绿色
                light: '#10B981',    // 浅绿色
                dark: '#047857'      // 深绿色
            },
            background: {
                light: '#F1F5F9',    // 浅色背景
                medium: '#E2E8F0',   // 中等背景
                dark: '#CBD5E1'      // 深色背景
            },
            text: {
                primary: '#0F172A',  // 主要文字
                secondary: '#334155' // 次要文字
            }
        },
        styles: `
            .reveal[data-theme="forest-green"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="forest-green"] .slides section {
                background: var(--bg-200);
                border: 1px solid var(--bg-300);
                box-shadow: 0 4px 15px rgba(5, 150, 105, 0.1);
            }
        `
    },

    // 7. 科技感
    'tech-style': {
        name: '科技感',
        colors: {
            primary: {
                base: '#2563EB',     // 主蓝色
                light: '#3B82F6',    // 浅蓝色
                dark: '#1D4ED8'      // 深蓝色
            },
            accent: {
                primary: '#D946EF',  // 亮紫色
                light: '#F0ABFC'     // 浅紫色
            },
            background: {
                dark: '#0F172A',     // 深色背景
                medium: '#1E293B',   // 中等背景
                light: '#334155'     // 浅色背景
            },
            text: {
                primary: '#F8FAFC',  // 主要文字
                secondary: '#CBD5E1' // 次要文字
            }
        }
    },

    // 8. 薄荷清新
    'mint-fresh': {
        name: '薄荷清新',
        colors: {
            primary: {
                base: '#10B981',     // 主绿色
                light: '#34D399',    // 浅绿色
                dark: '#059669'      // 深绿色
            },
            background: {
                light: '#ECFDF5',    // 浅色背景
                medium: '#D1FAE5',   // 中等背景
                dark: '#A7F3D0'      // 深色背景
            },
            text: {
                primary: '#064E3B',  // 主要文字
                secondary: '#065F46' // 次要文字
            }
        }
    }
}; 

// 导出预览函数
export function previewPresentation(filename, content) {
    console.log(`开始预览文件: ${filename}`);
    
    const slides = processContent(content);
    const previewWindow = window.open('', '_blank');
    
    const previewHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${filename} - 演示文稿预览</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reset.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
            
            <style>
                /* 础样式 */
                :root {
                    --slide-width: 1280px;
                    --slide-height: 720px;
                }

                body {
                    margin: 0;
                    padding: 0;
                    background: #000;
                }

                .reveal {
                    font-family: 'Noto Sans SC', sans-serif;
                }

                .reveal .slides section {
                    width: var(--slide-width);
                    height: var(--slide-height);
                    padding: 40px;
                    box-sizing: border-box;
                    text-align: left;
                }

                /* 标题样式 */
                .reveal h1 {
                    font-size: 2.5em;
                    font-weight: 700;
                    margin-bottom: 0.5em;
                    border-bottom: 2px solid var(--primary-base);
                    padding-bottom: 0.2em;
                }

                .reveal h2 {
                    font-size: 1.8em;
                    font-weight: 600;
                    margin-bottom: 0.8em;
                }

                .reveal h3 {
                    font-size: 1.4em;
                    font-weight: 500;
                    margin-bottom: 0.5em;
                }

                /* 内容样式 */
                .reveal p {
                    font-size: 1.2em;
                    line-height: 1.6;
                    margin-bottom: 1em;
                }

                .reveal ul, .reveal ol {
                    font-size: 1.1em;
                    line-height: 1.6;
                    margin-left: 1em;
                }

                .reveal li {
                    margin-bottom: 0.5em;
                }

                /* 代码块样式 */
                .reveal pre {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.9em;
                    line-height: 1.4;
                    padding: 1em;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }

                /* 主题选择器 */
                .theme-select {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 9999;
                    padding: 8px 12px;
                    font-family: inherit;
                    font-size: 14px;
                    border-radius: 4px;
                    background: rgba(0,0,0,0.6);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                }

                /* 进度条 */
                .reveal .progress {
                    height: 4px;
                }

                /* 导航箭头 */
                .reveal .controls {
                    color: var(--primary-base);
                }

                /* 幻灯片阴影效果 */
                .reveal .slides section {
                    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }
            </style>
        </head>
        <body>
            <!-- 主题选择器 -->
            <select class="theme-select" id="theme-select">
                <option value="deep-sea">深海蓝</option>
                <option value="morning-light">晨光白</option>
                <option value="dream-purple">梦幻紫</option>
                <option value="deep-blue">深邃蓝</option>
                <option value="sunset-orange">橙光夕阳</option>
                <option value="forest-green">翠绿森林</option>
                <option value="tech-style">科技感</option>
                <option value="mint-fresh">薄荷清新</option>
            </select>

            <!-- 演示文稿容器 -->
            <div class="reveal">
                <div class="slides">
                    ${slides}
                </div>
            </div>

            <!-- 脚本 -->
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/markdown/markdown.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/math/math.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/zoom/zoom.js"></script>

            <script>
                const themes = ${JSON.stringify(themes)};

                // 初始化 reveal.js
                window.addEventListener('load', function() {
                    Reveal.initialize({
                        width: 1280,
                        height: 720,
                        margin: 0.04,
                        minScale: 0.2,
                        maxScale: 2.0,
                        center: true,
                        hash: true,
                        progress: true,
                        slideNumber: 'c/t',
                        plugins: [ RevealMarkdown, RevealHighlight, RevealMath, RevealZoom ]
                    }).then(() => {
                        // 设置默认主题
                        applyTheme('deep-sea');

                        // 监听主题切换
                        document.getElementById('theme-select').addEventListener('change', (e) => {
                            applyTheme(e.target.value);
                        });
                    });
                });

                // 应用主题
                function applyTheme(themeName) {
                    const theme = themes[themeName];
                    if (!theme) return;

                    const reveal = document.querySelector('.reveal');
                    
                    // 应用主题样式
                    document.body.style.backgroundColor = theme.colors.background.dark;
                    reveal.style.backgroundColor = theme.colors.background.dark;
                    reveal.style.color = theme.colors.text.primary;

                    // 应用幻灯片样式
                    document.querySelectorAll('.reveal .slides section').forEach(slide => {
                        slide.style.backgroundColor = theme.colors.background.medium;
                        slide.style.borderColor = theme.colors.background.light;
                    });

                    // 应用标题样式
                    document.querySelectorAll('.reveal h1, .reveal h2, .reveal h3').forEach(heading => {
                        heading.style.color = theme.colors.primary.base;
                    });

                    reveal.setAttribute('data-theme', themeName);
                    Reveal.layout();
                }
            </script>
        </body>
        </html>
    `;

    previewWindow.document.write(previewHTML);
    previewWindow.document.close();
}

// 处理 Markdown 内容
function processContent(content) {
    console.log('处理 Markdown 内容');
    content = content.replace(/^---[\s\S]*?---\n/m, '');
    return content.split(/(?=^#{1,6}\s)/m)
        .filter(slide => slide.trim())
        .map(slide => `<section data-markdown><script type="text/template">\n${slide.trim()}\n</script></section>`)
        .join('\n');
} 