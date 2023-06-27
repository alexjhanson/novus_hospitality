import {IllegalArgumentError} from "../../errors/Errors";
import {isNonNegativeIntStr} from "../../../common/number_utils/number_utils";

export default class Rate {

    constructor(id, date, type, roomType, dollar, cents, currency) {
        this._id = id;
        this._date = date;
        this._type = type;
        this._roomType = roomType;
        this._dollar = this.__setValue(dollar);
        this._cents = this.__setValue(cents);
        this._currency = currency;
        Object.seal(this);
    }

    __setValue(value) {

        if(isNonNegativeIntStr(value)) {
            return parseInt(value);
        }

        throw new IllegalArgumentError(`Cannot create Rate with ${value}`)
    }

}

Object.seal(Rate.prototype);
Object.freeze(Rate);