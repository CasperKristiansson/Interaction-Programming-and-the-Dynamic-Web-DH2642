function DetailsPresenter(props) {
    const [currentDish, setCurrentDish] = React.useState(
        props.model.currentDish
    );
    const [currentDishDetails, setCurrentDishDetails] = React.useState(
        props.model.currentDishDetails
    );
    const [people, setPeople] = React.useState(props.model.numberOfGuests);
    const [currentDishError, setCurrentDishError] = React.useState(
        props.model.currentDishError
    );

    React.useEffect(() => {
        const obs = () => {
            setCurrentDish(props.model.currentDish);
            setCurrentDishDetails(props.model.currentDishDetails);
            setCurrentDishError(props.model.currentDishError);
            setPeople(props.model.numberOfGuests);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);
    return (
        promiseNoData(currentDish, currentDishDetails, currentDishError) || (
            <DetailsView
                isDishInMenu={props.model.dishes.find(d=> currentDish === d.id)}
                dish={currentDishDetails}
                people={people}
                dishAdded={(dish) => props.model.addToMenu(dish)}
            />
        )
    );
}
