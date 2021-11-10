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
        <div class="searchResultView">
            {props.searchResults.map(function(result) {
                return (
                    <span key = {result.id} onClick = {() => props.dishChosen(result.id)}>
                        <img src = {`https://spoonacular.com/recipeImages/${result.image}`}/>
                        <h3>{result.title}</h3>
                    </span>
                );
            })}
        </div>
    );
}
