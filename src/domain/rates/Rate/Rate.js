import {IllegalArgumentError} from "../../errors/Errors";
import * as num_utils from "../../../common/number_utils/number_utils";

export default class Rate {

    constructor(type = 'custom', dollar = 0, cents = 0) {
        this._type = type;
        this._dollar = this.__setValue(dollar);
        this._cents = this.__setValue(cents);
        Object.seal(this);
    }

    __setValue(value) {

        if(num_utils.isNonNegativeIntString(value)) {
            return parseInt(value);
        }

        throw new IllegalArgumentError(`Cannot create Rate with ${value}`)
    }

}

Object.seal(Rate.prototype);
Object.freeze(Rate);