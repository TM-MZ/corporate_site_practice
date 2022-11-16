const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const humburger_target = document.getElementById("humburger-menu");
humburger_target.addEventListener("click", () => {
    humburger_target.classList.toggle("open");
    const nav = document.getElementById("drawer-nav");
    nav.classList.toggle('in');
});

scrollTop("buttonToTop");

function scrollTop(elem) {
    const target = document.getElementById(elem);
    target.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
