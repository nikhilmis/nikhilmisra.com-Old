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

document.addEventListener('selectionchange', function() {
  $(".blur-wrapper").removeClass("blur");
  $(".hideHighlightedElement").removeClass("hideHighlightedElement");
  $("#highlighted-text").remove();

  let text = "";
  let selection = window.getSelection();
  if (selection) {
      text = window.getSelection().toString();
  } 
  // else if (document.selection && document.selection.type != "Control") {
  //     selection = document.selection
  //     text = document.selection.createRange().text;
  //     parentElement = window.getSelection().anchorNode.parentElement;
  // }
  
  if (text.length > 0) {
    
    // Blur everything
    $(".blur-wrapper").addClass("blur");
    
    const range = selection.getRangeAt(0);
    const { commonAncestorContainer, startContainer, startOffset, endContainer, endOffset } = range;
    const { nodeName } = commonAncestorContainer
    if (!(nodeName === 'HEADER' || nodeName === 'BODY' || nodeName === 'HTML')) {
    
    const parentElement = getSelectableParent(commonAncestorContainer);
    const nodeIterator = document.createNodeIterator(parentElement);

    var nodes = new Set();
    // Iterate through nodes in range, remove any containing newline
    // TODO REFACTOR THIS!!
    // while (nodeIterator.nextNode()) {
    //   const { referenceNode } = nodeIterator;
    //   if (nodes.length === 0 && referenceNode !== startContainer) continue;
    //   if (!referenceNode.textContent.includes('\n')) {
    //     if (referenceNode.nodeName === 'P') {
    //       nodes.push(referenceNode)
    //     } else if (referenceNode.nodeName === 'A') {
    //       nodes.push(referenceNode.parentElement);
    //     } else if (referenceNode.nodeName === '#text') {
    //       if (referenceNode.parentElement.nodeName === 'P') {
    //         nodes.push(referenceNode.parentElement)
    //       } else {
    //         nodes.push(referenceNode.parentElement.parentElement)
    //       }
    //     }
    //   }
    //   if (referenceNode === endContainer) break;
    // }

    while (nodeIterator.nextNode()) {
      const { referenceNode: node } = nodeIterator;
      console.log("node:", node)
      if (nodes.length === 0 && node !== startContainer) continue;
      if (!(node.nodeName === "#text" && node.textContent.includes('\n')) && node.nodeName !== "DIV") {
        nodes.add(getSelectableParent(node));
      }

      if (node === endContainer) break;
    }

    console.log(nodes)

    // // Copy nodes
    // let copyNodes = [];
    // // Hide originals
    // nodes.forEach((node) => {
    //   const copyNode = node.cloneNode(true);
    //   const copyNodeIsInArray = copyNodes.some(copyInArray => {
    //     copyInArray.innerText.localeCompare(copyNode.innerText)
    //   });
    //   if (!copyNodeIsInArray) {
    //     copyNodes.push(node.cloneNode(true));
    //   }
    //   $(node).addClass('hideHighlightedElement');
    // });

    //console.log(copyNodes)

    // TODO surroundContents of range with: </span> at the beginning, <span class="blur-span> at the end. 
    // Then insert the rest of the tags at the beginning and end of parent container
    // OR: in parent container innerHTML, string replace. But then, problem with non-unique strings (e.g. which "i" in Nikhil Misra) 
    // OR: count length of parent string until beginning of range somehow, then insert tags at start and that index
    // https://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container

    // Insert blur span tags before and after selection
    // const firstElement = copyNodes[0];
    // const firstElementText = firstElement.innerText.split('');
    // firstElementText[0] = '<span class="blur-span">' + firstElementText[0];
    // firstElementText[startOffset] = '</span>' + firstElementText[startOffset];
    // firstElement.innerHTML = firstElementText.join('');

    // Insert copy of in relative position matching boundingClientRect of original parent
    // const { x, y, width } = parentElement?.getBoundingClientRect();

    // const elementWithBlur = document.createElement('div');
    // $(elementWithBlur).attr('id', 'highlighted-text').css({'position': 'absolute', 'top': `${y}px`, 'left': `${x}px`, 'width': `${width}px`})

    // copyNodes.forEach((node) => {
    //   const p = document.createElement('p');
    //   p.innerText = node.innerText;
    //   p.classList = node.classList;
    //   $(p).addClass('cloneParagraph');
    //   $(elementWithBlur).append(p)
    // })


    //$('body').prepend(elementWithBlur);

    // const parent = getSelectableParent(commonAncestorContainer);
    
    // // Hide original parent elements
    // $(parent).addClass('hideHighlightedElement');
    // const textBeforeSelection = getTextBeforeSelection(parent.firstChild, "", selection);
    // const textAfterSelection = getTextAfterSelection(selection.focusNode, "", selection, parent.childNodes);
    
    // // Insert copy of in relative position matching boundingClientRect of original parent
    // const { x, y, width } = parentElement?.getBoundingClientRect();
    // const paragraphs = text.match(/[^\r\n]+/g);
    // const indentedHeaderParagraphs = $(parent).find('.header-expanded-bio').length !== 0;
    
    // let textElement;
    // if (paragraphs.length > 1) {
    //   textElement = paragraphs.map((p, index) => `
    //   <p class="highlighted highlighted-paragraph ${index > 0 && indentedHeaderParagraphs ? ' header-expanded-bio' : ''}">${p}</p>
    // `).join('')
    // } else {
    //   textElement = `<span class="highlighted">${text}</span>`;
    // }
    // var elementWithBlur = `
    //     <div id="highlighted-text" style="position: absolute; top: ${y}px; left: ${x}px; width: ${width}px;">
    //       <span class="blur">${textBeforeSelection}</span>${textElement}<span class="blur">${textAfterSelection}</span>
    //     </div>
    //   `
    
    // $('body').prepend(elementWithBlur);
  }
  }
});

function getSelectableParent(element) {
  switch (element.nodeName) {
    case "HEADER":
    case "BODY":
    case "HTML":
      return element.firstChild;
    case "P":
    case "H1":
    case "H2":
    case "H3":
    case "H4":
    case "H5":
    case "DIV":
      return element;
    default:
      return getSelectableParent(element.parentElement)
  }
}

function getTextBeforeSelection(element, prevText, selection) {
  
  const { anchorNode, anchorOffset } = selection;
  const elementText = element.innerText ?? element.wholeText;
  let text = prevText;
  if (element === anchorNode || element.firstChild === anchorNode || element.lastChild == anchorNode) {
    text += elementText.substring(0, anchorOffset);
    return text;
  } else if (element.nextSibling) {
    text += elementText;
    return getTextBeforeSelection(element.nextSibling, text, selection)
  } else {
    return prevText;
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