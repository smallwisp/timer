// import checkInputsAll from './checkInputsAll';

const sendForm = () => {
        const errorMessage = 'Что-то пошло не так(',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
            nameErrorMessage = 'Имя должно содержать больше одной буквы!',
            popup = document.querySelector('.popup');

        const forms = document.querySelectorAll('form');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `font-size: 2rem;
                                    color: #19b5fe`;

        forms.forEach(item => {
            
            const input = item.querySelector('input');
            item.addEventListener('submit', event => {
                if (input.value.length < 2) {
                    event.preventDefault();
                    item.appendChild(statusMessage);
                    statusMessage.textContent = nameErrorMessage;
                } else {
                    event.preventDefault();
                    item.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    const formData = new FormData(item);
    
                    postData(formData).then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200!');
                        }
                        statusMessage.textContent = successMessage;
    
                        setTimeout(() => {
                            statusMessage.textContent = '';
                        }, 3000);
    
                        setTimeout(() => {
                            popup.style.display = 'none';
                            
                        }, 1500);
    
                    })
                        .catch(error => {
                            statusMessage.textContent = errorMessage;
                            console.error(error);
    
                            setTimeout(() => {  
                                statusMessage.textContent = '';
                            }, 3000);
    
                            setTimeout(() => {
                            popup.style.display = 'none';
                            
                            }, 1500);
                        });
    
                    const inputs = item.querySelectorAll('input');
                    inputs.forEach(i => {
                        i.value = '';
                    });

                }
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