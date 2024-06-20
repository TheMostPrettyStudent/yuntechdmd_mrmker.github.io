document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading');

    // 模拟页面加载完成事件，这里设置了2.5秒的延迟
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2500); // 根据实际页面加载时间调整

    // 在实际项目中，您可以使用 window.onload 事件来隐藏 loading 动画
    window.onload = () => {
        loadingScreen.style.display = 'none';
    };
});
