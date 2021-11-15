function persistModel(model) {
    let loadingFromFirebase = false;
    model.addObserver(function () {
        if (loadingFromFirebase) return;
        firebase.database().ref("dinnerModel").set({
            guests: model.numberOfGuests,
            currentDish: model.currentDish,
            dishes: model.dishes,
        });
    });
    firebase.database()
        .ref("dinnerModel")
        .on("value", function (data) {
            loadingFromFirebase = true;
            try {
                if (data.val()) {
                    model.setNumberOfGuests(data.val().guests);
                    model.setCurrentDish(data.val().currentDish || null);
                    model.setDishes(data.val().dishes || []);
                }
            } catch (e) {
                console.log("Error loading from firebase: " + e);
            }
            finally {loadingFromFirebase = false; }           
        });
}
