import { refreshOperationDisplay } from './dom-manipulation.js';
import { refreshResultDisplay } from './dom-manipulation.js';
import { animateError } from './animate.js';

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
            processListener(element, Operation);
            break;

        // remove last character of actual operation.
        case 'ce':
            ceListener(element, Operation);
            break;

        // flush the actual opperation.
        case 'ac':
            acListener(element, Operation);
            break;

        // by default, add the character provided by the button.
        default:
            operationListener(element, listenerOperationSign, Operation);
            break;
    }
};

/**
 * Add event listener to body listening for key up.
 */
export const listenKeyboard = (Operation) => {
    document.body.addEventListener('keyup', (e) => {
        eventResponse(e, Operation);
    });
};

/**
 * Manage the pressed key and call the corresponding function.
 *
 * @param {Object} e
 * @param {Object} Operation
 */
const eventResponse = (e, Operation) => {
    const event = e.key; // the key pressed
    const key = checkKey(event);

    switch (key) {
        case 'process':
            processHandler(Operation);
            break;

        case 'operator':
            operationHandler(event, Operation);
            break;

        case 'ac':
            acHandler(Operation);
            break;

        case 'ce':
            ceHandler(Operation);
            break;

        default:
            break;
    }
};

/**
 * Check if provided key is a number or accepted operator.
 *
 * @param {String} key
 * @returns {Boolean}
 */
const isOperatorOrNumber = (key) => {
    const operatorsAndNumbers = '01234567890.+-/*%()';
    return operatorsAndNumbers.indexOf(key) > -1;
};

/**
 * Check the key to return the according operation.
 *
 * @param {String} key
 * @returns {String}
 */
const checkKey = (key) => {
    // First chek if key is operator or number.
    key = isOperatorOrNumber(key) ? 'operator' : key;

    switch (key) {
        case 'operator':
            return 'operator';

        case '=':
            return 'process';

        case 'Enter':
            return 'process';

        case 'Escape':
            return 'ac';

        case 'Delete':
            return 'ce';

        case 'Backspace':
            return 'ce';

        default:
            break;
    }
};

/**
 * Add an event listener to call the handler
 * for adding number or operator to actual operation.
 *
 * @param {Node} element
 * @param {String} listenerOperationSign
 * @param {Object} Operation
 */
const operationListener = (element, listenerOperationSign, Operation) => {
    element.addEventListener('click', () => {
        operationHandler(listenerOperationSign, Operation);
    });
};

/**
 * Add operator or number to the actual operation.
 *
 * @param {String} operator
 * @param {Object} Operation
 */
const operationHandler = (operator, Operation) => {
    // filter key to transfomr / in ÷ , and * in x
    operator = filterKeyboardOperator(operator);
    // update Operation object
    Operation.updateOperation(operator);
    // show operation in display of the calc.
    refreshOperationDisplay(Operation.getOperation());
};

const filterKeyboardOperator = (operator) => {
    switch (operator) {
        case '/':
            return '÷';

        case '*':
            return 'x';

        default:
            return operator;
    }
};

/**
 * Add an event listener on the provided button to
 * call the handler to compute the actual operation.
 *
 * @param {Node} element
 * @param {Object} Operation
 */
const processListener = (element, Operation) => {
    element.addEventListener('click', () => {
        processHandler(Operation);
    });
};

/**
 * Compute the actual operation.
 * If the operation is ok, display the result in DOM.
 * Otherwise, giggle the calc.
 *
 * @param {Object} Operation
 */
const processHandler = (Operation) => {
    // get the result
    const result = Operation.computeResult();
    // show the result

    result ? refreshResultDisplay(result) : animateError();
};

/**
 * Add an event listener to call the CE handler.
 *
 * @param {Node} element
 * @param {Object} Operation
 */
const ceListener = (element, Operation) => {
    element.addEventListener('click', () => {
        ceHandler(Operation);
    });
};

/**
 * Remove last character of actual operation and
 * display it in DOM.
 *
 * @param {Object} Operation
 */
const ceHandler = (Operation) => {
    // remove last character of operation
    Operation.ce();
    // show the new operation in display
    refreshOperationDisplay(Operation.getOperation());
};

/**
 * Add an event listener to call the flush.
 *
 * @param {Node} element
 * @param {Object} Operation
 */
const acListener = (element, Operation) => {
    element.addEventListener('click', () => {
        acHandler(Operation);
    });
};

/**
 * Flush the actual operation and display it in DOM.
 *
 * @param {Object} Operation
 */
const acHandler = (Operation) => {
    // flush the operation
    Operation.ac();
    // show the new empty operation in display
    refreshOperationDisplay(Operation.getOperation());
    // show nothing in result display
    refreshResultDisplay('');
};
