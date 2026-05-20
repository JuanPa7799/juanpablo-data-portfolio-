const contactoData = {
  github: "https://github.com/JuanPa7799",
  linkedin: "https://www.linkedin.com/in/juan-pablo-garcia-chavez/",
  email: "juanpablogarciachavez7799@gmail.com",
  cv: "assets/pdf/Portafolio_de_evidencias_V2.pdf"
};

const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  const type = link.dataset.contactLink;

  if (type === "email") {
    link.href = `mailto:${contactoData.email}`;
  }

  if (type === "github" || type === "linkedin" || type === "cv") {
    link.href = contactoData[type];
  }
});
