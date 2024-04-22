document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик события на клик
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
        }
    });   


    const contentSection = document.getElementById('content-section');
    contentSection.addEventListener('click', function(event) {
        if (event.target.matches('#navbar div')) {
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
