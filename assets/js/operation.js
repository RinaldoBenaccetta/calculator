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
        return Function('return ' + this.computableOperation())();
    }

    ce() {
        this._operation = this._operation.slice(0, -1);
    }

    ac() {
        this._operation = '';
    }

    // checkComputeError() {
    //     const lastCharacter = this._operation.charAt(this._operation.length - 1);
    //     lastCharacter
    // }

    // isOperator(string) {
    //     return string === '+' || string === '-' || string === '';
    // }

    computableOperation() {
        let output = this._operation;

        output = output.replace('%', '/100');
        output = output.replace('x', '*');
        output = output.replace('÷', '/');

        return output;
    }
}
