'use strict'; {

  //ハンバーガーメニュー
  const btn = document.querySelector('.header__btn');
  const cover = document.querySelector('.mobile_menu__cover');
  const items = document.querySelectorAll('.mobile_menu__li');
  const footer = document.querySelector('.mobile_menu__inner');
  const mobileMenu = document.querySelector('.mobile_menu');
  function menuOpen() {
    const spans = document.querySelectorAll('.span');
    spans.forEach(span => {
      span.classList.toggle('inview');
    });
    cover.classList.toggle('inview');
    items.forEach(item => {
      item.classList.toggle('inview');
    });
    btn.classList.toggle('inview');
    footer.classList.toggle('inview');
    mobileMenu.classList.toggle('inview');
  }
  
  btn.addEventListener('click', () => {
    menuOpen();
  });
  items.forEach(item => {
    item.addEventListener('click', () => {
      menuOpen();
    });
  });

  // テキストアニメーション
  function TextAnimation(el) {
    const text = document.querySelector(el);
    let str = text.innerHTML;
    const strArry = str.trim().split('');
    const result = strArry.reduce((acc, crr) => {
      return `${acc}<span class="target char">${crr}</span>`;
    }, '');
    text.innerHTML = result;
  }
  TextAnimation(".main_visual__text");
}


//スクロールオブザーバー
const targets = document.querySelectorAll('.target');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('inview');
    }
  });
}
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
}
const io = new IntersectionObserver(cb, options);
targets.forEach(target => {
  io.observe(target);
});
