function SummaryPresenter(props) {
    const [guests, setGuests] = React.useState(props.model.numberOfGuests);
    const [dishes, setDishes] = React.useState(props.model.dishes);
    React.useEffect(function () {
        function obs() {
            setGuests(props.model.numberOfGuests);
            setDishes(props.model.dishes);
        }
        props.model.addObserver(obs);
        return function () {
            props.model.removeObserver(obs);
        };
    }, []);

    return (
        <SummaryView persons={guests} ingredients={getIngredients(dishes)} />
    );
}
