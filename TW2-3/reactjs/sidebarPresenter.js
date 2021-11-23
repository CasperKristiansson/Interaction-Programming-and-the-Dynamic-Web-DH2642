function SidebarPresenter(props) {
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
        <SidebarView
            guests={guests}
            setGuests={(guestsAmount) => props.model.setNumberOfGuests(guestsAmount)}
            dishes={dishes}
            removeDish={(id) => props.model.removeFromMenu(id)}
            dishChoice={(id) => props.model.setCurrentDish(id)}
        />
    );
}
