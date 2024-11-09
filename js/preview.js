// 预览功能
export function previewPresentation(filename, content) {
    console.log(`开始预览文件: ${filename}`);
    
    // 处理 Markdown 内容
    function processContent(content) {
        console.log('开始处理 Markdown 内容');
        
        // 移除 YAML 头部
        content = content.replace(/^---[\s\S]*?---\n/m, '');
        console.log('已移除 YAML 头部');
        
        // 按标题分割内容为幻灯片
        const slides = content.split(/(?=^#{1,6}\s)/m)
            .filter(slide => slide.trim())
            .map(slide => `<section data-markdown><script type="text/template">\n${slide.trim()}\n</script></section>`)
            .join('\n');
            
        console.log(`处理完成，共生成 ${slides.split('</section>').length - 1} 张幻灯片`);
        return slides;
    }

    const slides = processContent(content);
    
    // 创建新的预览窗口
    console.log('创建预览窗口');
    const previewWindow = window.open('', '_blank');
    if (!previewWindow) {
        console.error('预览窗口创建失败');
        alert('请允许打开新窗口以预览演示文稿');
        return;
    }

    // 注入 reveal.js 相关代码
    console.log('开始注入 reveal.js 代码');
    const previewHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${filename} - 演示文稿预览</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reset.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/black.css" id="theme">
            
            <style>
                :root {
                    --theme-font-family: 'Microsoft YaHei', sans-serif;
                    --theme-code-font: 'Source Code Pro', monospace;
                    --theme-primary: #3B82F6;
                    --theme-secondary: #1F2937;
                }

                .reveal {
                    font-family: var(--theme-font-family);
                    font-size: 28px;
                }

                .reveal .slides {
                    text-align: left;
                }

                .reveal .slides section {
                    padding: 1em;
                }

                .reveal h1, .reveal h2, .reveal h3 {
                    color: var(--theme-primary);
                    margin-bottom: 0.8em;
                }

                .reveal pre {
                    margin: 1em 0;
                    padding: 1em;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    border-radius: 4px;
                }

                .reveal code {
                    font-family: var(--theme-code-font);
                    padding: 0.2em 0.4em;
                    border-radius: 3px;
                }

                .theme-select {
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    z-index: 1000;
                    padding: 8px;
                    border-radius: 4px;
                    background: rgba(0,0,0,0.6);
                    color: white;
                    border: 1px solid rgba(255,255,255,0.2);
                    font-family: var(--theme-font-family);
                }

                .theme-select option {
                    background: #2d2d2d;
                    color: white;
                    padding: 8px;
                }
            </style>
        </head>
        <body>
            <select class="theme-select" id="theme-select">
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="league">League</option>
                <option value="beige">Beige</option>
                <option value="sky">Sky</option>
                <option value="night">Night</option>
                <option value="serif">Serif</option>
                <option value="simple">Simple</option>
                <option value="solarized">Solarized</option>
                <option value="moon">Moon</option>
                <option value="blood">Blood</option>
            </select>

            <div class="reveal">
                <div class="slides">
                    ${slides}
                </div>
            </div>

            <script>
                console.log('开始加载 reveal.js 资源');
                
                async function loadScript(src) {
                    console.log('加载脚本:', src);
                    return new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = src;
                        script.onload = () => {
                            console.log('脚本加载成功:', src);
                            resolve();
                        };
                        script.onerror = (error) => {
                            console.error('脚本加载失败:', src, error);
                            reject(error);
                        };
                        document.head.appendChild(script);
                    });
                }

                async function initializeReveal() {
                    try {
                        console.log('开始加载 reveal.js 及插件');
                        await Promise.all([
                            loadScript('https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js'),
                            loadScript('https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/markdown/markdown.js'),
                            loadScript('https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js'),
                            loadScript('https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/math/math.js'),
                            loadScript('https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/zoom/zoom.js')
                        ]);
                        
                        console.log('初始化 Reveal.js');
                        Reveal.initialize({
                            hash: true,
                            plugins: [ RevealMarkdown, RevealHighlight, RevealMath, RevealZoom ],
                            width: 1200,
                            height: 700,
                            margin: 0.1,
                            controls: true,
                            progress: true,
                            center: false,
                            transition: 'slide',
                            slideNumber: true,
                            showNotes: false,
                            autoPlayMedia: true,
                            previewLinks: false
                        });

                        // 主题切换
                        document.getElementById('theme-select').addEventListener('change', (e) => {
                            const theme = e.target.value;
                            console.log('切换主题:', theme);
                            const link = document.getElementById('theme');
                            link.href = \`https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/\${theme}.css\`;
                            console.log('主题切换完成');
                        });

                    } catch (error) {
                        console.error('初始化失败:', error);
                    }
                }

                initializeReveal();
            </script>
        </body>
        </html>
    `;

    previewWindow.document.write(previewHTML);
    previewWindow.document.close();
    console.log('预览窗口创建完成');
} 