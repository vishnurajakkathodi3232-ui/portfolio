const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggle.textContent = "☀️";
}

toggle.onclick = () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    toggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
};
