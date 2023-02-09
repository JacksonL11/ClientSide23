const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);

    if (btn.hasAttribute('data-link')) {
      window.location.href = btn.dataset.link;
    } else {
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));
  
      btn.classList.add('active');
      target.classList.add('active');
    }
  });
});
