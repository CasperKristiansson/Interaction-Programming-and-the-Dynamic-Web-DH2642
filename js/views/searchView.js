function SearchFormView(props) {
    return (
        <div>
            <input onChange = { event => props.onText(event.target.value) } />
            <button onClick = { () => props.onSearch() }>Search</button>

            <select onChange = { event => props.onDishType(event.target.value) }>
                <option>Choose:</option>
                {props.options.map(function(opt) { return <option>{opt}</option> })}
            </select>
        </div>
    );
}

function SearchResultsView(props) {
    return (
        <div>
            {props.searchResults.map(function(result) {
                return (
                    <span class = {result.id} onClick = {e => props.dishChosen(e.nativeEvent.path[1].className)}>
                        <img src = {`https://spoonacular.com/recipeImages/${result.image}`}/>
                        <h3>{result.title}</h3>
                    </span>
                );
            })}
        </div>
    );
}
