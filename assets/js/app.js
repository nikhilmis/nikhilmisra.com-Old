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
    // $(".blur-wrapper").removeClass("blur");
    // $(".hideHighlightedElement").removeClass("hideHighlightedElement");
    // $("#highlighted-text").remove();
    $('.blur').removeClass('blur');

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
        // const { nodeName } = commonAncestorContainer
        // if (!(nodeName === 'HEADER' || nodeName === 'BODY' || nodeName === 'HTML')) {

        //     // Get common ancestor of elements in range
        //     const parentElement = getSelectableParent(commonAncestorContainer);

        //     // Add all direct child nodes of parent to array
        //     const nodeArray = Array.from(parentElement.childNodes).filter(node => !(node.nodeName === "#text" && node.textContent.includes('\n')));

        //     // Insert copy of in relative position matching boundingClientRect of original parent
        //     const { x, y, width } = parentElement.getBoundingClientRect();
        //     const cloneParent = document.createElement('div');
        //     cloneParent.classList = parentElement.classList;
        //     $(cloneParent).attr('id', 'highlighted-text').css({ 'position': 'absolute', 'top': `${y}px`, 'left': `${x}px`, 'width': `${width}px` })

        //     // Add clone nodes to cloneParent
        //     const cloneNodes = nodeArray.map((node) => node.cloneNode(true));
        //     cloneNodes.forEach(node => $(cloneParent).append(node));

            

        //     // Get all text nodes
        //     const textNodes = getTextNodes(cloneParent);
        //     const textHoldingNodes = [...new Set(textNodes.map(textNode => getSelectableParent(textNode)))];

        //     //Clone Range of original selection
        //     const cloneRange = document.createRange();
        //     const nodeIterator = document.createNodeIterator(cloneParent);
        //     while (nodeIterator.nextNode()) {
        //         const { referenceNode: node } = nodeIterator;
        //         if (node.data === startContainer.data) {
        //             cloneRange.setStart(node, startOffset);
        //         }
        //         if (node.data === endContainer.data) {
        //             cloneRange.setEnd(node, endOffset);
        //         }
        //         if (node === endContainer) break;
        //     }

        //     // Iterate through all nodes under cloneParent containing text elements and apply styles
        //     textHoldingNodes.forEach(node => {
        //         const childNodes = getTextNodes(node);
        //         const containsStartContainer = childNodes.find(textNode => textNode.data === startContainer.data);
        //         const containsEndContainer = childNodes.find(textNode => textNode.data === endContainer.data);
        //         const actualStartOffset = !containsStartContainer ? 0 : getActualOffset(childNodes, childNodes.indexOf(containsStartContainer), startOffset);
        //         const actualEndOffset = !containsEndContainer ? 0 : getActualOffset(childNodes, childNodes.indexOf(containsEndContainer), endOffset);

        //         if (!containsStartContainer && !containsEndContainer) {
        //             const nodeIsInSelection = cloneRange.intersectsNode(node);
        //             node.innerHTML = `<mark class=${nodeIsInSelection ? "highlighted" : "blur"}>${node.innerText}</mark>`;
        //         } else if (containsStartContainer && !containsEndContainer) {
        //             const highlightFromStart = startOffset === 0;
        //             node.innerHTML = `${highlightFromStart ? '' : '<mark class="blur">'}${node.innerText.substring(0, actualStartOffset)}${highlightFromStart ? '' : '</mark>'}<mark class="highlighted">${node.innerText.substring(actualStartOffset)}</mark>`;
        //         } else if (!containsStartContainer && containsEndContainer) {
        //             node.innerHTML = `<mark class="highlighted">${node.innerText.substring(0, actualEndOffset)}</mark><mark class="blur">${node.innerText.substring(actualEndOffset)}</mark>`;
        //         } else if (containsStartContainer && containsEndContainer) {
        //             const highlightFromStart = startOffset === 0;
        //             const highlightEndsAtEnd = endOffset === node.innerText.length -1;
        //             node.innerHTML = `${highlightFromStart ? '' : '<mark class="blur">'}${node.innerText.substring(0, actualStartOffset)}${highlightFromStart ? '' : '</mark>'}<mark class="highlighted">${node.innerText.substring(actualStartOffset, actualEndOffset)}</mark>${highlightEndsAtEnd ? '' : '<mark class="blur">'}${node.innerText.substring(actualEndOffset)}${highlightEndsAtEnd ? '' : '</mark>'}`
        //         }
        //     })

        //     // Blur everything
        //     if ($(cloneParent).children().length > 0) {
        //         $(".blur-wrapper").addClass("blur");
        //         $('body').prepend(cloneParent);
        //         // Hide original nodes
        //         nodeArray.forEach(node => $(node).addClass('hideHighlightedElement'));
        //         parentElement.classList.add('hideHighlightedElement');
        //     }
        // }

        const allNodes = Array.from(document.body.getElementsByTagName('*'));
        console.log("-----start--------")
        allNodes.forEach(node => {
            if (!range.intersectsNode(node) && node.nodeName !== "A") {
                node.classList.add('blur');
            } else {
                const childNodes = Array.from(node.childNodes);
                const hasStartContainer = childNodes.includes(startContainer);
                const hasEndContainer = childNodes.includes(endContainer);
                if (hasStartContainer && hasEndContainer) {
                    console.log("Has start & end", node)
                } else if (hasStartContainer) {
                    console.log("Has start", node)
                } else if (hasEndContainer) {
                    console.log("Has end", node)
                }
            }
        })
    }
});

function blurAllNonSelectionNodes(selection) {
    const allNodes = Array.from(document.getElementsByTagName('*'));
    console.log(selection)
    allNodes.forEach(node => {
        if (node.nodeName !== "HTML" && node.nodeName !== "BODY" && node.nodeName !== "HEADER" && node.nodeName !== "DIV") {
            console.log(selection.containsNode(node))
            if (!selection.containsNode(node)) {
                node.classList.add('blur');
            }
        }
    })
}

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
        if (currentTextNode.length > 0) {
            if (currentTextNode.data.replace('\n', '').trim().length) {
                textNodes.push(currentTextNode);
              }
        }
    }
    return textNodes;
}

function combineRanges(selection) {
    const mainRange = selection.getRangeAt(0);
    const lastRange = selection.getRangeAt(selection.rangeCount - 1);
    mainRange.setEnd(lastRange.endContainer, lastRange.endOffset);
}