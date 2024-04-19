document.addEventListener('DOMContentLoaded', function () {
    // Получаем все кнопки меню по их id
    var lnkHome = document.getElementById('lnk-home');
    var lnkReleases = document.getElementById('lnk-releases');
    var lnkStatistics = document.getElementById('lnk-statistics');
    var lnkWallet = document.getElementById('lnk-wallet');
    var lnkSupport = document.getElementById('lnk-support');
    var lnkSettings = document.getElementById('lnk-settings');
    var lnkLogout = document.getElementById('lnk-logout');

    // Добавляем обработчики события клика для каждой кнопки
    lnkHome.addEventListener('click', function () {
        loadContent('home');
    });

    lnkReleases.addEventListener('click', function () {
        loadContent('releases');
    });

    lnkStatistics.addEventListener('click', function () {
        loadContent('statistics');
    });

    lnkWallet.addEventListener('click', function () {
        loadContent('wallet');
    });

    lnkSupport.addEventListener('click', function () {
        loadContent('support');
    });

    lnkSettings.addEventListener('click', function () {
        loadContent('settings');
    });

    lnkLogout.addEventListener('click', function () {
        loadContent('logout');
    });

    // Функция для загрузки контента
    function loadContent(sectionId) {
        // Загружаем только содержимое раздела с использованием AJAX
        $('#content-section').load('/' + sectionId + ' #content-section');
    }
});Q
