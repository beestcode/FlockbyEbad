    function toggleMenu() {
        document.getElementById("menu").classList.toggle("show");
        document.querySelector(".menu-btn").style.display = "none";
    }

    function closeMenu() {
        document.getElementById("menu").classList.remove("show");
        document.querySelector(".menu-btn").style.display = "block";
    }