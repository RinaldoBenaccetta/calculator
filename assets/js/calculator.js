import { createInDom } from './build-calculator-template.js';
import { layout } from './calculator-layout.js';

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
const showCalculator = (layout) => {
    for (const element of layout) {
        createInDom(
            element.tag,
            element.class,
            element.id,
            element.parentId,
            element.text
        );
    }
};

showCalculator(layout);
