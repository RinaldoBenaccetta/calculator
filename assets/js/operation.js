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
        let toCompute = this._operation.replace('%', '/100');
        return Function('return ' + toCompute)();
    }

    ce() {
        this._operation = this._operation.slice(0, -1);
    }

    ac() {
        this._operation = '';
    }
}
