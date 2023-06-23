

export default class Address {

    constructor(street, unit, apt, city, postalCode, stateProvince) {
        this.street = street;
        this.unit = unit;
        this.apt = apt;
        this.city = city;
        this.postalCode = postalCode;
        this.stateProvince = stateProvince;
        Object.seal(this);
    }

    toString() {
        return (
            this.street + 
            this.unit ? " Unit " + this.unit : null +
            this.apt ? " Apt " + this.unit  : null + 
            "\n" + this.city + " " + this.stateProvince + " " + this.postalCode
        );
    }

    toJSON() {
        return {
            street: this.street,
            unit: this.unit,
            apt: this.apt,
            city: this.city,
            postalCode: this.postalCode,
            stateProvince: this.stateProvince
        };
    }
}

Object.seal(Address.prototype);
Object.freeze(Address);