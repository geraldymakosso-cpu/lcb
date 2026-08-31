"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export function NavCurtain() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isNavigating = useRef(false);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const liftCurtain = (el: HTMLElement) => {
    if (safetyTimer.current) clearTimeout(safetyTimer.current);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.removeAttribute("data-exiting");
        el.setAttribute("data-entering", "");
        safetyTimer.current = setTimeout(() => {
          el.removeAttribute("data-covering");
          el.removeAttribute("data-entering");
          isNavigating.current = false;
        }, 820);
      });
    });
  };

  // New page loaded — lift curtain
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.hasAttribute("data-covering")) liftCurtain(el);
    // Hard safety net: always release after 2.5s no matter what
    const safety = setTimeout(() => {
      el.removeAttribute("data-covering");
      el.removeAttribute("data-exiting");
      el.removeAttribute("data-entering");
      isNavigating.current = false;
    }, 2500);
    return () => clearTimeout(safety);
  }, [pathname]);

  // Intercept all internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";

      // Only intercept internal paths — prevent native nav for all of them
      if (!href.startsWith("/") || href.startsWith("//")) return;
      if (link.getAttribute("target")) return;
      if (href.startsWith("#")) return;

      // Always prevent the browser from following the link natively
      e.preventDefault();

      // If already transitioning, ignore the click but keep the prevention
      if (isNavigating.current) return;

      const el = ref.current;
      if (!el) return;

      isNavigating.current = true;
      el.removeAttribute("data-entering");
      el.setAttribute("data-covering", "");
      el.setAttribute("data-exiting", "");

      setTimeout(() => router.push(href), 80);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return <div ref={ref} className="nav-curtain" aria-hidden="true" />;
}
