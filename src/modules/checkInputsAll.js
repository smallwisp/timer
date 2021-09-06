const checkInputsAll = () => {

        const deleteHyphenSpace = str => {
            str = str.trim();
            str = str.replace(/ +/g, ' ');
            str = str.replace(/\-+/g, '\-');
            str = str.replace(/^-/g, '');
            str = str.replace(/-$/g, '');
            return str;
        };

        const inputsAll = document.querySelectorAll('input');

        inputsAll.forEach(item => {
            item.addEventListener('input', event => {
                if ((event.target.id === 'form1-name') || (event.target.id === 'form2-name') || (event.target.id === 'form3-name')) {

                    const nameValue = event.target.value;
                    event.target.value = nameValue.replace(/[;\+\>\<\*\!\=\.@:\?\,#\$\%^\&\}{\[\]\^\"\\\|\/\_)(\w]/gi, '');

                } else if ((event.target.id === 'form1-email') || (event.target.id === 'form2-email') || (event.target.id === 'form3-email')) {

                    event.target.value = event.target.value.replace(/[а-яА-Я;:\?\,)(#\$\%^\&\}{\[\]\^\"\\\|\/]/gi, '');

                } else if (event.target.classList === 'calc-item') {

                    event.target.value = event.target.value.replace(/\D/g, '');

                } else if (event.target.id === 'form2-message') {
                    event.target.value = event.target.value.replace(/[a-zA-Z)(#@\=\$\>\<\*\%\&\}{\[\]\^\\\|\/]/gi, '');
                } else {
                    event.target.value = event.target.value.replace(/[а-яА-Яa-zA-Z;\>\<\*)(\=\.@:\?\,#\$\%^\&\}{\[\]\^\"\\\|\/\_]/gi, '');
                }
            });

            item.addEventListener('blur', event => {
                if ((event.target.id === 'form1-name') || (event.target.id === 'form2-name') || (event.target.id === 'form3-name')) {

                    const nameValue = event.target.value;
                    event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();

                } else if ((event.target.id === 'form1-email') || (event.target.id === 'form2-email') || (event.target.id === 'form3-email') || (event.target.classList === 'calc-item') || (event.target.id === 'form2-message') || (event.target.id === 'form1-phone') || (event.target.id === 'form2-phone') || (event.target.id === 'form3-phone')) {

                    event.target.value = deleteHyphenSpace(event.target.value);
                }
            });

        });

    };

export default checkInputsAll;