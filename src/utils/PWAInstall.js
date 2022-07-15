// 安装 pwa 应用
let deferredPrompt;
const addBtn = document.querySelector('.install-pwa-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
    
    addBtn.addEventListener('click', async () => {
        addBtn.style.display = 'none';
        hideInstallPromotion();
        deferredPrompt.prompt();
        
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    });
});

// 检测 pwa 是否被成功安装
window.addEventListener('appinstalled', () => {
    hideInstallPromotion();
    deferredPrompt = null;
    console.log('PWA was installed');
});