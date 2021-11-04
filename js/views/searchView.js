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
