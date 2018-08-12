var isOpen = false;

function moveCtxMenu() {
    var pos = $("#more").position();
    $(".logged-in-ctx").css("top", pos.top + 25);
    $(".logged-in-ctx").css("left", pos.left - 110);
}

function toggleNavOpts() {
    moveCtxMenu();
    if (isOpen) {
        $(".logged-in-ctx").css("display", "none");
    } else {
        $(".logged-in-ctx").css("display", "block");
    }
    isOpen = !isOpen;
}

$(window).resize(moveCtxMenu);
$(document).ready(moveCtxMenu);
