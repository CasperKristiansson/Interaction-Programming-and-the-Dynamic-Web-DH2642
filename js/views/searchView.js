function SearchFormView(props) {
    return (
        <div>
            <select>
                <option>Choose:</option>
                {props.options.map(function(opt) { return <option>{opt}</option> })}
            </select>
        </div>
    );
}