const themes = {
    // 1. 深海蓝 - 更现代的配色方案
    'deep-sea': {
        name: '深海蓝',
        colors: {
            primary: {
                base: '#3B82F6',    // 明亮的蓝色
                light: '#60A5FA',   // 清新的浅蓝色
                dark: '#2563EB'     // 沉稳的深蓝色
            },
            background: {
                dark: '#1E293B',    // 深邃的背景色
                medium: '#334155',  // 优雅的中间色
                light: '#475569'    // 柔和的浅色
            },
            text: {
                primary: '#F8FAFC',   // 清晰的主文本
                secondary: '#CBD5E1'  // 柔和的次要文本
            },
            accent: {
                light: '#93C5FD',    // 点缀的浅色
                dark: '#1D4ED8'      // 强调的深色
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
                box-shadow: 0 4px 15px rgba(15, 23, 42, 0.1);
            }
        `
    },

    // 2. 晨光白 - 更清新的配色
    'morning-light': {
        name: '晨光白',
        colors: {
            primary: {
                base: '#0EA5E9',    // 清新的蓝色
                light: '#38BDF8',   // 柔和的浅蓝
                dark: '#0369A1'     // 稳重的深蓝
            },
            background: {
                light: '#FFFFFF',   // 纯净的白色
                medium: '#F8FAFC',  // 温和的灰白
                dark: '#E2E8F0'     // 柔和的深灰
            },
            text: {
                primary: '#0F172A',   // 清晰的黑色
                secondary: '#475569'  // 优雅的灰色
            }
        },
        styles: `
            .reveal[data-theme="morning-light"] {
                background: var(--bg-100);
                color: var(--text-100);
            }
            .reveal[data-theme="morning-light"] .slides section {
                background: var(--bg-200);
                border: 1px solid var(--bg-300);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
        `
    },

    // 3. 梦幻紫 - 更柔和的配色
    'dream-purple': {
        name: '梦幻紫',
        colors: {
            primary: {
                base: '#8B5CF6',     // 梦幻的紫色
                light: '#A78BFA',    // 轻盈的浅紫
                dark: '#7C3AED'      // 神秘的深紫
            },
            background: {
                light: '#F5F3FF',    // 柔和的背景
                medium: '#EDE9FE',   // 淡雅的中间色
                dark: '#DDD6FE'      // 优雅的深色
            },
            text: {
                primary: '#2E1065',  // 沉稳的主文本
                secondary: '#5B21B6'  // 活力的次要文本
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
                box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
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

// 生成自定义样式
function generateCustomStyles() {
    return `
        /* 主题选择器样式 */
        .theme-select {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1000;
            padding: 0.5rem;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* 加载状态指示器 */
        .loading-indicator {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.2em;
            color: #fff;
            background: rgba(0,0,0,0.7);
            padding: 1em 2em;
            border-radius: 8px;
            display: none;
        }
        
        .loading .loading-indicator {
            display: block;
        }
    `;
}

// 添加主题应用函数
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    const colors = theme.colors;

    // 设置 CSS 变量
    root.style.setProperty('--bg-100', colors.background.dark);
    root.style.setProperty('--bg-200', colors.background.medium);
    root.style.setProperty('--bg-300', colors.background.light);
    root.style.setProperty('--text-100', colors.text.primary);
    root.style.setProperty('--text-200', colors.text.secondary);
    root.style.setProperty('--primary-100', colors.primary.base);
    root.style.setProperty('--primary-200', colors.primary.light);
    root.style.setProperty('--primary-300', colors.primary.dark);
    
    if (colors.accent) {
        root.style.setProperty('--accent-100', colors.accent.light);
        root.style.setProperty('--accent-200', colors.accent.dark);
    }

    // 应用主题特定样式
    const styleId = 'theme-specific-styles';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
        ${theme.styles}
        
        /* 全局主题样式 */
        .reveal {
            background: var(--bg-100);
            color: var(--text-100);
        }
        
        .reveal h1, .reveal h2, .reveal h3, 
        .reveal h4, .reveal h5, .reveal h6 {
            color: var(--primary-100);
        }
        
        .reveal strong {
            color: var(--primary-200);
        }
        
        .reveal a {
            color: var(--accent-100);
        }
        
        .reveal a:hover {
            color: var(--accent-200);
        }
        
        .reveal code {
            background: var(--bg-300);
            color: var(--text-100);
            padding: 0.2em 0.4em;
            border-radius: 4px;
        }
        
        .reveal pre code {
            background: var(--bg-200);
            padding: 1em;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .reveal blockquote {
            border-left: 4px solid var(--primary-100);
            background: var(--bg-200);
            padding: 0.5em 1em;
            margin: 1em 0;
        }
        
        /* 进度样式 */
        .reveal .progress {
            background: var(--bg-300);
        }
        
        .reveal .progress span {
            background: var(--primary-100);
        }
    `;
}

// 导出预览函数
export function previewPresentation(filename, content) {
    console.log(`开始预览文件: ${filename}`);
    
    const slides = processContent(content);
    const previewWindow = window.open('', '_blank');
    
    const previewHTML = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${filename} - Slidegen 预览</title>
            
            <!-- 核心样式 -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/black.css" id="theme-css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/monokai.css">
            
            <style>
                /* 基础布局优化 */
                .reveal {
                    font-size: 24px;  /* 减小基础字体大小 */
                    line-height: 1.4;
                }

                .reveal .slides section {
                    height: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                    overflow-y: auto;  /* 内容过多时允许滚动 */
                }

                /* 标题层级优化 */
                .reveal h1 { font-size: 1.8em; margin-bottom: 0.5em; }
                .reveal h2 { font-size: 1.5em; margin-bottom: 0.5em; }
                .reveal h3 { font-size: 1.3em; margin-bottom: 0.5em; }

                /* 图片优化 */
                .reveal img {
                    max-width: 90%;
                    max-height: 70vh;
                    object-fit: contain;
                    margin: 10px auto;
                }

                /* 主题选择器样式 */
                #theme-selector {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                    background: rgba(0, 0, 0, 0.7);
                    padding: 10px;
                    border-radius: 5px;
                    color: white;
                }

                /* 响应式布局 */
                @media screen and (max-width: 768px) {
                    .reveal { font-size: 20px; }
                    .reveal .slides section { padding: 15px; }
                }

                /* 图片相关样式 */
                .slide-image {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .slide-image.loaded {
                    opacity: 1;
                }

                .image-error-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(0, 0, 0, 0.05);
                    border: 2px dashed rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    margin: 10px 0;
                }

                .image-error-icon {
                    font-size: 48px;
                    color: #666;
                    margin-bottom: 10px;
                }

                .image-error-text {
                    color: #666;
                    text-align: center;
                }

                /* 自定义样式 */
                .reveal .slides {
                    text-align: left;  /* 设置为左对齐 */
                }
                .reveal .slides section {
                    height: 100%;
                    padding: 40px;
                }
                .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
                    text-align: left;  /* 标题左对齐 */
                    margin-bottom: 30px;
                }
                .reveal ul, .reveal ol {
                    display: block;
                    text-align: left;  /* 列表左对齐 */
                    margin-left: 0;
                    padding-left: 40px;
                }
                .reveal p {
                    text-align: left;  /* 段落左对齐 */
                    margin-bottom: 20px;
                }
                .reveal img {
                    max-height: 500px;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div id="theme-selector">
                <select id="theme-select" onchange="changeTheme(this.value)">
                    ${Object.entries(themes).map(([key, theme]) => 
                        `<option value="${key}">${theme.name}</option>`
                    ).join('')}
                </select>
            </div>

            <div class="reveal">
                <div class="slides">${slides}</div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/markdown/markdown.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/zoom/zoom.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/notes/notes.js"></script>

            <script>
                // 定义主题配置
                const themes = ${JSON.stringify(themes)};

                // 主题切换函数
                function changeTheme(themeName) {
                    const theme = themes[themeName];
                    if (!theme) return;

                    // 应用主题样式
                    document.documentElement.style.setProperty('--r-background-color', theme.colors.background.dark);
                    document.documentElement.style.setProperty('--r-main-color', theme.colors.text.primary);
                    document.documentElement.style.setProperty('--r-heading-color', theme.colors.primary.base);
                    document.documentElement.style.setProperty('--r-link-color', theme.colors.accent?.light || theme.colors.primary.light);

                    // 强制更新布局
                    Reveal.layout();
                }

                // 初始化 Reveal.js
                Reveal.initialize({
                    // 基础配置
                    width: '100%',
                    height: '100%',
                    margin: 0.04,
                    minScale: 0.2,
                    maxScale: 2.0,
                    
                    // 控制配置
                    controls: true,
                    progress: true,
                    center: false,
                    hash: true,

                    // 插件配置
                    plugins: [ RevealMarkdown, RevealHighlight, RevealZoom, RevealNotes ],

                    // 图片加载配置
                    preloadIframes: true,
                    async: true,

                    // Markdown 配置
                    markdown: {
                        smartypants: true,
                        breaks: true
                    }
                }).then(() => {
                    // 初始化默认主题
                    changeTheme('deep-sea');

                    // 处理图片加载
                    document.querySelectorAll('.reveal img').forEach(img => {
                        img.onerror = function() {
                            this.src = 'path/to/fallback-image.png';  // 设置加载失败的默认图片
                            this.alt = '图片加载失败';
                        };
                    });
                });

                // 修改图片错误处理函数
                function handleImageError(img, alt) {
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'image-error-container';
                    
                    // 使用字符串连接而不是模板字符串来避免语法错误
                    errorDiv.innerHTML = 
                        '<div class="image-error-icon">🖼️</div>' +
                        '<div class="image-error-text">' +
                            '<div>图片加载失败</div>' +
                            '<div style="font-size: 0.9em; opacity: 0.7;">' + (alt || '未命名图片') + '</div>' +
                        '</div>';
                    
                    if (img.parentNode) {
                        img.parentNode.replaceChild(errorDiv, img);
                    }
                }

                // 图片加载优化
                function optimizeImages() {
                    const images = document.querySelectorAll('.slide-image');
                    images.forEach(img => {
                        // 添加加载中状态
                        img.style.opacity = '0';
                        
                        // 图片加载完成
                        img.onload = () => {
                            img.style.opacity = '1';
                        };
                        
                        // 图片加载失败
                        img.onerror = () => {
                            handleImageError(img, img.alt);
                        };

                        // 如果图片已经缓存
                        if (img.complete) {
                            img.style.opacity = '1';
                        }
                    });
                }

                // 在 Reveal.js 初始化后优化图片
                Reveal.addEventListener('ready', () => {
                    optimizeImages();
                });

                // 在幻灯片切换时检查新片
                Reveal.addEventListener('slidechanged', () => {
                    optimizeImages();
                });
            </script>
        </body>
        </html>
    `;

    previewWindow.document.write(previewHTML);
    previewWindow.document.close();
}

// 处理 Markdown 内容，优化图片处理
function processContent(content) {
    console.log('处理 Markdown 内容');
    
    // 移除 frontmatter
    content = content.replace(/^---[\s\S]*?---\n/m, '');
    
    // 处理图片链接
    content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, url) => {
        return `
            ![${alt}](${url})
            <!-- .element: class="slide-image" 
                onload="this.classList.add('loaded')"
                onerror="handleImageError(this, '${alt}')"
                style="max-width: 90%; max-height: 70vh; transition: opacity 0.3s ease;" -->
        `;
    });

    // 分割幻灯片
    return content.split(/(?=^#{1,6}\s)/m)
        .filter(slide => slide.trim())
        .map(slide => `<section data-markdown><script type="text/template">\n${slide.trim()}\n</script></section>`)
        .join('\n');
}

// 使用 IIFE 避免全局变量污染
(function() {
    // ... 其他代码保持不变 ...
    
    // 修改图片错误处理
    function handleImageError(img, alt) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'image-error-container';
        
        // 使用字符串连接而不是模板字符串来避免语法错误
        errorDiv.innerHTML = 
            '<div class="image-error-icon">🖼️</div>' +
            '<div class="image-error-text">' +
                '<div>图片加载失败</div>' +
                '<div style="font-size: 0.9em; opacity: 0.7;">' + (alt || '未命名图片') + '</div>' +
            '</div>';
        
        if (img.parentNode) {
            img.parentNode.replaceChild(errorDiv, img);
        }
    }

    // 导出需要的函数
    window.previewPresentation = previewPresentation;
    window.handleImageError = handleImageError;
})();