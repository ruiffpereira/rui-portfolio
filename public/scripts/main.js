/* Rui Pereira — Portfolio interactions (single-page) */
(function () {
  "use strict";

  /* mark JS-capable so scroll-reveal entrances engage
     (without JS everything is simply visible) */
  document.documentElement.classList.add("js");

  /* nav background once scrolled */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    menuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const open = !mobileMenu.classList.contains("open");
      mobileMenu.classList.toggle("open", open);
      menuBtn.classList.toggle("active", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    // close the menu when a link inside it is tapped (still scrolls via the anchor)
    mobileMenu.querySelectorAll("a[href^='#']").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );
  }

  /* scroll-reveal */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* failsafe: reveal everything even if animation frames are throttled */
  window.addEventListener("load", () => {
    setTimeout(() => document.documentElement.classList.add("settled"), 1200);
  });

  /* current year */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* local time (Lisbon) */
  const clock = document.getElementById("clock");
  if (clock) {
    const tick = () => {
      try {
        clock.textContent = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Lisbon",
        }).format(new Date());
      } catch (_) {}
    };
    tick();
    setInterval(tick, 15000);
  }
})();
