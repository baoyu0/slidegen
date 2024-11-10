// 文件上传和列表管理功能
document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    // 从 localStorage 加载文件列表
    const loadSavedFiles = () => {
        const savedFiles = JSON.parse(localStorage.getItem('slidegen-files') || '[]');
        savedFiles.forEach(fileData => {
            addFileToList(fileData);
        });
    };

    // 保存文件列表到 localStorage
    const saveFilesList = () => {
        const files = Array.from(fileList.children).map(item => ({
            name: item.querySelector('span').textContent,
            content: item.dataset.content
        }));
        localStorage.setItem('slidegen-files', JSON.stringify(files));
    };

    // 点击上传区域触发文件选择
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // 处理文件拖放
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.8)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // 处理文件选择
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // 处理文件
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (file.name.endsWith('.md')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const content = e.target.result;
                    addFileToList({
                        name: file.name,
                        content: content
                    });
                    saveFilesList();
                };
                reader.readAsText(file);
            }
        });
    }

    // 添加文件到列表
    function addFileToList(fileData) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.dataset.content = fileData.content;
        
        const fileName = document.createElement('span');
        fileName.textContent = fileData.name;
        
        const actions = document.createElement('div');
        actions.className = 'file-actions';
        
        const previewBtn = document.createElement('button');
        previewBtn.className = 'btn-preview';
        previewBtn.textContent = '预览';
        previewBtn.onclick = () => previewFile(fileData);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.textContent = '删除';
        deleteBtn.onclick = () => {
            fileItem.remove();
            saveFilesList();
        };
        
        actions.appendChild(previewBtn);
        actions.appendChild(deleteBtn);
        
        fileItem.appendChild(fileName);
        fileItem.appendChild(actions);
        
        fileList.appendChild(fileItem);
    }

    // 预览文件
    function previewFile(fileData) {
        import('./preview.js').then(module => {
            module.previewPresentation(fileData.name, fileData.content);
        });
    }

    // 页面加载时恢复文件列表
    loadSavedFiles();

    // 主题模式切换功能
    const themeBtn = document.getElementById('theme-mode-btn');
    const themeMenu = document.getElementById('theme-mode-menu');
    const themeItems = document.querySelectorAll('.theme-mode-item');

    // 从 localStorage 获取保存的主题模式
    const savedTheme = localStorage.getItem('theme-mode') || 'system';
    applyTheme(savedTheme);

    // 切换菜单显示/隐藏
    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('show');
    });

    // 点击其他地方关闭菜单
    document.addEventListener('click', () => {
        themeMenu.classList.remove('show');
    });

    // 主题切换处理
    themeItems.forEach(item => {
        item.addEventListener('click', () => {
            const mode = item.dataset.mode;
            applyTheme(mode);
            localStorage.setItem('theme-mode', mode);
            themeMenu.classList.remove('show');
        });
    });

    // 应用主题
    function applyTheme(mode) {
        if (mode === 'system') {
            // 检测系统主题
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.setAttribute('data-theme', 'dark');
            } else {
                document.body.setAttribute('data-theme', 'light');
            }
        } else {
            document.body.setAttribute('data-theme', mode);
        }

        // 更新图标和按钮颜色
        const icons = {
            light: 'mdi-white-balance-sunny',
            dark: 'mdi-moon-waning-crescent',
            system: 'mdi-brightness-6'
        };
        themeBtn.innerHTML = `<i class="mdi ${icons[mode]}"></i>`;
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('theme-mode') === 'system') {
            document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}); 