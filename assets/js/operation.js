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
}