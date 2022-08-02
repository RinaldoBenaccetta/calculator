export const refreshOperationDisplay = (newOperation) => {
    updateElement('operation-display', newOperation);
};

export const refreshResultDisplay = (result) => {
    updateElement('result-display', result);
};

const updateElement = (elementId, innerHtml) => {
    const operationDisplay = document.querySelector(`#${elementId}`);

    operationDisplay.innerHTML = innerHtml;
};
