export interface RevealOptions extends IntersectionObserverInit {
  prefix?: string;
}

export function reveal(
  root: ParentNode = document,
  { prefix = "kd-", rootMargin = "0px 0px -10% 0px", ...init }: RevealOptions = {},
): IntersectionObserver | undefined {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${prefix}reveal--in`);
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin, ...init },
  );

  root.querySelectorAll(`.${prefix}reveal`).forEach((target) => observer.observe(target));

  return observer;
}
