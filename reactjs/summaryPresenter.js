function SummaryPresenter(props) {
    const [guests, setGuests] = React.useState(props.model.numberOfGuests);
    const [dishes, setDishes] = React.useState(props.model.dishes);

    React.useEffect(() => {
        const obs = () => {
            setNumberOfGuests(model.numberOfGuests);
            setDishes(model.dishes);
        };
        model.addObserver(obs);
        return () => model.removeObserver(obs);
    }, []);

    return (
        <SummaryView persons={guests} ingredients={getIngredients(dishes)} />
    );
}
