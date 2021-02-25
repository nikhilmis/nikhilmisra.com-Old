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

    // Add all parent elements to array

    while (nodeIterator.nextNode()) {
      const { referenceNode: node } = nodeIterator;
      if (nodes.length === 0 && node !== startContainer) continue;
      if (!(node.nodeName === "#text" && node.textContent.includes('\n')) && node.nodeName !== "DIV") {
        nodes.add(getSelectableParent(node));
      }

      if (node === endContainer) break;
    }

    const nodeArray = Array.from(nodes);

    // Make a copy of and hide originals
    const cloneNodes = nodeArray.map((node) => node.cloneNode(true));
    nodes.forEach(node => $(node).addClass('hideHighlightedElement'));

    // TODO surroundContents of range with: </span> at the beginning, <span class="blur-span> at the end. 
    // Then insert the rest of the tags at the beginning and end of parent container
    // OR: in parent container innerHTML, string replace. But then, problem with non-unique strings (e.g. which "i" in Nikhil Misra) 
    // OR: count length of parent string until beginning of range somehow, then insert tags at start and that index
    // https://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container

    //console.log(startContainer, endContainer)

    // let cloneTextNodes = [];
    // cloneNodes.forEach(node => {
    //   const textNodes = getTextNodes(node);
    //   cloneTextNodes.push(...textNodes);
    // })
    // console.log(cloneTextNodes[0])
    // cloneTextNodes[0].nodeValue = `<span class="blur">${cloneTextNodes[0].nodeValue}</span>`;

    console.log(startContainer)
    let textLength = 0;
    cloneNodes.forEach((node, index) => {
      node.innerHTML = node.innerHTML.replace(/\r?\n|\r/g, '');
      node.innerHTML = '<span class="blur">' + node.innerHTML + '</span>';



      const childTextNodes = getTextNodes(node);
      childTextNodes.forEach(textNode => {
        if (textNode.data !== startContainer.data) 
          console.log(textNode, startOffset)
          //node.innerHTML = node.innerHTML.substring(0, startOffset) + '</span><span class="highlighted">' + node.innerHTML.substring(startOffset, textNode.length -1) + '</span>';
      })
    })

    // for each node,
    // if child nodes does not contain start or end container, 
    // add blur to classList
    // else if it contains start container, but not end container,
    // --> Edge case: start container is firstChild and startOffset is 0, in this case, no blur tag needed at the start or at actual startOffset
    // add blur span to start, then get actual startOffset, and add blur end tag and highlight start tag, then add highlight end tag at end
    // else if it contains end container, but not start container, get actual endOffset, add highlight start tag to start, and add highlight end tag and blur start tag at offset, and blur end tag at end
    // else if it contains both, add blur tag at start, get actual startOffset, add blur end and highlight start there, then get actual endOffset, add highlight end and blur start there, and blur end tag at end
    // --> Edge case: start container is firstChild and startOffset is 0, in this case, no blur tag needed at the start or at actual startOffset
    // --> Edge case: end container is lastChild and endOffset is === endContainer.length, in this case no blur tag needed at actual endOffset and at end


    // for each clone node, get child text nodes
    // for each text node in array
    // if clone node is first in array, add blur span at the beginning
    // add node's text length to a selectionStartIndex variable
    // if node is not startContainer, keep going
    // else insert blur span end tag and highlighted text span at the startOffset's index
    // then if startContainer and endContainer is the same, add highlighted text end tag at the endOffset's index
    // else if node is not endContainer, keepgoing,
    // then at end add blur end tag

    // Insert blur span tags before and after selection
    // const firstElement = copyNodes[0];
    // const firstElementText = firstElement.innerText.split('');
    // firstElementText[0] = '<span class="blur-span">' + firstElementText[0];
    // firstElementText[startOffset] = '</span>' + firstElementText[startOffset];
    // firstElement.innerHTML = firstElementText.join('');

    // Insert copy of in relative position matching boundingClientRect of original parent
    const outermostElement = nodeArray.length === 1 ? nodeArray[0] : nodeArray[0].parentElement;
    const { x, y, width } = outermostElement.getBoundingClientRect();
    const elementWithBlur = document.createElement('div');
    $(elementWithBlur).attr('id', 'highlighted-text').css({'position': 'absolute', 'top': `${y}px`, 'left': `${x}px`, 'width': `${width}px`})

    cloneNodes.forEach((node) => {
      const p = document.createElement('p');
      p.innerHTML = node.innerHTML;
      p.classList = node.classList;
      $(p).addClass('cloneParagraph');
      $(elementWithBlur).append(p)
    })

    $('body').prepend(elementWithBlur);

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

function getTextNodes(node) {
  const textFinder = document.createNodeIterator(node, NodeFilter.SHOW_TEXT);
  
  // Show the content of every non-empty text node that is a child of root
  let textNodes = [];
  let currentTextNode;
  
  while ((currentTextNode = textFinder.nextNode())) {
    
    textNodes.push(currentTextNode)
  }
  return textNodes;
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