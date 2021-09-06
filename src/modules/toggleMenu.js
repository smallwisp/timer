const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = document.querySelectorAll('ul>li');
        const screenWidth = window.innerWidth;
    
        const handlerMenu = () => {
            menu.style.transform = `translate(-100%)`;
        };

        function handlerMenuJS({
            timing,
            draw,
            duration,
            flag
        }) {
            if (flag) {
                const start = performance.now();

                requestAnimationFrame(function animate(time) {
                    let timeFraction = (time - start) / duration;
                    if (timeFraction > 1) timeFraction = 1;

                    const progress = timing(timeFraction);

                    draw(progress);

                    if (timeFraction < 1) {
                        requestAnimationFrame(animate);
                    }
                });
            }
        }

        const animate = {
            flag: true,
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                menu.style.transform = `translate(${progress * 100}%)`;
            }
        };

        document.addEventListener('click', event => {
            let targetBtnMenu = event.target;
            let targetMenu = event.target;
            let targetCloseBtn = event.target;
            let targetUlList = event.target;
            targetBtnMenu = targetBtnMenu.closest('.menu');
            targetMenu = targetMenu.closest('menu');
            targetCloseBtn = targetCloseBtn.classList.contains('close-btn');
            targetUlList = targetUlList.closest('ul');
            if ((screenWidth >= 768) && (targetBtnMenu)) {
                handlerMenuJS(animate);
                animate.flag = false;
            } else if (targetCloseBtn || targetUlList) {
                animate.flag = true;
                handlerMenu();
            } else if (targetMenu) {
                return;
            } else {
                animate.flag = true;
                handlerMenu();
            }
        });

};

export default toggleMenu;