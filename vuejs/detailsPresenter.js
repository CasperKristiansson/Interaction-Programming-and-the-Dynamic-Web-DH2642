function DetailsPresenter(props) {
    return (
        promiseNoData(
            props.model.currentDish,
            props.model.currentDishDetails,
            props.model.currentDishError
        ) || (
            <DetailsView
                isDishInMenu={props.model.dishes.find(
                    (dish) => props.model.currentDish === dish.id
                )}
                dish={props.model.currentDishDetails}
                people={props.model.numberOfGuests}
                dishAdded={(dish) => props.model.addToMenu(dish)}
            />
        )
    );
}
