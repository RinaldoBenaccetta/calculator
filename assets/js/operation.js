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
     * Check if the last character of the operation is an operator.
     * If not, add the provided string to the end of
     * the current operation string.
     * If it is an operator, check if the new provided character is an operator,
     * replace it if it is, and add the provided string to the end of
     * the current operation string if not.
     *
     * @param {String} operationString
     */
    updateOperation(operationString) {
        this.lastCharacterIsOperator()
            ? this.checkLastCharacter(operationString)
            : (this._operation += operationString);
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
     * Return the last character of current operation.
     *
     * @returns {String}
     */
    lastCharacterOfOperation() {
        return this._operation.charAt(this._operation.length - 1);
    }

    /**
     * Check if actual operation is computable.
     * If last character is a number or )
     * and there is no empty parenthesis
     * and all parenthesis are closed
     * return TRUE.
     * Otherwise return FALSE.
     *
     * @returns {Boolean}
     */
    isComputable() {
        return (
            (this.isClosingParenthesis() ||
                this.isNumber() ||
                this.lastCharacterIsPercent()) &&
            this.isParenthesisAreClosed() &&
            this.haveNoDoubleDot()
        );
    }

    /**
     * Check if last character of current operation is a number.
     *
     * @param {String} string
     * @returns {Boolean}
     */
    isNumber() {
        return !isNaN(this.lastCharacterOfOperation());
    }

    /**
     * Check if last character of current operation is
     * a closing parenthesis.
     *
     * @param {String} string
     * @returns {Boolean}
     */
    isClosingParenthesis() {
        return this.lastCharacterOfOperation() === ')';
    }

    /**
     * Check if last character of current operation is percent.
     *
     * @returns {Boolean}
     */
    lastCharacterIsPercent() {
        return this.lastCharacterOfOperation() === '%';
    }

    /**
     * Check if parenthesis are all closed.
     *
     * @returns {Boolean}
     */
    isParenthesisAreClosed() {
        const openParenthesisCount = this._operation.split('(').length - 1;
        const closingParenthesisCount = this._operation.split(')').length - 1;

        return openParenthesisCount === closingParenthesisCount;
    }

    /**
     * Check if there is not empty parenthesis.
     *
     * @returns {boolean}
     */
    isNoEmptyParenthesis() {
        const emptyParenthesis = this._operation.split('()').length - 1;
        return emptyParenthesis === 0;
    }

    /**
     * Check if there is no double dot or more in actual operation.
     *
     * @returns {Boolean}
     */
    haveNoDoubleDot() {
        const doubleDot = this._operation.split('..').length - 1;
        return doubleDot === 0;
    }

    /**
     * Replace operators by machine readable versions.
     *
     * @returns {String}
     */
    machineOperation() {
        let output = this._operation;

        output = output.replace(/%/g, '/100');
        output = output.replace(/x/g, '*');
        output = output.replace(/÷/g, '/');
        output = output.replace(/\)\(/g, ')*(');

        return output;
    }

    checkLastCharacter(newCharacter) {
        if (this.isOperator(newCharacter) && this.lastCharacterIsOperator()) {
            this.replaceLastCharacter(newCharacter);
        }
    }

    lastCharacterIsOperator() {
        return this.isOperator(this.lastCharacterOfOperation());
    }

    isOperator(string) {
        return (
            string === 'x' || string === '÷' || string === '-' || string === '+'
        );
    }

    replaceLastCharacter(character) {
        this._operation = this._operation.slice(0, -1) + character;
    }
}
