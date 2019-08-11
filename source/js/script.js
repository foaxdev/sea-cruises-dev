window.addEventListener("DOMContentLoaded", function () {
    let btnToggle = document.querySelector(".js-toggle-btn");
    let elNavigation = document.querySelector(".js-nav");
    let elHeader = document.querySelector(".js-header");
    let elLists = document.querySelector(".js-lists");
    elLists.classList.add("header__lists-wrapper--fixed");
    elHeader.classList.add("header__wrapper--fixed");
    elNavigation.classList.add("menu-list--block");

    hideNavigation(btnToggle, elNavigation);
    addListenerForMenuButton(btnToggle, elNavigation);
});

function hideNavigation(btnToggle, elNavigation) {
    btnToggle.classList.add("header__toggle--show");
    elNavigation.classList.add("menu-list--hidden");
}

function addListenerForMenuButton(btnToggle, elNavigation) {
    btnToggle.addEventListener("click", function () {
        elNavigation.classList.toggle("menu-list--hidden");
    });
}
