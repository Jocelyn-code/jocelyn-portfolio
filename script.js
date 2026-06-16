const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const contactForm = document.getElementById("contactForm");
    const formNote = document.getElementById("formNote");
    const yearEl = document.getElementById("year");

    yearEl.textContent = new Date().getFullYear();

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

  

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));