const menu = document.querySelector(".navbar.Hide");
const himf = document.getElementById("him_f");
const himc = document.getElementById("him_c");
const drop = document.querySelector(".dropdown-menu");
const dr = document.querySelector(".c");

document.getElementById("close").onclick = function () {
    menu.style.display = "none";
    document.body.style.overflow = ""; // Reset scrolling
    document.documentElement.style.overflow = ""; // Reset for <html>
};

document.getElementById("men").onclick = function () {
    menu.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling
    document.documentElement.style.overflow = "hidden"; // Disable for <html>
};

document.getElementById("feature").onclick = function () {
    himf.style.display = himf.style.display === "none" ? "block" : "none";
};

document.getElementById("company").onclick = function () {
    himc.style.display = himc.style.display === "none" ? "block" : "none";
};
document.getElementById("feat").onclick = function () {
    drop.style.display =  drop.style.display === "none" ? "block" : "none";
};
document.getElementById("com").onclick = function () {
    dr.style.display =  dr.style.display === "none" ? "block" : "none";
};