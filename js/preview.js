const themes = {
    // 1. Ocean Deep - 深蓝主题(对应第一张截图)
    'ocean-deep': {
        name: 'Ocean Deep',
        colors: {
            primary: {
                base: '#0EA5E9',    // 主蓝色
                light: '#38BDF8',   // 浅蓝色
                dark: '#0369A1'     // 深蓝色
            },
            background: {
                dark: '#0F172A',    // 深色背景
                medium: '#1E293B',  // 中等背景
                light: '#334155'    // 浅色背景
            },
            text: {
                primary: '#F1F5F9', // 主要文字
                secondary: '#94A3B8' // 次要文字
            }
        },
        styles: `
            .reveal[data-theme="ocean-deep"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
        `
    },

    // 2. Coastal Morning - 浅色主题(对应第二张截图)
    'coastal-morning': {
        name: 'Coastal Morning',
        colors: {
            primary: {
                base: '#0284C7',     // 主蓝色
                light: '#38BDF8',    // 浅蓝色
                dark: '#075985'      // 深蓝色
            },
            background: {
                light: '#F0F9FF',    // 浅色背景
                medium: '#E0F2FE',   // 中等背景
                dark: '#BAE6FD'      // 深色背景
            },
            text: {
                primary: '#0F172A',  // 主要文字
                secondary: '#334155' // 次要文字
            }
        }
    },

    // 3. Lavender Dream - 紫色主题(对应第三张截图)
    'lavender-dream': {
        name: 'Lavender Dream',
        colors: {
            primary: {
                base: '#9333EA',     // 主紫色
                light: '#A855F7',    // 浅紫色
                dark: '#7E22CE'      // 深紫色
            },
            background: {
                light: '#FAF5FF',    // 浅色背景
                medium: '#F3E8FF',   // 中等背景
                dark: '#E9D5FF'      // 深色背景
            },
            text: {
                primary: '#1E1B4B',  // 主要文字
                secondary: '#4338CA' // 次要文字
            }
        }
    },

    // 4. Midnight Navy - 深蓝主题(对应第四张截图)
    'midnight-navy': {
        name: 'Midnight Navy',
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
        }
    },

    // 5. Sunset Flame - 橙色主题(对应第五张截图)
    'sunset-flame': {
        name: 'Sunset Flame',
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
        }
    },

    // 6. Forest Breeze - 绿色主题(对应第六张截图)
    'forest-breeze': {
        name: 'Forest Breeze',
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
        }
    },

    // 7. Tech Blue - 科技蓝主题(对应第七张截图)
    'tech-blue': {
        name: 'Tech Blue',
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

    // 8. Mint Fresh - 薄荷绿主题(对应第八张截图)
    'mint-fresh': {
        name: 'Mint Fresh',
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/black.css" id="theme">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
            
            <style>
                /* Ocean Deep Theme - 深蓝主题 */
                .reveal[data-theme="ocean-deep"] {
                    background: #1E1E1E;
                    color: #FFFFFF;
                }
                .reveal[data-theme="ocean-deep"] .slides section {
                    background: rgba(30, 41, 59, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                /* Coastal Morning Theme - 浅色主题 */
                .reveal[data-theme="coastal-morning"] {
                    background: #F0F9FF;
                    color: #1E293B;
                }
                .reveal[data-theme="coastal-morning"] .slides section {
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }

                /* Lavender Dream Theme - 紫色主题 */
                .reveal[data-theme="lavender-dream"] {
                    background: #F5F3F7;
                    color: #4A4A4A;
                }
                .reveal[data-theme="lavender-dream"] .slides section {
                    background: #FFFFFF;
                    border: 1px solid rgba(147, 51, 234, 0.1);
                }

                /* Midnight Navy Theme - 深蓝主题 */
                .reveal[data-theme="midnight-navy"] {
                    background: #0F172A;
                    color: #F8FAFC;
                }
                .reveal[data-theme="midnight-navy"] .slides section {
                    background: rgba(30, 41, 59, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                /* Sunset Flame Theme - 橙色深色主题 */
                .reveal[data-theme="sunset-flame"] {
                    background: #1D1F21;
                    color: #FFFFFF;
                }
                .reveal[data-theme="sunset-flame"] .slides section {
                    background: rgba(44, 46, 48, 0.8);
                    border: 1px solid rgba(255, 102, 0, 0.1);
                }

                /* Forest Breeze Theme - 绿色主题 */
                .reveal[data-theme="forest-breeze"] {
                    background: #F5ECD7;
                    color: #353535;
                }
                .reveal[data-theme="forest-breeze"] .slides section {
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(143, 191, 159, 0.2);
                }

                /* Tech Blue Theme - 科技蓝主题 */
                .reveal[data-theme="tech-blue"] {
                    background: #1E293B;
                    color: #CBD5E1;
                }
                .reveal[data-theme="tech-blue"] .slides section {
                    background: rgba(51, 65, 85, 0.7);
                    border: 1px solid rgba(37, 99, 235, 0.1);
                }

                /* Mint Fresh Theme - 薄荷绿主题 */
                .reveal[data-theme="mint-fresh"] {
                    background: #E0F2F1;
                    color: #263339;
                }
                .reveal[data-theme="mint-fresh"] .slides section {
                    background: #FFFFFF;
                    border: 1px solid rgba(38, 166, 154, 0.1);
                }

                /* 通用样式 */
                .reveal .slides section {
                    border-radius: 16px;
                    padding: 40px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                }

                .reveal h1 {
                    font-size: 42px;
                    font-weight: 700;
                    margin-bottom: 0.8em;
                }

                .reveal h2 {
                    font-size: 34px;
                    font-weight: 600;
                }

                .reveal h3 {
                    font-size: 28px;
                    font-weight: 500;
                }

                .reveal p,
                .reveal ul,
                .reveal ol {
                    font-size: 26px;
                    line-height: 1.6;
                }

                .reveal pre {
                    border-radius: 8px;
                    padding: 1em;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .reveal code {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 22px;
                }

                /* 主题选择器样式 */
                .theme-select {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                    padding: 8px 12px;
                    background: rgba(0, 0, 0, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    color: white;
                    font-family: inherit;
                    font-size: 14px;
                    backdrop-filter: blur(10px);
                }
            </style>
        </head>
        <body>
            <select class="theme-select" id="theme-select">
                <option value="ocean-deep">Ocean Deep</option>
                <option value="coastal-morning">Coastal Morning</option>
                <option value="lavender-dream">Lavender Dream</option>
                <option value="midnight-navy">Midnight Navy</option>
                <option value="sunset-flame">Sunset Flame</option>
                <option value="forest-breeze">Forest Breeze</option>
                <option value="tech-blue">Tech Blue</option>
                <option value="mint-fresh">Mint Fresh</option>
            </select>

            <div class="reveal">
                <div class="slides">
                    ${slides}
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/markdown/markdown.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/math/math.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/zoom/zoom.js"></script>

            <script>
                window.addEventListener('load', function() {
                    Reveal.initialize({
                        hash: true,
                        center: false,
                        progress: true,
                        slideNumber: 'c/t',
                        plugins: [ RevealMarkdown, RevealHighlight, RevealMath, RevealZoom ]
                    });

                    // 设置默认主题
                    document.querySelector('.reveal').setAttribute('data-theme', 'ocean-deep');

                    // 主题切换
                    document.getElementById('theme-select').addEventListener('change', (e) => {
                        document.querySelector('.reveal').setAttribute('data-theme', e.target.value);
                        setTimeout(() => Reveal.layout(), 100);
                    });
                });
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