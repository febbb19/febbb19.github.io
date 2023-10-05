ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal("#page-header", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#page-header h2, p", { delay: 500, origin: "left", interval: 100 });
ScrollReveal().reveal("#blog .blog-img", { delay: 500, origin: "left", interval: 100 });
ScrollReveal().reveal("#blog .blog-details", { delay: 500, origin: "right", interval: 100 });
ScrollReveal().reveal("#pagination", { delay: 500, origin: "right", interval: 100 });
ScrollReveal().reveal("#newsletter", { delay: 500, origin: "top", interval: 100 });
ScrollReveal().reveal("#newsletter .newstext", { delay: 500, origin: "bottom", interval: 300 });
ScrollReveal().reveal("#newsletter .form", { delay: 500, origin: "right", interval: 500 });
ScrollReveal().reveal("footer", { delay: 500, origin: "top", interval: 100 });
