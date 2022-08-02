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
        return Function('return ' + this._operation)();
    }

    ce() {
        this._operation = this._operation.slice(0, -1);
    }

    ac() {
        this._operation = '';
    }
}
