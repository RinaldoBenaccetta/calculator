import { createElement } from './build-calculator-template.js';

function computeResult(str) {
    return Function('return ' + str)();
}

const a = '(13 + 17) / 3';

console.log(computeResult(a)); // Should display 10

console.log(createElement('div', 'myClass', 'myId'));
