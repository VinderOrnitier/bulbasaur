window.onload = function() {

    var modal = document.getElementById("modal"),
        modalOverlay = document.getElementById("modal-overlay"),
        closeButton = document.getElementById("close-button"),
        openButton = document.getElementById("open-button");

    closeButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    });

    openButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    });

};