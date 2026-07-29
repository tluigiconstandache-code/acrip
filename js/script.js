/*
===========================================
A.C.R.I.P.
Site în construcție
JavaScript
===========================================
*/

// Pagina s-a încărcat complet
window.addEventListener("load", function () {

    console.log("Site-ul A.C.R.I.P. a fost încărcat cu succes.");

});

// Actualizare automată a anului
const footer = document.querySelector("footer");

if (footer) {

    const anCurent = new Date().getFullYear();

    footer.innerHTML = `
        &copy; ${anCurent} A.C.R.I.P.<br>
        Toate drepturile rezervate.
    `;

}

// Efect discret pentru logo
const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("mouseenter", function () {

        logo.style.transform = "scale(1.08) rotate(2deg)";

    });

    logo.addEventListener("mouseleave", function () {

        logo.style.transform = "scale(1) rotate(0deg)";

    });

}

// Efect pentru banner
const constructie = document.querySelector(".constructie");

if (constructie) {

    constructie.addEventListener("mouseenter", function () {

        constructie.style.background = "#e67e22";

    });

    constructie.addEventListener("mouseleave", function () {

        constructie.style.background = "#ff9800";

    });

}

// Buton Facebook
const facebookButton = document.querySelector(".facebook-button");

if (facebookButton) {

    facebookButton.addEventListener("click", function (event) {

        if (facebookButton.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Pagina oficială de Facebook va fi disponibilă în curând.");

        }

    });

}