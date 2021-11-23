function SummaryView(props){
    return (
        <div class="summaryView">
            <div class="centerDiv">
                <span title="nr. guests">Summary for { props.persons } guests </span>
                <button onClick={e => window.location.hash ="#search"}> Back to Search</button>
            </div>
            <div class="centerDiv">
                <table class ="ingredientsTable">
                    <thead>
                        <tr>
                            <th class="tableLeft">Ingredients</th>
                            <th>Aisle</th>
                            <th class="tableRight">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.ingredients.sort(compareIngredients).map(function(ingredient){
                            return <tr key={ ingredient.name }>
                                <td>{ ingredient.name }</td>
                                <td>{ ingredient.aisle }</td>
                                <td>{`${parseFloat((ingredient.amount * props.persons).toFixed(2))} ${ingredient.unit}`}</td>
                            </tr>
                        }) }
                    </tbody>
                </table>
            </div>
       </div>
    );
}

function compareIngredients(a, b){
    if(a.aisle < b.aisle) return -1;
    if(a.aisle > b.aisle) return 1;

    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    if(a.name == b.name) throw new Error("Ingredient names are not unique")
}
