const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal("#hero h4", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#hero button", { delay: 500, origin: "bottom", interval: 200 });
ScrollReveal().reveal("#hero h2", { delay: 500, origin: "left", interval: 100 });
ScrollReveal().reveal("#hero h1, p", { delay: 500, origin: "right", interval: 100 });
ScrollReveal().reveal("#feature", { delay: 400, origin: "left", interval: 100 });
ScrollReveal().reveal("#product1 h2", { delay: 800, origin: "top", interval: 200 });
ScrollReveal().reveal("#product1", { delay: 1000, origin: "bottom", interval: 700 });
ScrollReveal().reveal("#banner", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#banner h4, h2", { delay: 400, origin: "left", interval: 100 });
ScrollReveal().reveal("#banner button", { delay: 500, origin: "bottom", interval: 100 });
ScrollReveal().reveal("#sm-banner .banner-box", { delay: 500, origin: "left", interval: 100 });
ScrollReveal().reveal("#sm-banner .banner-box h4, h2, span, button", { delay: 600, origin: "bottom", interval: 100 });
ScrollReveal().reveal("#sm-banner .banner-box2", { delay: 500, origin: "right", interval: 100 });
ScrollReveal().reveal("#sm-banner .banner-box2 h4, h2, span, button", { delay: 600, origin: "bottom", interval: 100 });
ScrollReveal().reveal("#banner3", { delay: 300, origin: "bottom", interval: 100 });
ScrollReveal().reveal("#newsletter  ", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#newsletter .newstext", { delay: 500, origin: "bottom", interval: 300 });
ScrollReveal().reveal("#newsletter .form", { delay: 500, origin: "right", interval: 500 });
ScrollReveal().reveal("footer", { delay: 500, origin: "top", interval: 100 });
