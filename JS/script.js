function showSidebar() {
    const sidebar = document.querySelector(`.sidebar`);
    sidebar.style.display = `block`;
    const openButton = document.querySelector(`.openButton`);
    openButton.style.display = none;
    const closeButton = document.querySelector(`.closeButton`);
    closeButton.style.display = `block`;
}

function hideSidebar() {
    const sidebar = document.querySelector(`.sidebar`);
    sidebar.style.display = `none`;
    const openButton = document.querySelector(`.openButton`);
    openButton.style.display = block;
    const closeButton = document.querySelector(`.closeButton`);
    closeButton.style.display = `none`;
}





const appointmentBtn = document.getElementById('appointmentBtn');
        const appointmentForm = document.getElementById('appointmentForm');
        const closeBtn = document.getElementById('closeBtn');

        // Открытие формы при нажатии на кнопку
        appointmentBtn.addEventListener('click', function() {
            appointmentBtn.style.display = 'none';
            appointmentForm.style.display = 'block';
        });

        // Закрытие формы при нажатии на крестик
        closeBtn.addEventListener('click', function() {
            appointmentForm.style.display = 'none';
            appointmentBtn.style.display = 'flex';
        });

        // Закрытие формы при нажатии Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && appointmentForm.style.display === 'block') {
                appointmentForm.style.display = 'none';
                appointmentBtn.style.display = 'flex';
            }
        });

        // Обработка отправки формы
        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const inputs = appointmentForm.querySelectorAll('input');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }
            });
            
            if (isValid) {
                alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
                // Здесь можно добавить отправку данных на сервер
                appointmentForm.style.display = 'none';
                appointmentBtn.style.display = 'flex';
                // Очистка формы
                inputs.forEach(input => input.value = '');
            } else {
                alert('Пожалуйста, заполните все поля');
            }
        });




        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            // Закриваємо всі інші розділи
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });
            
            // Якщо розділ не був активним - відкриваємо його
            if (!isActive) {
                header.classList.add('active');
                content.classList.add('active');
            }
        }





var carousel = document.getElementById('carousel');
        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');

        var cardWidth = 280;

        prevBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });





        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const inputs = appointmentForm.querySelectorAll('input');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }
            });
            
            if (isValid) {
                alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
                // Здесь можно добавить отправку данных на сервер
                appointmentForm.style.display = 'none';
                appointmentBtn.style.display = 'flex';
                // Очистка формы
                inputs.forEach(input => input.value = '');
            } else {
                alert('Пожалуйста, заполните все поля');
            }
        });
