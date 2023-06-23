// Reservation DTO
export default class Reservation {

    constructor(createDate, 
            checkInDate, 
            checkOutDate, 
            guestId,
            adults,
            children,
            pets,
            rates,
            status, 
            dateModified) 
    {
        this._createDate = createDate;
        this._checkInDate = checkInDate;
        this._checkOutDate = checkOutDate;
        this._guestId = guestId;
        this._adults = adults;
        this._children = children;
        this._pets = pets;
        this._rates = rates;
        this._status = status;
        this._dateModified = dateModified;
        Object.seal(this);
    }
}

// Add static/class properties.

Reservation.RESERVATION_STATUS = Object.freeze({
    FUTURE: Object.freeze({value: 1}),
    ARRIVAL: Object.freeze({value: 2}),
    IN_HOUSE: Object.freeze({value: 3}),
    DEPARTURE: Object.freeze({value: 4}),
    CHECKED_OUT: Object.freeze({value: 5}),
    CANCELLED: Object.freeze({value: 6}),
    getEnum(value) {
        switch(value) {
            case 1: 
                return this.FUTURE;
            case 2: 
                return this.ARRIVAL;
            case 3:
                return this.IN_HOUSE;
            case 4:
                return this.DEPARTURE;
            case 5:
                return this.CHECKED_OUT;
            case 6:
                return this.CANCELLED;
            default:
                return null;
        }
    }
});

// Seal prototype, can subclass.
Object.seal(Reservation.prototype);

// Freeze constructor function.
Object.freeze(Reservation);