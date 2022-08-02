import { refreshOperationDisplay } from './dom-manipulation.js';
import { refreshResultDisplay } from './dom-manipulation.js';

/**
 * Add or not the listener according to the button operation.
 *
 * @param {Node} element
 * @param {String} listenerOperationSign
 * @param {Object} Operation
 */
export const listenButton = (element, listenerOperationSign, Operation) => {
    switch (listenerOperationSign) {
        // add event only on defined values.
        case '':
            break;

        // add event only on defined values.
        case undefined:
            break;

        // calculate the actual operation.
        case 'process':
            addProcessListener(element, Operation);
            break;

        // remove last character of actual operation.
        case 'ce':
            addCeListener(element, Operation);
            break;

        // flush the actual opperation.
        case 'ac':
            addAcListener(element, Operation);
            break;

        // by default, add the character provided by the button.
        default:
            addOperationListener(element, listenerOperationSign, Operation);
            break;
    }
};

/**
 * Add an event listener to add operator or number to
 * the actual operation.
 *
 * @param {Node} element
 * @param {String} listenerOperationSign
 * @param {Object} Operation
 */
const addOperationListener = (element, listenerOperationSign, Operation) => {
    element.addEventListener('click', () => {
        // update Operation object
        Operation.updateOperation(listenerOperationSign);
        // show operation in display of the calc.
        refreshOperationDisplay(Operation.getOperation());
    });
};

/**
 * Add an event listener on the provided button to
 * compute the actual operation and display the result in DOM.
 *
 * @param {Node} element
 * @param {Object} Operation
 */
const addProcessListener = (element, Operation) => {
    element.addEventListener('click', () => {
        // get the result
        const result = Operation.computeResult();
        // show the result
        if (result) {
            refreshResultDisplay(result);
        }
    });
};

/**
 * Add an event listener to the actual button to
 * remove last character of actual operation and
 * display it in DOM.
 *
 * @param {Node} element
 * @param {Object} Operation
 */
const addCeListener = (element, Operation) => {
    element.addEventListener('click', () => {
        // remove last character of operation
        Operation.ce();
        // show the new operation in display
        refreshOperationDisplay(Operation.getOperation());
    });
};

/**
 * Add an event listener to the actual button to
 * flush the actual operation and display it in DOM.
 *
 * @param {Node} element
 * @param {Object} Operation
 */
const addAcListener = (element, Operation) => {
    element.addEventListener('click', () => {
        // flush the operation
        Operation.ac();
        // show the new operation in display
        refreshOperationDisplay(Operation.getOperation());
    });
};
