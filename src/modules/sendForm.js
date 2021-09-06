const sendForm = () => {
        const errorMessage = 'Что-то пошло не так(',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const forms = document.querySelectorAll('form');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `font-size: 2rem;
                                    color: #19b5fe`;

        forms.forEach(item => {

            item.addEventListener('submit', event => {
                event.preventDefault();
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);

                postData(formData).then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200!');
                    }
                    statusMessage.textContent = successMessage;

                })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });

                const inputs = item.querySelectorAll('input');
                console.log(inputs);
                inputs.forEach(i => {
                    i.value = '';
                });
            });

            const postData = formData => fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: formData,
                credentials: 'include'
            });
        });

    };

export default sendForm;