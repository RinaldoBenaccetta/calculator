// export default {
//     createElement(elementTag, elementClass, elementId) {
//         // create a new section element
//         const newElement = document.createElement(elementTag);
//         // add class to it
//         newElement.classList.add(elementClass);
//         // add id to it
//         newElement.id = elementId;

//         return newElement;
//     },
//     createInDom(elementTag, elementClass, elementId, parentId) {
//         // get the parent element
//         const parent = document.querySelector(`#${parentId}`);
//         // create and append new element to parent
//         parent.append(elementTag, elementClass, elementId);
//     },
// };

/**
 * Create an element ready to be injected in DOM.
 *
 * @param {String} elementTag
 * @param {String} elementClass
 * @param {String} elementId
 * @param {String} elementInnerText
 *
 * @returns {Node}
 */
const createElement = (
    elementTag,
    elementClass,
    elementId,
    elementInnerText
) => {
    // create a new section element
    const newElement = document.createElement(elementTag);
    // add class to it
    newElement.classList.add(elementClass);
    // add id to it
    newElement.id = elementId;
    // add text to it
    newElement.innerText = elementInnerText;

    return newElement;
};

/**
 * Create An element and append it in DOM as a child of the element
 * with the provided ID.
 *
 * @param {String} elementTag
 * @param {String} elementClass
 * @param {String} elementId
 * @param {String} parentId
 * @param {String} elementInnerText
 */
export const createInDom = (
    elementTag,
    elementClass,
    elementId,
    parentId,
    elementInnerText
) => {
    // get the parent element
    const parent = document.querySelector(`#${parentId}`);
    // create and append new element to parent
    parent.append(
        createElement(elementTag, elementClass, elementId, elementInnerText)
    );
};
