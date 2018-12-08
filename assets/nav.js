var isOpen = false;

function moveCtxMenu() {
    var pos = $("a#more").position();
    $(".logged-in-ctx").css("top", pos.top + 25);
    $(".logged-in-ctx").css("left", pos.left - 170);
}

function toggleNavOpts() {
    moveCtxMenu();
    if (isOpen) {
        $(".logged-in-ctx").css("display", "none");
        $("a#more .fas").css("transform", "rotate(0deg)");
    } else {
        $(".logged-in-ctx").css("display", "block");
        $("a#more .fas").css("transform", "rotate(180deg)");
    }
    isOpen = !isOpen;
}

$(window).resize(moveCtxMenu);
$(document).ready(moveCtxMenu);
