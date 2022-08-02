/**
 * Update the display of the operation in DOM.
 *
 * @param {String} newOperation
 */
export const refreshOperationDisplay = (newOperation) => {
    updateElement('operation-display', newOperation);
};

/**
 * Update the display of the result in DOM.
 *
 * @param {String} result
 */
export const refreshResultDisplay = (result) => {
    updateElement('result-display', result);
};

/**
 * Replace the inner HTML of the element with the provided ID
 * with the provided Text.
 *
 * @param {String} elementId
 * @param {String} innerHtml
 */
const updateElement = (elementId, innerHtml) => {
    const operationDisplay = document.querySelector(`#${elementId}`);

    operationDisplay.innerHTML = innerHtml;
};
