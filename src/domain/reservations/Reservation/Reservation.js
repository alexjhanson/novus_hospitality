// Reservation DTO
export default class Reservation {

    constructor(
            id,
            createDate, 
            checkInDate, 
            checkOutDate,
            roomType,
            rates, 
            guestId,
            adults,
            children,
            pets,
            dateModified) 
    {
        this._id = id;
        this._createDate = createDate;
        this._checkInDate = checkInDate;
        this._checkOutDate = checkOutDate;
        this._roomType = roomType;
        this._rates = rates;
        this._guestId = guestId;
        this._adults = adults;
        this._children = children;
        this._pets = pets;
        this._dateModified = dateModified;
        Object.freeze(this);
    }
}

// Seal prototype, can subclass.
Object.seal(Reservation.prototype);

// Freeze constructor function.
Object.freeze(Reservation);