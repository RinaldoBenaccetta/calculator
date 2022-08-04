import { showCalculator } from './build-calculator-template.js';
import { MainOperation } from './operation.js';
import { listenKeyboard } from './listeners.js';

const mainCalculator = () => {
    // create a new operation object that is handling calculating operations.
    const Operation = new MainOperation();

    showCalculator(Operation);
    listenKeyboard(Operation);
};

mainCalculator();
