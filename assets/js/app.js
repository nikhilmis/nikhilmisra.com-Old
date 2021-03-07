$(".header-expand-bio").on('click', function () {
    const moreText = "(...More Information)";
    const hideText = "(Hide Information...)";
    const show = $(this).html() === moreText;
    $(this).html($(this).html() === moreText ? hideText : moreText);

    $(".header-expanded-bio, .header-details").animate({
        marginTop: show ? 22 : 0,
        marginBottom: show ? 22 : 0,
        opacity: show ? 1 : 0,
        maxHeight: show ? 500 : 0,

    },
        250
    )
    $(".header-expanded-bio, .header-details").toggleClass("header-hide");
})

$(".work li a").mousemove(function (e) {
    $(this).find("img").css("top", e.clientY + 50 + "px").css("left", e.clientX + 200 + "px");
})

document.addEventListener('selectionchange', function () {
    blurNonSelection();
});

function blurNonSelection() {
    $('.blur').removeClass('blur');

    let text = "";
    let selection = window.getSelection();
    if (selection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }

    if (text.length > 0) {
        const allNodes = Array.from(document.body.getElementsByTagName('*'));
        allNodes.forEach(node => node.classList.add('blur'));
    }
}