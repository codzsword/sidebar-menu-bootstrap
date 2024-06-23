const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});
