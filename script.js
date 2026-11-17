const reveals = document.querySelectorAll(".reveal");
const header = document.querySelector(".top");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

reveals.forEach((el, index) => {
  if (el.closest(".hero")) {
    el.style.transitionDelay = `${index * 70}ms`;
  }
  observer.observe(el);
});

const onScroll = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
