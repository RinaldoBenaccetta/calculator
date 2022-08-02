import { refreshOperationDisplay } from './dom-manipulation.js';
import { refreshResultDisplay } from './dom-manipulation.js';

export const listenButton = (element, listenerOperationSign, Operation) => {
    switch (listenerOperationSign) {
        // add event only on defined values
        case '':
            break;

        // add event only on defined values
        case undefined:
            break;

        case 'process':
            addProcessListener(element, Operation);
            break;

        case 'ce':
            addCeListener(element, Operation);
            break;

        case 'ac':
            addAcListener(element, Operation);
            break;

        default:
            addOperationListener(element, listenerOperationSign, Operation);
            break;
    }
};

const addOperationListener = (element, listenerOperationSign, Operation) => {
    element.addEventListener('click', () => {
        // update Operation object
        Operation.updateOperation(listenerOperationSign);
        // show operation in display of the calc.
        refreshOperationDisplay(Operation.getOperation());
    });
};

const addProcessListener = (element, Operation) => {
    element.addEventListener('click', () => {
        // show the result
        refreshResultDisplay(Operation.computeResult());
    });
};

const addCeListener = (element, Operation) => {
    element.addEventListener('click', () => {
        // remove last character of operation
        Operation.ce();
        // show the new operation in display
        refreshOperationDisplay(Operation.getOperation());
    });
};

const addAcListener = (element, Operation) => {
    element.addEventListener('click', () => {
        // flush the operation
        Operation.ac();
        // show the new operation in display
        refreshOperationDisplay(Operation.getOperation());
    });
};
