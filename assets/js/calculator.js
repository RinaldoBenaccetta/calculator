import { createInDom } from './build-calculator-template.js';
import { layout } from './calculator-layout.js';
import { MainOperation } from './operation.js';

function computeResult(str) {
    return Function('return ' + str)();
}

const a = '(13 + 17) / 3';

console.log(computeResult(a)); // Should display 10

/**
 * Read the provided array containing object with elements attributes
 * and injects them in DOM.
 *
 * @param {Array.<Object>} layout
 */
const showCalculator = (layout, Operation) => {
    for (const element of layout) {
        createInDom(
            element.tag,
            element.class,
            element.id,
            element.parentId,
            element.text,
            element.listenerOperationSign,
            Operation
        );
    }
};

const mainCalculator = () => {
    const Operation = new MainOperation();
    showCalculator(layout, Operation);
};

mainCalculator();
