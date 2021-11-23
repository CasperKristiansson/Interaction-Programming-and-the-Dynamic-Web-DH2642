class DinnerModel{
    constructor(guests = 2){
        this.setNumberOfGuests(guests);}

    setNumberOfGuests(x) {
        if (x <= 0 || x % 1 != 0) {
            throw new Error("Number of guests must be greater than 0 and be a integer");
        }
        this.numberOfGuests = x;
    }
}
