/**
 * Class to handle the operation of the Calc.
 */
export class MainOperation {
    /**
     * initialize the class.
     */
    constructor() {
        this._operation = '';
    }

    /**
     * Return the current operation in human readable version.
     *
     * @returns {String}
     */
    getOperation() {
        return this._operation;
    }

    /**
     * Add the provided string to the end of the current operation string.
     *
     * @param {String} operationString
     */
    updateOperation(operationString) {
        this._operation += operationString;
    }

    /**
     * Return the result of current operation.
     * If last character of actual operation is an operator,
     * return false.
     * otherwise return the result of the actual operation.
     *
     * @returns {false|Number}
     */
    computeResult() {
        return this.isComputable()
            ? // the operation is translated in machine version before compute.
              Function('return ' + this.machineOperation())()
            : false;
    }

    /**
     * Remove last character or operator from the current operation.
     */
    ce() {
        this._operation = this._operation.slice(0, -1);
    }

    /**
     * Flush the current operation.
     */
    ac() {
        this._operation = '';
    }

    /**
     * Check if actual operation is computable.
     * If last character is an operator, return false.
     * Otherwise return true.
     *
     * @returns {Boolean}
     */
    isComputable() {
        // get last character of operation
        const lastCharacter = this._operation.charAt(
            this._operation.length - 1
        );
        // return the result of isOperator on the last character
        return this.isNumber(lastCharacter);
    }

    /**
     * Check if provided string is not a number or dot.
     *
     * @param {String} string
     * @returns {Boolean}
     */
    isNumber(string) {
        return !isNaN(string);
    }

    /**
     * Replace operators by machine readable versions.
     *
     * @returns {String}
     */
    machineOperation() {
        let output = this._operation;

        output = output.replace('%', '/100');
        output = output.replace('x', '*');
        output = output.replace('÷', '/');

        return output;
    }
}
