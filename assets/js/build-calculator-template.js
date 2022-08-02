export const createElement = (elementTag, elementClass, elementId) => {
    // create a new section element
    const newElement = document.createElement(elementTag);
    newElement.classList.add(elementClass);
    newElement.id = elementId;

    return newElement;
};
