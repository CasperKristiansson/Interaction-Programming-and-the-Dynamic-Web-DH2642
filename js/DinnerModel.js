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

function getIngredients(values) {
    const result = {};
    values.forEach(d => d.extendedIngredients.forEach(i => {
        if(!result[i.id]) result[i.id] = {...i};
        else result[i.id].amount += i.amount;
    }))
    return Object.values(result);
}
