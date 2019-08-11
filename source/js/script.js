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

    let arrOrderButtons = document.querySelectorAll(".js-btn-order");
    let elModalWindow = document.querySelector(".modal");
    let btnClose = document.querySelector(".js-close");
    openModalWindow(arrOrderButtons, elModalWindow, btnClose);
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

function openModalWindow(arrButton, elModalWindow, btnClose) {
    for (let i = 0; i < arrButton.length; i++) {
        arrButton[i].addEventListener("click", function (evt) {
            if(document.body.clientWidth >= 750) {
                evt.preventDefault();
                elModalWindow.classList.add("modal--show");
            }
        });
    }

    document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
            elModalWindow.classList.toggle("modal--show");
        }
    });

    btnClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        elModalWindow.classList.remove("modal--show");
    });
}
