//This module converts and html template into an element

function toElement(template){
    return document.createRange().createContextualFragment(template).children[0];
}

export { toElement };