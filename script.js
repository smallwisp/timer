window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

   let date = new Date();
   let timeToday = new Date().toLocaleTimeString('en-US');
   console.log(date.getHours());

   let newYear = new Date(date.getFullYear() + 1, 0, 1 );
   console.log(date.getDay());

   function getDayOfWeek() {
      let dayOfWeek;
      weekDays.forEach((item, index) => {
         if (index == date.getDay()) {
            dayOfWeek = weekDays[index - 1];
         }
      });

      return dayOfWeek;
   };

   function greetings(date) {
      if ((date.getHours() >= 6) && (date.getHours() <= 12)) {
         return 'Доброе утро!';
      } else if ((date.getHours() > 12) && (date.getHours() <= 18)) {
         return 'Добрый день!';
      } else if ((date.getHours() > 18) && (date.getHours() <= 24)) {
         return 'Добрый вечер!';
      } else {
         return 'Доброй ночи!';
      }
   }

   
   function getDaysBeforeNewYear() {
      let daysBeforeNewYear = Math.floor((newYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
      return daysBeforeNewYear;
   };

   // Текущее время суток
   const divGreetings = document.createElement('div');
   divGreetings.classList.add('greetings');
   document.body.append(divGreetings);
   const timeGreeting = document.querySelector('.greetings');
   timeGreeting.style.display = 'block';
   timeGreeting.textContent = `${greetings(date)}`;
   
   // Текущий день недели
   const divDayOfWeek = document.createElement('div');
   divDayOfWeek.classList.add('day_of_week');
   document.body.append(divDayOfWeek);
   const dayOfWeek = document.querySelector('.day_of_week');
   dayOfWeek.style.display = 'block';
   dayOfWeek.textContent = `Сегодня: ${getDayOfWeek()}`;
   
   // Текущее время
   const divCurrentTime = document.createElement('div');
   divCurrentTime.classList.add('current_time');
   document.body.append(divCurrentTime);
   const currentTime = document.querySelector('.current_time');
   currentTime.style.display = 'block';
   currentTime.textContent = `Текущее время: ${timeToday}`;

   // Дни до нового года
   const divNewYear = document.createElement('div');
   divNewYear.classList.add('before-New_Year');
   document.body.append(divNewYear);
   const beforeNewYear = document.querySelector('.before-New_Year');
   beforeNewYear.style.display = 'block';
   beforeNewYear.textContent = `До нового года осталось: ${getDaysBeforeNewYear()} дней(-я)`;



})