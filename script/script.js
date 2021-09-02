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
   countTimer('04 september 2021');

   // Меню
   const toggleMenu = () => {
      const btnMenu  = document.querySelector('.menu');
      const menu  = document.querySelector('menu');
      const closeBtn  = document.querySelector('.close-btn');
      const menuItems  = document.querySelectorAll('ul>li');

      const handlerMenu = () => {
         menu.style.transform = `translate(-100%)`;
      };
      
      function handlerMenuJS({timing, draw, duration}) {
         let start = performance.now();

         requestAnimationFrame(function animate(time) {
         let timeFraction = (time - start) / duration;
         if (timeFraction > 1) timeFraction = 1;

         let progress = timing(timeFraction);

         draw(progress); 

         if (timeFraction < 1) {
            requestAnimationFrame(animate);
         }
      })
   };
   
   let animate = {
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
         } else if (targetCloseBtn || targetUlList) {
            handlerMenu();
         } else if (targetMenu) {
            return;
         } else {
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

})