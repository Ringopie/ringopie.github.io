document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    // メニューの開閉をトグル
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });

    // メニュー状態の同期処理
    const syncMenuState = () => {
        if (window.innerWidth > 785) {
            menu.classList.remove('open');
            menu.style.maxHeight = 'none'; // 自動で高さを調整
        } else {
            menu.style.maxHeight = ''; // クラスに従う
        }
    };

    // リサイズ時の同期
    window.addEventListener('resize', syncMenuState);

    // 初期状態の同期
    syncMenuState();
});