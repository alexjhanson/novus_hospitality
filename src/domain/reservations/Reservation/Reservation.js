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
        this._dateModified = dateModified;
    }
}