    
    //show and hide menu buton
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
    document.querySelector(".menu-btn").style.display = "none";
}
    //hide menu
function closeMenu() {
    document.getElementById("menu").classList.remove("show");
    document.querySelector(".menu-btn").style.display = "block";
}