class DinnerModel {
    constructor(guests = 2, dishes = [], currentDish = null) {
        this.observers = [];
        this.setNumberOfGuests(guests);
        this.dishes = dishes;
        this.currentDish = currentDish;
    }

    setNumberOfGuests(x) {
        try {
            if (x <= 0 || x % 1 != 0) {
                throw new Error(
                    "Number of guests must be greater than 0 and be a integer"
                );
            }
            if (x != this.numberOfGuests) {
                this.numberOfGuests = x;
                this.notifyObservers();
            }
        } catch (e) {
            console.error("Error at setNumberOfGuests", e);
        }
    }

    addToMenu(dish) {
        if (this.dishes.some(d => d.id === dish)) return;
        this.dishes = [...this.dishes, dish];
        this.notifyObservers();
    }

    removeFromMenu(id) {
        if (this.dishes.every(current => current.id !== id)) return;

        this.dishes = this.dishes.filter((dish) => dish.id !== id);
        this.notifyObservers();
    }

    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(
            (observer) => observer !== callback
        );
    }

    notifyObservers() {
        this.observers.forEach((observer) => {
            try {
                observer();
            } catch (e) {
                console.error(e);
            }
        });
    }

    setCurrentDish(id) {
        if (this.currentDish === id) return;

        this.currentDish = id;
        this.currentDishDetails = null;
        this.currentDishError = null;
        this.notifyObservers();

        if (this.currentDish) {
            DishSource.getDishDetails(this.currentDish).then(
                (dish) => {
                    if (this.currentDish === id) {
                        this.currentDishDetails = dish;
                        this.notifyObservers();
                    }
                },
                (error) => {
                    if (this.currentDish === id) {
                        this.currentDishError = error;
                        this.notifyObservers();
                    }
                }
            );
        }
    }
}

function getIngredients(values) {
    const result = {};
    values.forEach((d) =>
        d.extendedIngredients.forEach((i) => {
            if (!result[i.id]) result[i.id] = { ...i };
            else result[i.id].amount += i.amount;
        })
    );
    return Object.values(result);
}
