ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal("#page-header", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#page-header h2, p", { delay: 500, origin: "left", interval: 100 });
ScrollReveal().reveal("#product1", { delay: 1000, origin: "bottom", interval: 700 });
ScrollReveal().reveal("#pagination", { delay: 500, origin: "right", interval: 100 });
ScrollReveal().reveal("#newsletter", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#newsletter .newstext", { delay: 500, origin: "bottom", interval: 100 });
ScrollReveal().reveal("#newsletter .form", { delay: 500, origin: "right", interval: 300 });
ScrollReveal().reveal("footer", { delay: 500, origin: "top", interval: 100 });
