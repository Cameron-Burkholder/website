document.addEventListener("DOMContentLoaded", function() {
  const clients = document.querySelectorAll("div.client");
  const overlay = document.querySelector("div#portfolio-overlay");
  overlay.style.display = "none";
  const body = document.querySelector("body");
  clients.forEach((client) => {
    client.addEventListener("click", function() {
      if (client.classList.contains("client-active")) {
        client.classList.remove("client-active");
        overlay.style.display = "none";
        body.style.height = "auto";
        body.style.overflowY = "auto";
      } else {
        client.classList.add("client-active");
        overlay.style.display = "block";
        body.style.height = "100VH";
        body.style.overflowY = "hidden";
      }
    });
  });
});

window.addEventListener("scroll", function() {
  document.querySelector("nav.nav").classList.add("nav-scroll");
});
