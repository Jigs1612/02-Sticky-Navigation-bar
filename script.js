`use strict`;
window.addEventListener("scroll", function() {
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scroll > 0);
})