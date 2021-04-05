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
    $(this).find("img, video").css("top", e.clientY + 50 + "px").css("left", e.clientX + 200 + "px");
})

$(".work li a").mouseover(function (e) {
    $(this).find("video").attr("autoplay", "true");
})

$(".work li a").mouseout(function (e) {
    var video = $(this).find("video");
    video.removeAttr("autoplay");
    if (video.length > 0) {
        video[0].currentTime = 0;
    }
})

document.addEventListener('selectionchange', function () {
    blurNonSelection();
});

function blurNonSelection() {
    document.body.classList.remove('blur');

    let text = "";
    let selection = window.getSelection();
    if (selection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }

    if (text.length > 0) document.body.classList.add('blur');
}