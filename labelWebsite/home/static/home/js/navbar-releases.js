document.addEventListener('DOMContentLoaded', function() {
    // animations
    $.ajaxSetup({
        complete: function() {
            // Применяем стили к объекту после завершения AJAX-запроса
            $('#new-release').addClass('active');
    
            // Позиционируем анимацию соответствующего элемента
            var animation = $('.animation');
            var menuItemWidth = $('#new-release').outerWidth();
            var menuItemLeft = $('#new-release').position().left;
            var animationWidth = 30 * $(window).height() / 100; // Ширина анимации в 30vh
            var animationLeft = menuItemLeft + (menuItemWidth - animationWidth) / 2; // Центрируем анимацию по ширине элемента меню
    
            animation.css({
                width: '30vh', // Устанавливаем ширину анимации в 30vh
                left: (animationLeft / $(window).width()) * 100 + 'vw' // Преобразуем в проценты относительно ширины окна просмотра
            });


            // load new release when user open page
            const contentRelease = document.getElementById('content-release');
            // Загрузка содержимого new-release.html в элемент с id "content-release"
            fetch('/new-release') // Используем абсолютный путь к файлу
                .then(response => response.text())
                .then(html => {
                    contentRelease.innerHTML = html; // Загружаем содержимое файла
                })
                .catch(error => console.error('Error loading new-release:', error));
        }
    });   


    const contentSection = document.getElementById('content-section');
    contentSection.addEventListener('click', function(event) {
        if (event.target.matches('#no-filter') || 
            event.target.matches('#moderation') || 
            event.target.matches('#new-release') || 
            event.target.matches('#drafts') || 
            event.target.matches('#on-delete')) {
            
            // Удаляем класс active у всех элементов меню
            const menuItems = document.querySelectorAll('#navbar div');
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            // Добавляем класс active только к выбранному элементу меню
            event.target.classList.add('active');
    
            // Позиционируем анимацию соответствующего элемента
            const animation = document.querySelector('.animation');
    
            const menuItemWidth = event.target.offsetWidth;
            const menuItemLeft = event.target.offsetLeft;
            const animationWidth = 30 * window.innerHeight / 100; // Ширина анимации в 30vh
            const animationLeft = menuItemLeft + (menuItemWidth - animationWidth) / 2; // Центрируем анимацию по ширине элемента меню
    
            animation.style.width = '30vh'; // Устанавливаем ширину анимации в 30vh
            animation.style.left = (animationLeft / window.innerWidth) * 100 + 'vw'; // Преобразуем в проценты относительно ширины окна просмотра
        }
    
        // Дополнительные действия при нажатии на кнопку "Upload"
        if (event.target.matches('#header-button1')) {
            // Ваш код для действия при нажатии на кнопку "Upload"
            console.log('Button "Upload" clicked');
            // Дополнительные действия ...
        }
    
        // Дополнительные действия при нажатии на кнопку "Logout"
        if (event.target.matches('#header-button2')) {
            window.location.href = '/login';
            // @todo session control and logout
            console.log('Button "Logout" clicked');
        }
    

        
        // Обработка нажатий на элементы меню
        if (event.target.matches('#no-filter')) {
            const contentRelease = document.getElementById('content-release');
            // Загрузка содержимого new-release.html в элемент с id "content-release"
            contentRelease.innerHTML = ''; // Очищаем содержимое перед загрузкой
            fetch('/all-releases') // Используем абсолютный путь к файлу
                .then(response => response.text())
                .then(html => {
                    contentRelease.innerHTML = html; // Загружаем содержимое файла
                })
                .catch(error => console.error('Error loading new-release: ', error));
        }
    
        if (event.target.matches('#moderation')) {
            const contentRelease = document.getElementById('content-release');
            // Загрузка содержимого new-release.html в элемент с id "content-release"
            contentRelease.innerHTML = ''; // Очищаем содержимое перед загрузкой
            fetch('/moderation-releases') // Используем абсолютный путь к файлу
                .then(response => response.text())
                .then(html => {
                    contentRelease.innerHTML = html; // Загружаем содержимое файла
                })
                .catch(error => console.error('Error loading new-release: ', error));
        }
    
        if (event.target.matches('#new-release')) {
            const contentRelease = document.getElementById('content-release');
            // Загрузка содержимого new-release.html в элемент с id "content-release"
            contentRelease.innerHTML = ''; // Очищаем содержимое перед загрузкой
            fetch('/new-release') // Используем абсолютный путь к файлу
                .then(response => response.text())
                .then(html => {
                    contentRelease.innerHTML = html; // Загружаем содержимое файла
                })
                .catch(error => console.error('Error loading new-release: ', error));
        }
        
        
    
        if (event.target.matches('#drafts')) {
            const contentRelease = document.getElementById('content-release');
            // Загрузка содержимого new-release.html в элемент с id "content-release"
            contentRelease.innerHTML = ''; // Очищаем содержимое перед загрузкой
            fetch('/drafts-releases') // Используем абсолютный путь к файлу
                .then(response => response.text())
                .then(html => {
                    contentRelease.innerHTML = html; // Загружаем содержимое файла
                })
                .catch(error => console.error('Error loading new-release: ', error));
        }
    
        if (event.target.matches('#on-delete')) {
            const contentRelease = document.getElementById('content-release');
            // Загрузка содержимого new-release.html в элемент с id "content-release"
            contentRelease.innerHTML = ''; // Очищаем содержимое перед загрузкой
            fetch('/on-delete-releases') // Используем абсолютный путь к файлу
                .then(response => response.text())
                .then(html => {
                    contentRelease.innerHTML = html; // Загружаем содержимое файла
                })
                .catch(error => console.error('Error loading new-release: ', error));
        }
    });
    


    // Функция debounce для предотвращения слишком частых вызовов функции
    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    function adjustAnimation() {
        const activeMenuItem = document.querySelector('#navbar .active');
        if (!activeMenuItem) return; // Проверяем наличие активного пункта меню
    
        const animation = document.querySelector('.animation');
        const menuItemWidth = activeMenuItem.offsetWidth;
        const menuItemLeft = activeMenuItem.offsetLeft;
        const animationWidth = 30 * window.innerHeight / 100; // Ширина анимации в 30vh
        const animationLeft = menuItemLeft + (menuItemWidth - animationWidth) / 2; // Центрируем анимацию по ширине элемента меню
    
        animation.style.width = '30vh'; // Устанавливаем ширину анимации в 30vh
        animation.style.left = (animationLeft / window.innerWidth) * 100 + 'vw'; // Преобразуем в проценты относительно ширины окна просмотра
    }
    
    // Вызываем adjustAnimation при изменении размера окна с помощью debounce
    window.addEventListener('resize', debounce(adjustAnimation, 300)); // 500 миллисекунд задержки
});
