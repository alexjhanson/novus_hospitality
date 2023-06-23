import { IllegalArgumentError } from "../../errors/Errors";

export default class Rate {

    constructor(type = 'custom', dollar = 0, cents = 0) {
        this._type = type;
        this._dollar = this.__setValue(dollar);
        this._cents = this.__setValue(cents);
    }

    __setValue(value) {

        if(Number.isInteger(value) && value >= 0) {
            return value;
        }else if(typeof value === 'string') {
            if(/^\d+$/.test(value)) {
                return parseInt(value);
            }
        }

        throw new IllegalArgumentError(`Cannot create Rate with ${value}`)
    }

}