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
    $(".blur-wrapper").removeClass("blur");
    $(".hideHighlightedElement").removeClass("hideHighlightedElement");
    $("#highlighted-text").remove();
    
    let text = "";
    let selection = window.getSelection();
    if (selection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
         selection = document.selection
         text = document.selection.createRange().text;
     }

    if (text.length > 0) {
        if (selection.rangeCount > 1) {
            combineRanges(selection);
        }
        const range = selection.getRangeAt(0);
        const { commonAncestorContainer, startContainer, startOffset, endContainer, endOffset } = range;
        const { nodeName } = commonAncestorContainer
        if (!(nodeName === 'HEADER' || nodeName === 'BODY' || nodeName === 'HTML')) {

            // Get common ancestor of elements in range
            const parentElement = getSelectableParent(commonAncestorContainer);
           
            //const nodeIterator = document.createNodeIterator(parentElement);
            // while (nodeIterator.nextNode()) {
            //     const { referenceNode: node } = nodeIterator;
            //     if (nodes.length === 0 && node !== startContainer) continue;
            //     if (!(node.nodeName === "#text" && node.textContent.includes('\n'))) {
            //         nodes.add(getSelectableParent(node));
            //     } 
            //     if (node === endContainer) break;
            // }
            
            // Add all direct child nodes of parent to array
            const nodeArray = Array.from(parentElement.childNodes).filter(node => !(node.nodeName === "#text" && node.textContent.includes('\n')));

            
            // ALTERNATIVE: 
            // Directly manipulate nodes in range

            // Potentially: https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize

            // Make a copy of nodes
            

            // Insert copy of in relative position matching boundingClientRect of original parent
            // let parentElement;
            // if (nodeArray.length === 0) {
            //     parentElement = document.querySelector('body');
            // } else if (nodeArray.length === 1) {
            //     parentElement = nodeArray[0];
            // } else if (nodeArray.length > 1) {
            //     parentElement = nodeArray[0].parentElement;
            // }
            const { x, y, width } = parentElement.getBoundingClientRect();
            const elementWithBlur = document.createElement('div');
            elementWithBlur.classList = parentElement.classList;
            $(elementWithBlur).attr('id', 'highlighted-text').css({ 'position': 'absolute', 'top': `${y}px`, 'left': `${x}px`, 'width': `${width}px` })
            
            // Hide original nodes
            

            // Add clone nodes to elementWithBlur
            const cloneNodes = nodeArray.map((node) => node.cloneNode(true));
            cloneNodes.forEach(node => $(elementWithBlur).append(node));

            const cloneRange = document.createRange();

            const nodeIterator = document.createNodeIterator(elementWithBlur);
            while (nodeIterator.nextNode()) {
                const { referenceNode: node } = nodeIterator;
                if (node.data === startContainer.data) {
                    cloneRange.setStart(node, startOffset);
                }
                if (node.data === endContainer.data) {
                    cloneRange.setEnd(node, endOffset)
                }
                if (node === endContainer) break;
            }

            nodeArray.forEach(node => $(node).addClass('hideHighlightedElement'));
            parentElement.classList.add('hideHighlightedElement');

            console.log(cloneRange)
            // Iterate through all clone nodes and descendants and set blur and highlight tags where appropriate
            // If it doesn't intersect range, it should get the blur class
            // If it does intersect range, and if it doesn't contain start or end container, it should get the highlight class
            // If it intersects range and contains start or end, add blur and highlight tags where appropriate

            // cloneNodes.forEach((node) => {
            //     const childNodes = getTextNodes(node);
            //     const containsStartContainer = childNodes.find(childNode => childNode.data === startContainer.data);
            //     const containsEndContainer = childNodes.find(childNode => childNode.data === endContainer.data);
            //     const actualStartOffset = !containsStartContainer ? 0 : getActualOffset(childNodes, childNodes.indexOf(containsStartContainer), startOffset);
            //     const actualEndOffset = !containsEndContainer ? 0 : getActualOffset(childNodes, childNodes.indexOf(containsEndContainer), endOffset);

            //     const p = document.createElement(node.nodeName.toLowerCase());
            //     p.classList = node.classList;
            //     p.classList.add('cloneParagraph');
                
            //     if (!containsStartContainer && !containsEndContainer) {
            //         p.innerHTML = `<span class="${$(elementWithBlur).has('.highlighted').length > 0 ? "highlighted" : "blur"}">${node.innerText}</span>`;
            //     } else if (containsStartContainer && !containsEndContainer) {
            //         const highlightFromStart = startOffset === 0;
            //         p.innerHTML = `${highlightFromStart ? '' : '<span class="blur">'}${node.innerText.substring(0, actualStartOffset)}${highlightFromStart ? '' : '</span>'}<span class="highlighted">${node.innerText.substring(actualStartOffset)}</span>`;
            //     } else if (!containsStartContainer && containsEndContainer) {
            //         p.innerHTML = `<span class="highlighted">${node.innerText.substring(0, actualEndOffset)}</span><span class="blur">${node.innerText.substring(actualEndOffset)}</span>`;
            //     } else if (containsStartContainer && containsEndContainer) {
            //         const highlightFromStart = startOffset === 0;
            //         const highlightEndsAtEnd = endOffset === node.innerText.length -1;
            //         p.innerHTML = `${highlightFromStart ? '' : '<span class="blur">'}${node.innerText.substring(0, actualStartOffset)}${highlightFromStart ? '' : '</span>'}<span class="highlighted">${node.innerText.substring(actualStartOffset, actualEndOffset)}</span>${highlightEndsAtEnd ? '' : '<span class="blur">'}${node.innerText.substring(actualEndOffset)}${highlightEndsAtEnd ? '' : '</span>'}`
            //     }

            //     $(elementWithBlur).append(p)

            // });
            //console.log(range)
            cloneNodes.forEach(node => {
                //console.log(range.intersectsNode(node))
            });

            
            if ($(elementWithBlur).children().length > 0) {
                // Blur everything
                $(".blur-wrapper").addClass("blur");
                
            }

            $('body').prepend(elementWithBlur);
        }
    }
});

function getActualOffset(childNodes, index, containerOffset) {
    let offset = 0;
    for (var i = 0; i < index; i++) {
        offset += childNodes[i].length;
    }

    return offset + containerOffset;
}

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

// function blurAllNonSelectionNodes(selection) {
//     const allNodes = Array.from(document.getElementsByTagName('*'));
//     console.log(selection)
//     allNodes.forEach(node => {
//         if (node.nodeName !== "HTML" && node.nodeName !== "BODY" && node.nodeName !== "HEADER" && node.nodeName !== "DIV") {
//             console.log(selection.containsNode(node))
//             if (!selection.containsNode(node)) {
//                 node.classList.add('blur');
//             }
//         }
//     })
// }

function combineRanges(selection) {
    const mainRange = selection.getRangeAt(0);
    const lastRange = selection.getRangeAt(selection.rangeCount - 1);
    mainRange.setEnd(lastRange.endContainer, lastRange.endOffset);
}