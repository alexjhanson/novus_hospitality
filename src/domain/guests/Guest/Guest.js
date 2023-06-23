export default class Guest {
    // TO DO implement guest DTO

    /*
    * Guest properties 
    * ----------------------------
    * long term notes [String]
    * preferences [String]
    * first name String
    * last name String
    * address: {
    *           primary: Address
    *           billing: Address
    *           addition: [Address]
    *           }
    * history: [Reservation]
    */

    static from(guest) {
        return new Guest(

        );
    }

    getGuestId() {
        return 'guest id';
    }
}