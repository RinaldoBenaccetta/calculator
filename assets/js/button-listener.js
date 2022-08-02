import { refreshOperationDisplay } from './dom-manipulation.js';

export const listenButton = (element, listenerOperationSign, Operation) => {
    switch (listenerOperationSign) {
        case '':
            break;

        // add event only on defined values
        case undefined:
            break;

        default:
            addEventListener(element, listenerOperationSign, Operation);
            break;
    }
};

const addEventListener = (element, listenerOperationSign, Operation) => {
    element.addEventListener('click', () => {
        // update Operation object
        Operation.updateOperation(listenerOperationSign);
        // show operation in display of the calc.
        refreshOperationDisplay(Operation.getOperation());
    });
};
