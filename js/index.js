document.addEventListener("DOMContentLoaded", function() {
  const clients = document.querySelectorAll("div.client");
  const overlay = document.querySelector("div#portfolio-overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
  const body = document.querySelector("body");
  if (clients) {
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
  }
  const navButton = document.querySelector("img.nav-image");
  const navBody = document.querySelector("div.nav-body");
  const navLinks = document.querySelectorAll("a.nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function() {
      if (navBody.classList.contains("nav-active")) {
        navBody.classList.remove("nav-active");
      } else {
        navBody.classList.add("nav-active");
      }
    })
  })
  navButton.addEventListener("click", function() {
    if (navBody.classList.contains("nav-active")) {
      navBody.classList.remove("nav-active");
    } else {
      navBody.classList.add("nav-active");
    }
  })
});

window.addEventListener("scroll", function() {
  document.querySelector("nav.nav").classList.add("nav-scroll");
});
