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
  $(".blur-wrapper").removeClass("blur");
  $(".hideHighlightedElement").removeClass("hideHighlightedElement");
  $("#highlighted-text").remove();

  let text = "";
  let parentElement;
  let selection = window.getSelection();
  if (selection) {
      text = window.getSelection().toString();
      parentElement = getSelectableParent(window.getSelection().anchorNode);

  } 
  // else if (document.selection && document.selection.type != "Control") {
  //     selection = document.selection
  //     text = document.selection.createRange().text;
  //     parentElement = window.getSelection().anchorNode.parentElement;
  // }
  
  if (text.length > 0) {
      // Hide original parent element
      $(parentElement).addClass("hideHighlightedElement");

      // Blur everything
      $(".blur-wrapper").addClass("blur");
      const range = selection.getRangeAt(0);
      const { commonAncestorContainer } = range;
      const parent = getSelectableParent(commonAncestorContainer);
      const textBeforeSelection = getTextBeforeSelection(parent.firstChild, "", selection);
      const textAfterSelection = getTextAfterSelection(selection.focusNode, "", selection, parent.childNodes);
      
      // Insert copy of in relative position matching boundingClientRect of original parent
      const { x, y, width } = parentElement?.getBoundingClientRect();
      const paragraphs = text.match(/[^\r\n]+/g);
      const indentedHeaderParagraphs = $(parent).find('.header-expanded-bio').length !== 0;
      
      let textElement;
      if (paragraphs.length > 1) {
        textElement = paragraphs.map((p, index) => `
        <p class="highlighted highlighted-paragraph ${index > 0 && indentedHeaderParagraphs ? ' header-expanded-bio' : ''}">${p}</p>
      `).join('')
      } else {
        textElement = `<span class="highlighted">${text}</span>`;
      }
      var elementWithBlur = `
          <div id="highlighted-text" style="position: absolute; top: ${y}px; left: ${x}px; width: ${width}px;">
            <span class="blur">${textBeforeSelection}</span>${textElement}<span class="blur">${textAfterSelection}</span>
          </div>
        `
      
      $('body').prepend(elementWithBlur);
  }
});

function getSelectableParent(element) {
  switch (element.nodeName) {
    case "HEADER":
    case "BODY":
    case "HTML":
      return undefined;
    case "P":
    case "H1":
    case "H2":
    case "H3":
    case "H4":
    case "H5":
    case "SECTION":
      return element;
    default:
      return getSelectableParent(element.parentElement)
  }
}

function getTextBeforeSelection(element, prevText, selection) {
  const { anchorNode, anchorOffset } = selection;
  const elementText = element.innerText ?? element.wholeText;
  let text = prevText;
  if (element === anchorNode || element.firstChild === anchorNode) {
    text += elementText.substring(0, anchorOffset);
    return text;
  } else if (element.nextSibling) {
    text += elementText;
    return getTextBeforeSelection(element.nextSibling, text, selection)
  }
}

function getTextAfterSelection(element, prevText, selection, childNodes) {
  const parentChildNodes = Array.from(childNodes);
  const elementIsChild = parentChildNodes.indexOf(element) > -1;
  const elementParentIsChild = parentChildNodes.indexOf(element.parentElement) > -1;
  
  let text = prevText;
  const { focusNode, focusOffset } = selection;
  const elementText = element.innerText ?? element.wholeText;
  
  if (element === focusNode || element.firstChild === focusNode) {
    text += elementText.substring(focusOffset);
  } else {
    text += elementText;
  }

  if (element.nextSibling && elementIsChild) {
    return getTextAfterSelection(element.nextSibling, text, selection, childNodes);
  } else if (element.parentElement.nextSibling && (elementIsChild || elementParentIsChild)) {
    return getTextAfterSelection(element.parentElement.nextSibling, text, selection, childNodes) 
  } else {
    return text;
  }
}