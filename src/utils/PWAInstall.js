// 安装 pwa 应用
let deferredPrompt;
const addBtn = document.querySelector('.install-pwa-btn');

window.addEventListener('beforeinstallprompt', function (e) {
    console.log('beforeinstallprompt Event fired');
    e.preventDefault();
    deferredPrompt = e;
    return false;
});

addBtn.addEventListener('click', () => {
    if (deferredPrompt !== undefined) {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choiceResult) {
            console.log(choiceResult.outcome);
            if (choiceResult.outcome == 'dismissed') {
                console.log('User cancelled home screen install');
            }
            else {
                console.log('User added to home screen');
            }
            deferredPrompt = null;
        });
    }
});

// 检测 pwa 是否被成功安装
window.addEventListener('appinstalled', () => {
    hideInstallPromotion();
    deferredPrompt = null;
    console.log('PWA was installed');
});