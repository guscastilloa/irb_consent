const printButton = document.getElementById("print-page");
const backToTopButton = document.getElementById("back-to-top");
const navLinks = [...document.querySelectorAll(".section-nav a")];
const sections = [...document.querySelectorAll("[data-section]")];

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const updateBackToTop = () => {
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
};

const updateActiveSection = () => {
  if (!sections.length || !navLinks.length) {
    return;
  }

  const threshold = window.scrollY + 180;
  let currentSectionId = sections[0].id;

  for (const section of sections) {
    if (section.offsetTop <= threshold) {
      currentSectionId = section.id;
    }
  }

  for (const link of navLinks) {
    const isActive = link.getAttribute("href") === `#${currentSectionId}`;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "true" : "false");
  }
};

window.addEventListener("scroll", () => {
  updateBackToTop();
  updateActiveSection();
});

window.addEventListener("load", () => {
  updateBackToTop();
  updateActiveSection();
});
