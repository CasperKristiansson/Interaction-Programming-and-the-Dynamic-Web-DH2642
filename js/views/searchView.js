function SearchFormView(props) {
    return (
        <div class="searchFormViewTop">
            <input onChange = { event => props.onText(event.target.value) } placeholder="🔎"/>

            <select onChange = { event => props.onDishType(event.target.value) }>
                <option>Choose:</option>
                {props.options.map(function(opt) { return <option>{opt}</option> })}
            </select>

            <button onClick = { () => props.onSearch() }>Search</button>
            <button onClick={e => window.location.hash = "#summary"}>Summary</button>
        </div>
    );
}

function SearchResultsView(props) {
    return (
        <div class="searchResultView">
            <div class="gridContainer">
                {props.searchResults.map(function(result) {
                    return (
                        <span key = {result.id} onClick = {() =>
                            {props.dishChosen(result.id); window.location.hash="#details";}}>
                            <img src = {`https://spoonacular.com/recipeImages/${result.image}`}/>
                            <p>{`🕒${convertTimeHour(result.readyInMinutes)} Minutes 🍛${result.servings} ${(result.servings > 1) ? "servings" : "serving"}`}</p>
                            <h3>{result.title}</h3>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

function convertTimeHour(time) {
    return `${Math.floor(time / 60) ? Math.floor(time / 60) + " hours": ""}  ${time % 60}`;
}