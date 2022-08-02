export class MainOperation {
    constructor() {
        this._operation = '';
    }

    getOperation() {
        return this._operation;
    }

    updateOperation(operationString) {
        this._operation += operationString;
    }

    computeResult() {
        // if last character is an operator, return false
        // otherwise return the result of machine operation version
        return this.isComputable()
            ? false
            : Function('return ' + this.machineOperation())();
    }

    ce() {
        this._operation = this._operation.slice(0, -1);
    }

    ac() {
        this._operation = '';
    }

    isComputable() {
        // get last character of operation
        const lastCharacter = this._operation.charAt(
            this._operation.length - 1
        );
        // return the result of isOperator on the last character
        return this.isOperator(lastCharacter);
    }

    isOperator(string) {
        return (
            string === '+' ||
            string === '-' ||
            string === '÷' ||
            string === 'x' ||
            string === '%'
        );
    }

    machineOperation() {
        let output = this._operation;

        output = output.replace('%', '/100');
        output = output.replace('x', '*');
        output = output.replace('÷', '/');

        return output;
    }
}
