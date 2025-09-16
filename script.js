const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    menuItems.forEach(item => {
      if(item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rezervare-form");
  const mesaj = document.getElementById("mesaj-confirmare");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // simulăm trimiterea rezervării
    setTimeout(() => {
      mesaj.style.display = "block";
      form.reset();
    }, 500);
  });
});
