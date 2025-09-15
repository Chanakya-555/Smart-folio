console.log("Smartfolio JS Loaded Successfully!");

document.getElementById("helloBtn").addEventListener("click", function () {
  alert("Hello from Chanakya's Smartfolio! 👋");
});

document.getElementById("darkModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.documentElement.style.setProperty('--dark-bg', '#ffffff');
    document.documentElement.style.setProperty('--text-light', '#000000');
    document.documentElement.style.setProperty('--card-bg', '#f0f0f0');
    document.documentElement.style.setProperty('--primary-yellow', '#F2C300'); 
    document.documentElement.style.setProperty('--accent-blue', '#007BFF');
  } else {
    document.documentElement.style.setProperty('--dark-bg', '#121212');
    document.documentElement.style.setProperty('--text-light', '#ffffff');
    document.documentElement.style.setProperty('--card-bg', '#1e1e1e');
    document.documentElement.style.setProperty('--primary-yellow', '#FFFC00');
    document.documentElement.style.setProperty('--accent-blue', '#00C2FF');
  }
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
