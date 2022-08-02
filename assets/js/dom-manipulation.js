export const refreshOperationDisplay = (newOperation) => {
    const operationDisplay = document.querySelector(`#operation-display`);

    operationDisplay.innerHTML = newOperation;
};
