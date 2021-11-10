class DinnerModel{
    constructor(guests=2, dishes=[], currentDish=null){
        this.setNumberOfGuests(guests);
        this.dishes = dishes;
        this.currentDish = currentDish;
    }

    setNumberOfGuests(x) {
        if (x <= 0 || x % 1 != 0) {
            throw new Error("Number of guests must be greater than 0 and be a integer");
        }
        this.numberOfGuests = x;
    }

    addToMenu(dish) {
        this.dishes = [...this.dishes, dish];
    }

    removeFromMenu(dishData) {
        this.dishes = this.dishes.filter(dish => dish.id !== dishData);
    }

    setCurrentDish(id) {
        this.currentDish = id;
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
