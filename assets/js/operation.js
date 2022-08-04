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
     * Check if provided character and last character
     * of operation are operators.
     * If they are both, replace the last character of current operation
     * by the new one.
     * Check if last character is closing parenthesis or percent
     * and if provided character is number.
     * If it's the case, add 'x' before the character.
     * Otherwise, add new character to the end of the operation.
     *
     * @param {String} newCharacter
     */
    updateOperation(newCharacter) {
        if (this.lastAndNewCharactersAreOperators(newCharacter)) {
            this.replaceLastCharacter(newCharacter);
        } else if (
            this.lastCharacterIsParenthesisOrPercentAndNewIsNumber(newCharacter)
        ) {
            this._operation += 'x' + newCharacter;
        } else {
            this._operation += newCharacter;
        }
    }

    /**
     * Return the result of current operation.
     * If there is an error on the operation return false that can be handled
     * by the function that calling computeResult.
     *
     * @returns {false|Number}
     */
    computeResult() {
        try {
            return Function('return ' + this.machineOperation())();
        } catch (error) {
            return false;
        }
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

        output = output.replace(/%/g, '/(100)');
        output = output.replace(/x/g, '*');
        output = output.replace(/÷/g, '/');
        output = output.replace(/\)\(/g, ')*(');

        return output;
    }

    /**
     * Check if last character is closing parenthesis or percent
     * and if provided character is number.
     *
     * @param {String} newCharacter
     * @returns {Boolean}
     */
    lastCharacterIsParenthesisOrPercentAndNewIsNumber(newCharacter) {
        return (
            (this.lastCharacterOfOperation() === ')' ||
                this.lastCharacterOfOperation() === '%') &&
            this.isNumber(newCharacter)
        );
    }

    /**
     * Check if both provided character and last character
     * of operation are operators.
     *
     * @param {String} newCharacter
     * @returns {Boolean}
     */
    lastAndNewCharactersAreOperators(newCharacter) {
        return this.isOperator(newCharacter) && this.lastCharacterIsOperator();
    }

    /**
     * Check if provide character is a number.
     *
     * @param {String} string
     * @returns {Boolean}
     */
    isNumber(string) {
        return !isNaN(string);
    }

    /**
     * Check if provided character is an operator.
     *
     * @param {String} string
     * @returns {Boolean}
     */
    isOperator(string) {
        return (
            string === 'x' || string === '÷' || string === '-' || string === '+'
        );
    }

    /**
     * Check if last character of actual operation is an operator.
     *
     * @returns {Boolean}
     */
    lastCharacterIsOperator() {
        return this.isOperator(this.lastCharacterOfOperation());
    }

    /**
     * Raplace last character of actual operation by the provided one.
     *
     * @param {String} character
     */
    replaceLastCharacter(character) {
        this._operation = this._operation.slice(0, -1) + character;
    }

    // /**
    //  * Check if actual operation is computable.
    //  * If last character is a number or )
    //  * and there is no empty parenthesis
    //  * and all parenthesis are closed
    //  * return TRUE.
    //  * Otherwise return FALSE.
    //  *
    //  * @returns {Boolean}
    //  */
    // isComputable() {
    //     return (
    //         (this.isClosingParenthesis() ||
    //             this.isNumber() ||
    //             this.lastCharacterIsPercent()) &&
    //         this.isParenthesisAreClosed() &&
    //         this.haveNoDoubleDot()
    //     );
    // }

    // /**
    //  * Check if last character of current operation is a number.
    //  *
    //  * @param {String} string
    //  * @returns {Boolean}
    //  */
    // isNumber() {
    //     return !isNaN(this.lastCharacterOfOperation());
    // }

    // /**
    //  * Check if last character of current operation is
    //  * a closing parenthesis.
    //  *
    //  * @param {String} string
    //  * @returns {Boolean}
    //  */
    // isClosingParenthesis() {
    //     return this.lastCharacterOfOperation() === ')';
    // }

    // /**
    //  * Check if last character of current operation is percent.
    //  *
    //  * @returns {Boolean}
    //  */
    // lastCharacterIsPercent() {
    //     return this.lastCharacterOfOperation() === '%';
    // }

    // /**
    //  * Check if parenthesis are all closed.
    //  *
    //  * @returns {Boolean}
    //  */
    // isParenthesisAreClosed() {
    //     const openParenthesisCount = this._operation.split('(').length - 1;
    //     const closingParenthesisCount = this._operation.split(')').length - 1;

    //     return openParenthesisCount === closingParenthesisCount;
    // }

    // /**
    //  * Check if there is not empty parenthesis.
    //  *
    //  * @returns {boolean}
    //  */
    // isNoEmptyParenthesis() {
    //     const emptyParenthesis = this._operation.split('()').length - 1;
    //     return emptyParenthesis === 0;
    // }
}
