import {InvalidStateError} from '../../errors/Errors';
import {isValidDate} from '../../../common/date_utils/date_utils';
import {verifyRates} from '../../../common/rate_utils/rate_utils';
import {isNonNegativeIntStr, isPositiveIntStr} from '../../../common/number_utils/number_utils';
import Reservation from '../Reservation/Reservation';


/*
 * ReservationBuilder
 * 
 * Implements builder pattern to create
 * Reservation objects
 * 
 */ 

export default class ReservationBuilder {

    constructor() {
        this._checkInDate = null;
        this._checkOutDate = null;
        this._roomType = null;
        this._rates = [];
        this._guestId = null;
        this._adults = 2;
        this._children = 0;
        this._pets = 0;
        this._reservation = null;
        Object.seal(this);
    }

    // Setter methods.
    setCheckInDate(date) {
        this._checkInDate = new Date(date).toISOString();
        return this;
    }

    setCheckOutDate(date) {
        this._checkOutDate = new Date(date).toISOString();
        return this;
    }

    setRoomType(type) {
        this._roomType = type;
        return this;
    }

    setRates(...rates){
        for(const rate of rates) {
            this._rates.push(rate);
        }
        return this;
    }

    setGuestId(id) {
        this._guestId = id;
        return this;
    }

    setNumAdults(num) {
        this._adults = num;
        return this;
    }

    setNumChildren(num) {
        this._children = num;
        return this;
    }

    setNumPets(num) {
        this._pets = num;
        return this;
    }

    // Before building, make sure all required fields are set
    // and are the correct type.
    // return boolean true or false.
    __stateIsValid() {
        return !!(
            isValidDate(this._checkInDate) &&
            isValidDate(this._checkOutDate) &&
            this._roomType &&
            verifyRates(this._rates) &&
            isPositiveIntStr(this._adults) &&
            isNonNegativeIntStr(this._children) &&
            isNonNegativeIntStr(this._pets)
        )
    }

    // If all required fields have been set,
    // create and cache a new Reservation instance.
    // return new instance, cached instance, or throw error
    buildReservation() {

        if(this._reservation) {
            return this._reservation;
        }else if(this.__stateIsValid()) {

            this._reservation = new Reservation(
                null, // DB generates ID
                null, // DB generates creation date
                this._checkInDate,
                this._checkOutDate,
                this._roomType,
                this._rates,
                this._guestId,
                this._adults,
                this._children,
                this._pets,
                null, // DB generates date modfied
            );

            return this._reservation;
        }

        throw new InvalidStateError('ReservationBuilder: missing or invalid fields');
    }

    // Get cached reservation if any or null.
    getReservation() {
        return this._reservation ? this._reservation : null;
    }

}

// Seal prototype, no additional properties can be added
// but class can be extended.
Object.seal(ReservationBuilder.prototype);

// Freeze constructor function object.
Object.freeze(ReservationBuilder);