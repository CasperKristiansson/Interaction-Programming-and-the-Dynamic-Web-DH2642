function SidebarView(props) {
    return (
        <div class="sidebarView">
            <div class="sidebarViewGuests">
                <button class="sidebarViewLeftButton"
                    disabled={props.guests <= 1}
                    onClick={() => props.setGuests(props.guests - 1)}>-
                </button>

                <span> {props.guests} </span>

                <button class="sidebarViewRightButton"
                    onClick={() => props.setGuests(props.guests + 1)}>+
                </button>
            </div>

            <table class="mealNote">
                <tbody>
                    {[...props.dishes].sort(compareDishes).map((dish) => {
                        return (
                            <tr id={dish.id}>
                                <td>
                                    <button class="removeDish" onClick={() => props.removeDish(dish.id)}>
                                        🗑️
                                    </button>
                                </td>

                                <td>
                                    <a href="" onClick={(e) => {
                                            e.preventDefault();
                                            props.dishChoice(dish.id);
                                            window.location.hash = "#details";}}>
                                        {dish.title}
                                    </a>
                                </td>

                                <td class="dishType">{dishType(dish)}</td>
                                <td class="dishPrice">{`$${(
                                    dish.pricePerServing * props.guests
                                ).toFixed(2)}`}</td>
                            </tr>
                        );
                    })}

                    <tr>
                        <td></td>
                        <td class="totalText">Total</td>
                        <td></td>
                        <td class="dishPrice totalText">
                            {`$${props.dishes
                                .reduce(
                                    (accumulator, value) =>
                                        accumulator +
                                        value.pricePerServing * props.guests,
                                    0
                                )
                                .toFixed(2)}`}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const types = ["starter", "main course", "dessert"];
function dishType(dish) {
    if (dish.dishTypes) {
        const tp = dish.dishTypes.filter((value) => types.includes(value));
        if (tp.length) return tp[0];
    }
    return "";
}

function compareDishes(a, b) {
    let ai = types.indexOf(dishType(a));
    let bi = types.indexOf(dishType(b));
    if (ai < bi) return -1;
    if (ai > bi) return 1;
    return 0;
}

const VueSidebarLocalState = {
    data() {
        return { number: 2 };
    },
    render() {
        return (
            <SidebarView
                guests={this.number}
                setGuests={(guestsAmount) => (this.number = guestsAmount)}
            />
        );
    },
};

function ReactSidebarLocalState() {
    const [num, setNumber] = React.useState(2);
    return <SidebarView guests={num} setGuests={(x) => setNumber(x)} />;
}
