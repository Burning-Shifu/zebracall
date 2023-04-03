// кнопки "пройти обучение"
const body = document.querySelector('body');
const buttonsStudy = document.querySelectorAll('.script__btn');

const btn_script = document.createElement('script');
const initialize_script = document.createElement('script');

const time = new Date().getHours();
if (time <= 15) {
  btn_script.id = 'amoforms_script_856771';
  btn_script.charset = 'utf-8';
  btn_script.dataset.id = '';
  btn_script.src =
  'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1635879008';
  initialize_script.innerHTML =
  '!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"856771",hash:"65436cbbcb9a4afda1ce7abb22db04a3",locale:"ru"})}(window,0,"amo_forms_","params","load");';
} else {
  btn_script.id = 'amoforms_script_856774';
  btn_script.dataset.id = '';
  btn_script.charset = 'utf-8';
  btn_script.src =
  'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1635879052';
  initialize_script.innerHTML =
  '!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"856774",hash:"56ffefb2c2f3ee0aba6190035a43eebb",locale:"ru"})}(window,0,"amo_forms_","params","load");';
}

body.appendChild(initialize_script);
body.appendChild(btn_script);

buttonsStudy.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('#amoforms_action_btn').onclick();
  });
});


'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const sendBtn = document.querySelectorAll('#send');

  sendBtn.forEach( (btn) => {
    btn.addEventListener("click", function() {
      var _tmr = window._tmr || (window._tmr = []);
      _tmr.push({ id: "3205890", type: "reachGoal", goal: "zayavka" });
    });
  });

  function prevMonth() {
    let date = new Date(),
        month = date.getMonth(),
        monthsArr = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];

    let span = document.querySelectorAll('.salary__month');

    span.forEach((item) => {
      if (month == 0) {
        item.textContent = `${monthsArr[11]}`;
      } else {
        item.textContent = `${monthsArr[month - 1]}`;
      }
    });
  }

  prevMonth();

  // faq аккордеон

  const acc = document.querySelectorAll(".accordeon__item-header");

  acc.forEach(function(item) {
    item.addEventListener("click", function() {
      let panel = this.nextElementSibling;
      panel.classList.toggle("open");
    });
  });

  // slider

  const swiper = new Swiper('.reviews__slider', {

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 3,
        // spaceBetween: 25
      }
    },

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

  });

 	/* мобильное меню */
	const body = document.querySelector('body'),
				menuBtn = document.querySelector('.burger'),
				menu = document.querySelector('.menu'),
				menuItems = document.querySelectorAll('.menu__item');

	menuBtn.addEventListener('click', () => openMenu());

	menuItems.forEach((item) => {
		item.addEventListener('click', () => closeMenu());
	});

	function openMenu() {
		menu.classList.toggle('open');
		menuBtn.classList.toggle('open');
		body.classList.toggle('locked');
  }

	function closeMenu() {
		menu.classList.remove('open');
		menuBtn.classList.remove('open');
		body.classList.remove('locked');
  }

  // timer
  const endDate = 4 * 60 * 60 * 1000; /* 4 часа */
  let firstVisit;

  function setStartDate() {
    if (!localStorage.getItem('firstVisit')) {
      firstVisit = Date.now();
      localStorage.setItem('firstVisit', firstVisit);
    } else {
      firstVisit = localStorage.getItem('firstVisit');
    }
  }

  setStartDate();

  function getTimeRemaining() {
    const now = Date.now(),
          t = (+firstVisit + endDate) - now,
          // days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) )),
          mins = Math.floor((t / 1000 / 60) % 60),
          secs = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      // 'days': days,
      'hours': hours,
      'mins': mins,
      'secs': secs
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setTimeRemaining() {
    const hours = document.querySelector('#hours'),
          hoursText = document.querySelector('#hours-text'),
          mins = document.querySelector('#minutes'),
          secs = document.querySelector('#seconds'),
          // days = document.querySelector('#days'),
          timeInterval = setInterval(updTimer, 1000);

    updTimer();

    function updTimer() {
      const t = getTimeRemaining();

      hours.textContent = getZero(t.hours);
      // days.textContent = getZero(t.days);
      mins.textContent = getZero(t.mins);
      secs.textContent = getZero(t.secs);

      if (t.hours == 1) {
        hoursText.textContent = 'час'
      } else if ( t.hours > 1 && t.hours < 5) {
        hoursText.textContent = 'часа'
      } else {
        hoursText.textContent = 'часов'
      }

      if (t.total <= 0) {
        hours.textContent = '00';
        mins.textContent = '00';
        secs.textContent = '00';
        clearInterval(timeInterval);
        localStorage.removeItem('firstVisit');
      }
    }
  }

  setTimeRemaining();

  // end timer
});
