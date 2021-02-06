$(".header-expand-bio").on('click', function() {
  const moreText = "(...More Information)";
  const hideText = "(Hide Information...)";
  $(this).html($(this).html() === moreText ? hideText : moreText);
  $(".header-expanded-bio, .header-details").toggleClass("header-hide");
  $(".header-expanded-bio, .header-details").toggleClass("header-show");
})

$(".work li a").mousemove(function(e) {
    $(this).find("img").css("top",e.clientY+50+"px").css("left",e.clientX+200+"px");
})

document.addEventListener('selectionchange',  function() {
  $(".hideHighlightedElement").removeClass("hideHighlightedElement");
  $("#highlighted-text").remove();
  $(".blur-wrapper").removeClass("blur");

  let text = "";
  let parentElement;
  if (window.getSelection) {
      text = window.getSelection().toString();
      parentElement = window.getSelection().anchorNode.parentElement;

  } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
      parentElement = window.getSelection().anchorNode.parentElement;
      // blurOnHighlight(text);
  }
  
  if (text.length > 0) {
      // Hide original parent element
      $(parentElement).addClass("hideHighlightedElement");

      // Blur everything
      $(".blur-wrapper").addClass("blur");

      // Copy parent element and add span tags with blur class before and after selection
      var copyElement = parentElement;
      console.log(copyElement.innerText);
      console.log(copyElement.textContent);
      var splitText = copyElement.innerText.split(text);
      
      // Insert copy of in relative position matching boundingClientRect of original parent
      var x = parentElement?.getBoundingClientRect().left;
      var y = parentElement?.getBoundingClientRect().top;
      var width = parentElement?.getBoundingClientRect().width;
      var elementWithBlur = `
          <div id="highlighted-text" style="position: absolute; top: ${y}px; left: ${x}px; width: ${width}px;">
            <span class="blur">${splitText[0]}</span>
            <span class="highlighted">${text}</span>
            <span class="blur">${splitText[1]}</span>
          </div>
        `
      
      $('body').prepend(elementWithBlur);
  }
})  ;


// function blurOnHighlight(text, x, y) {
//     $('body').prepend(`<div id="highlighted-text" style="position: relative;">
//     <p style="top: ${x}; left: ${y}; position: absolute">${text}</p>
//     </div>`);
//     $(".blur-wrapper").addClass("blur");
// }