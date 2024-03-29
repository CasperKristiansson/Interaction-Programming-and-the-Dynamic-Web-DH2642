function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [search, setSearch] = React.useState("");
    const [dishType, setDishType] = React.useState("");

    debounced(() => updateSearch(), [search]);

    function updateSearch () {
        console.log("Searching...")
        setData(null);
        setError(null);
        setPromise(
            DishSource.searchDishes({
                query: search,
                type: dishType,
            })
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    };
    
    React.useEffect(() => {
        setPromise(
            DishSource.searchDishes({})
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    }, []);

    return (
        <div>
            <SearchFormView
                options={["starter", "main course", "dessert"]}
                onText={(search) => setSearch(search)}
                onSearch={() => {
                    setData(null);
                    setError(null);
                    setPromise(
                        DishSource.searchDishes({
                            query: search,
                            type: dishType,
                        })
                            .then((data) => setData(data))
                            .catch((error) => setError(error))
                    );
                }}
                onDishType={(dishType) => setDishType(dishType)}
            />
            {promiseNoData(promise, data, error) || (
                <SearchResultsView
                    searchResults={data}
                    dishChosen={(id) => props.model.setCurrentDish(id)}
                />
            )}
        </div>
    );
}

const debounced = (func, useState) => {
    React.useEffect(() => {
        const handler = setTimeout(() => func(), 1000);

        return () => clearTimeout(handler);
    }, [...useState || [], 1000]);
}
