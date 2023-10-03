document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("checkout-modal");
    var btn = document.getElementById("checkout");
    var span = document.getElementById("close-btn");

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
});
