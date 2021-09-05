window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   const screenWidth = window.innerWidth;
   // Timer
   function countTimer(deadLine) {
      let timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');

      function getTimeRemaining() {
         let dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24);
            return {
               timeRemaining,
               hours,
               minutes,
               seconds
            };
      }

      function setClock() {
         let timer = getTimeRemaining();
            if ((timer.hours ) < 10) {
               timerHours.textContent = '0' + timer.hours;
            } else {
               timerHours.textContent = timer.hours;
            };
            if ((timer.minutes) < 10) {
               timerMinutes.textContent = '0' + timer.minutes;
            } else {
               timerMinutes.textContent = timer.minutes;
            };
            if ((timer.seconds ) < 10) {
               timerSeconds.textContent = '0' + timer.seconds;
            } else {
               timerSeconds.textContent = timer.seconds;
            };
      };

      setClock();

      let updateClock = setInterval(setClock, 1000);
      
      function checkDate(time) {
         if (time.timeRemaining < 0) {
            clearInterval(updateClock);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
         }
      }

      checkDate(getTimeRemaining());

   };
   countTimer('09 september 2021');

   // Меню
   const toggleMenu = () => {
      const btnMenu  = document.querySelector('.menu');
      const menu  = document.querySelector('menu');
      const closeBtn  = document.querySelector('.close-btn');
      const menuItems  = document.querySelectorAll('ul>li');

      const handlerMenu = () => {
         menu.style.transform = `translate(-100%)`;
      };
      
      function handlerMenuJS({timing, draw, duration, flag}) {
         if (flag) {
            let start = performance.now();

            requestAnimationFrame(function animate(time) {
               let timeFraction = (time - start) / duration;
               if (timeFraction > 1) timeFraction = 1;

               let progress = timing(timeFraction);

               draw(progress); 

               if (timeFraction < 1) {
                  requestAnimationFrame(animate);
               }
            });
         }
   };
   
   let animate = {
      flag : true,
      duration: 1000,
      timing: function (timeFraction) {
         return timeFraction;
      },
      draw: function (progress) {
         menu.style.transform = `translate(${progress * 100}%)`;
      }
   };
   
      document.addEventListener('click', (event) => {
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

   toggleMenu();

   // popup

   const togglePopUp = () => {
      const popup = document.querySelector('.popup');
      const popupBtn = document.querySelectorAll('.popup-btn');
      const popupClose = document.querySelector('.popup-close');

      popupBtn.forEach((elem) => {
         elem.addEventListener('click', () => {
            popup.style.display = 'block';
         })
      });
      
      popup.addEventListener('click', (event) => {
         let target = event.target;

         if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
         } else {
            target = target.closest('.popup-content');
            if (!target) {
               popup.style.display = 'none';
            }
         }

      })
   };

   togglePopUp();

   // tabs

   const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

      const toggleTabContent = (index) => {
         for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
               tab[i].classList.add('active');
               tabContent[i].classList.remove('d-none');
            } else {
               tab[i].classList.remove('active');
               tabContent[i].classList.add('d-none');
            }
         }
      }
      
      tabHeader.addEventListener('click', (event) => {
         let target = event.target;
         target = target.closest('.service-header-tab');

         if (target) {
            tab.forEach((item, i) => {
               if (item === target) {
                  toggleTabContent(i);
               }
            });
         }
      });

   };

   tabs();

   // slider

   const slider = () => {
      const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');
      let dot = document.querySelectorAll('.dot');
      
      portfolioDots.remove();
      const addDots = () => {
         let newPortfolioDots = document.createElement('ul');
         newPortfolioDots.classList.add('portfolio-dots');
         slider.append(newPortfolioDots);
         
         for (let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            li.classList.add('dot');
            newPortfolioDots.append(li);
         };

         dot = document.querySelectorAll('.dot'),
         dot[0].classList.add('dot-active');
      };

      addDots();

      let currentSlide = 0;
      let interval;

      const prevSlide = (elem, index, strClass) => {
         elem[index].classList.remove(strClass);
      };

      const nextSlide = (elem, index, strClass) => {
         elem[index].classList.add(strClass);
      };

      const autoPlaySlide = () => {
         prevSlide(slide, currentSlide, 'portfolio-item-active');
         prevSlide(dot, currentSlide, 'dot-active');
         currentSlide++;
         if (currentSlide >= slide.length) {
            currentSlide = 0;
         }
         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dot, currentSlide, 'dot-active');

      };

      const startSlide = (time = 3000) => {
         interval = setInterval(autoPlaySlide, time);
      };

      const stopSlide = () => {
         clearInterval(interval);
      };

      slider.addEventListener('click', (event) => {
         event.preventDefault();

         let target = event.target;

         if (!target.matches('.portfolio-btn, .dot')) {
            return;
         }

         prevSlide(slide, currentSlide, 'portfolio-item-active');
         prevSlide(dot, currentSlide, 'dot-active');

         if (target.matches('#arrow-right')) {
            currentSlide++;
         } else if (target.matches('#arrow-left')) {
            currentSlide--;
         } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
               if (elem === target) {
                  currentSlide = index;
               }
            })
         }

         if (currentSlide >= slide.length) {
            currentSlide = 0;
         }

         if (currentSlide < 0) {
            currentSlide = slide.length - 1;
         }

         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dot, currentSlide, 'dot-active');
      });

      slider.addEventListener('mouseover', (event) => {
         if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
            stopSlide();
         }
      });

      slider.addEventListener('mouseout', (event) => {
         if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
            startSlide();
         }
      });

      startSlide(1500);

   };
   
   slider();

   // our team

   const changePhoto = () => {
      const commandPhoto = document.querySelectorAll('.command__photo')

      commandPhoto.forEach((item) => {
         let srcImg = item.getAttribute('src');
         item.addEventListener('mouseenter', (event) => {
            event.target.src = event.target.dataset.img;
      });
         item.addEventListener('mouseleave', (event) => {
            event.target.src = srcImg;
         })
      })
   };

   changePhoto();

   // checking all inputs

   const checkInputsAll = () => {

      const deleteHyphenSpace = (str) => {
         str = str.trim();
         str = str.replace(/ +/g, ' ');
         str = str.replace(/\-+/g, '\-');
         str = str.replace(/^-/g, '');
         str = str.replace(/-$/g, '');
         return str;
      };

      const inputsAll = document.querySelectorAll('input');

      inputsAll.forEach((item) => {
         item.addEventListener('input', (event) => {
            if ((event.target.id == 'form1-name') || (event.target.id == 'form2-name') || (event.target.id == 'form3-name')) {

               let nameValue = event.target.value;
               event.target.value = nameValue.replace(/[;\+\>\<\*\!\=\.@:\?\,#\$\%^\&\}{\[\]\^\"\\\|\/\_)(\w]/gi, '');

            } else if ((event.target.id == 'form1-email') || (event.target.id == 'form2-email') || (event.target.id == 'form3-email')) {

               event.target.value = event.target.value.replace(/[а-яА-Я;:\?\,)(#\$\%^\&\}{\[\]\^\"\\\|\/]/gi, '');

            } else if (event.target.classList == 'calc-item') {

            event.target.value = event.target.value.replace(/\D/g, '');

            } else if (event.target.id == 'form2-message') {
               event.target.value = event.target.value.replace(/[a-zA-Z)(#@\=\$\>\<\*\%\&\}{\[\]\^\\\|\/]/gi, '');
            } else {
               event.target.value = event.target.value.replace(/[а-яА-Яa-zA-Z;\>\<\*)(\=\.@:\?\,#\$\%^\&\}{\[\]\^\"\\\|\/\_]/gi, '');
            }
         });

         item.addEventListener('blur', (event) => {
            if ((event.target.id == 'form1-name') || (event.target.id == 'form2-name') || (event.target.id == 'form3-name')) {

               let nameValue = event.target.value;
               event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();

            } else if ((event.target.id == 'form1-email') || (event.target.id == 'form2-email') || (event.target.id == 'form3-email') || (event.target.classList == 'calc-item') || (event.target.id == 'form2-message') || (event.target.id == 'form1-phone') || (event.target.id == 'form2-phone') || (event.target.id == 'form3-phone')) {

               event.target.value = deleteHyphenSpace(event.target.value);
            } 
         })
         
      })

   };

   checkInputsAll();

   // calc

   const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

      const countSum = () => {
         let total = 0;
         let countValue = 1;
         let dayValue = 1;
         const typeValue = calcType.options[calcType.selectedIndex].value,
               squareValue = +calcSquare.value;

         if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
         }

         if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
         } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
         } 

         if (typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
         } 

         totalValue.textContent = total;
      };

      calcBlock.addEventListener('change', (event) => {
         const target = event.target;

         if (target.matches('select') || target.matches('input')) {
            countSum();
         }
      })
   };

   calc(100);

   // send ajax form

   const sendForm = () => {
      const errorMessage = 'Что-то пошло не так(',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

      /* const form = document.getElementById('form1');
      const formFooter = document.getElementById('form2'); */
      const forms = document.querySelectorAll('form');
      
      const statusMessage = document.createElement('div');
      statusMessage.style.cssText = `font-size: 2rem;
                                    color: #19b5fe`;
      
      forms.forEach((item) => {
         item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(item);
            let body = {};

            formData.forEach((val, key) => {
               body[key] = val;
            });
               postData(body, () => {
               statusMessage.textContent = successMessage;

            }, (error) => {
               statusMessage.textContent = errorMessage;
               console.error(error);
            });

            const inputs = item.querySelectorAll('input');
            console.log(inputs);
            inputs.forEach((i) => {
               i.value = '';
            })
         });
            

         const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {

               if (request.readyState !== 4) {
                  return;
               }

               if (request.status === 200) {
                  outputData();

               } else {
                  errorData(request.status);
               }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-type', 'application/json');
            request.send(JSON.stringify(body));
         };
      });


      

   };
   sendForm();
   
   
})