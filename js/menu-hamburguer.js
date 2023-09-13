var menuBotao = document.getElementById("menu-botao");
var menu = document.getElementById("menu");

menuBotao.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});