$(document).ready(function () {
  let menu_icon = document.querySelector(".menu-icon i");
  let menu_list = document.querySelector(".header ul");

  menu_icon.onclick = () => {
    menu_icon.classList.toggle("box-x");
    menu_list.classList.toggle("open");
  };
});
