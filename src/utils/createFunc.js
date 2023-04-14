'use strict'

export default function createElem(type, {classNames, attributes}, ...children) {
    const elem = document.createElement(type);

    if (attributes) {
        attributes.forEach((obj) => {
            for (const key in obj) {
                elem.setAttribute(key, obj[key]);
            }
        })   
    }

    elem.classList.add(...classNames);
    elem.append(...children);

    return elem;
}