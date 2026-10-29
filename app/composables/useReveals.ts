export function useReveals() {
  let observer: IntersectionObserver | undefined;
  onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const bounds = el.getBoundingClientRect();
      if (bounds.top > window.innerHeight) el.classList.add("reveal-pending");
      observer?.observe(el);
    });
  });
  onBeforeUnmount(() => observer?.disconnect());
}
