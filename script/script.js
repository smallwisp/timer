window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   const screenWidth = window.innerWidth;
   console.log('screenWidth:', screenWidth);
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

      let updateClock = setInterval(() => {
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
           
         }, 1000);
      
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
   countTimer('01 september 2021');

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
   
      btnMenu.addEventListener('click', function() {
         if (screenWidth >= 768) {
            handlerMenuJS(animate);
         };
      });

      closeBtn.addEventListener('click', handlerMenu);
      
      menuItems.forEach((elem) => {
         elem.addEventListener('click', handlerMenu)
      })
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
      
      popupClose.addEventListener('click', () => {
         popup.style.display = 'none';
      });
   };

   togglePopUp();

})