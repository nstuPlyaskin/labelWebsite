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
            window.location.href = '/logout';
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

        // NOW WE WORKING WITH FORM
        let stepCounter = 1;

        // form 1
        const formFirst = document.getElementById('form-first');
        const buttonClear = document.getElementById('button-clear');
        const releaseCoverNotify = document.getElementById('release-cover-notify');
        const releaseCoverTitle = document.getElementById('release-cover-title');
        const releaseCover = document.getElementById('release-cover');
        const releaseCoverHint = document.getElementById('release-cover-hint');
        const errorMessage = document.getElementById('error');
        const formElements = formFirst.elements;

        // form 2
        const fileInput = document.getElementById('release-cover');
        const uploadBg = document.getElementById('upload-bg');
        const uploadText1 = document.getElementById('uploadText1');
        const uploadText2 = document.getElementById('uploadText2');

        function formLoader(stepCounter){
            switch(stepCounter) {
                case 1:
                    // описываем что должно быть на форме при шаге 1
                    console.log("LOADED FORM 1", stepCounter);

                    // Пройдемся по всем элементам формы
                    for (let i = 0; i < formElements.length; i++) {
                        const element = formElements[i];
                        if (element.nodeName.toLowerCase() !== 'button' && element.id !== 'release-cover' && element.id !== 'upload-bg') { // Проверяем, не является ли элемент кнопкой или release-cover
                            element.style.display = ''; // Возвращаем отображение элемента
                        }
                    }

                    // Скрываем release-cover-notify, release-cover-title и release-cover-hint
                    releaseCover.style.display = 'none';
                    releaseCoverNotify.style.display = 'none';
                    releaseCoverTitle.style.display = 'none';
                    releaseCoverHint.style.display = 'none';
                    uploadBg.style.display = 'none';


                    // Поменяем текст кнопки обратно на "Clear"
                    buttonClear.textContent = 'Clear';

                    break;
                case 2:
                    console.log("LOADED FORM 2", stepCounter);

                    releaseCoverNotify.style.display = 'block';
                    releaseCoverNotify.style.width = '100%';
                    releaseCoverNotify.style.height = 'auto';
    
                    releaseCoverTitle.style.display = 'block';
                    releaseCoverTitle.style.width = '100%';
                    releaseCoverTitle.style.height = '100%';
    
                    releaseCover.style.display = 'block';
                    releaseCover.style.width = '100%';
                    releaseCover.style.height = '60%';
    
                    releaseCoverHint.style.display = 'block';
                    releaseCoverHint.style.width = '100%';
                    releaseCoverHint.style.height = 'auto';
    
                    uploadBg.style.display = 'flex';
                    uploadBg.style.width = '100%';
                    uploadBg.style.height = '100%';
    
    
                    // Пройдемся по всем элементам формы и скроем их
                    for (let i = 0; i < formElements.length; i++) {
                        const element = formElements[i];
                        if (element.nodeName.toLowerCase() !== 'button' && element.id !== 'release-cover'
                            && element.id !== 'release-cover-notify' && element.id !== 'release-cover-title'
                            && element.id !== 'release-cover-hint' && element.id !== 'upload-bg') {
                            element.style.display = 'none'; // Скрываем элемент, если он не является кнопкой
                        }
                    }
    
                
                    buttonClear.textContent = 'Back';
                    errorMessage.style.display = '';
                    break;
                case 3:
                    console.log(3);
                    break;
                default:
                    console.log('Invalid stepCounter');
            }
        }
        

        // Функция для проверки валидности текущего шага формы
        function validateStep() {
            const formFirst = document.getElementById('form-first');
            return formFirst.checkValidity();
        }

        // Обработчик для кнопки "Next step"
        if (event.target.matches('#button-next')) {
            if (validateStep()) {
                console.log('valid ok');
                stepCounter++;
                formLoader(stepCounter);
            } else {
                // Форма не прошла проверку на валидность
                const errorMessage = document.getElementById('error');
                const invalidField = formFirst.querySelector(':invalid');
                const fieldName = invalidField.getAttribute('placeholder'); // Получаем placeholder поля
                errorMessage.textContent = `Ошибка в поле: "${fieldName}" ${invalidField.validationMessage}`;
                errorMessage.style.display = 'block'; // Показываем элемент с сообщением об ошибке
            }
        }


        // Обработчик для кнопки "Back"
        if (event.target.matches('#button-clear')) {

            if (buttonClear.textContent == 'Clear'){
                formFirst.reset();
            }

            if (buttonClear.textContent == 'Back'){
                formLoader(stepCounter);
            }
        }

        // Обработчик для кнопки "Upload"
        if (event.target.matches('#upload-bg') || event.target.matches('#uploadIcon') || event.target.matches('#uploadText1') || event.target.matches('#uploadText2')) {
            fileInput.click();

            // Обработчик события change для элемента input type="file"
            fileInput.addEventListener('change', function() {
                // Проверяем, был ли выбран файл
                if (fileInput.files.length > 0) {
                    // Получаем первый выбранный файл (если их несколько, можно перебрать через цикл)
                    const file = fileInput.files[0];
        
                    // Получаем название файла и размер
                    const fileName = file.name;
                    const fileSize = file.size;

                    uploadText1.textContent = 'Successfully uploaded';
                    uploadText2.textContent = fileName;
                    
                    uploadBg.style.background = '#DFEFCA';

        
                    // Теперь можно использовать переменные fileName и fileSize для дальнейших действий
                    console.log('Название файла:', fileName);
                    console.log('Размер файла:', fileSize, 'байт');
                } else {
                    console.log('Файл не выбран');
                }
            });
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
