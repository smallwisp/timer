 const changePhoto = () => {
        const commandPhoto = document.querySelectorAll('.command__photo');

        commandPhoto.forEach(item => {
            const srcImg = item.getAttribute('src');
            item.addEventListener('mouseenter', event => {
                event.target.src = event.target.dataset.img;
            });
            item.addEventListener('mouseleave', event => {
                event.target.src = srcImg;
            });
        });
    };

export default changePhoto;