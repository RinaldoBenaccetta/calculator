export const refreshOperationDisplay = (newOperation) => {
    const operationDisplay = document.querySelector(`#operation-display`);

    operationDisplay.innerHTML = newOperation;
};

export const refreshResultDisplay = (result) => {
    const operationDisplay = document.querySelector(`#result-display`);

    operationDisplay.innerHTML = result;
};
