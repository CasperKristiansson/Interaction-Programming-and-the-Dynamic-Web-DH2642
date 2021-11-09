function SummaryView(props){
    return (console.log(props),
        <div>
            Summary for <span title="nr. guests"> { props.persons }</span> guests:
            <table>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Aisle</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    { props.ingredients.sort(compareIngredients).map(function(ingredient){
                        return <tr key={ ingredient.name }>
                            <td>{ ingredient.name }</td>
                            <td>{ ingredient.aisle }</td>
                            <td>{`${(ingredient.amount).toFixed(2)} ${ingredient.unit}`}</td>
                        </tr>
                    }) }
                </tbody>
            </table>
       </div>
    );
}

function compareIngredients(a,b){
    if(a.aisle < b.aisle) return -1;
    if(a.aisle > b.aisle) return 1;
    if(a.name == b.name) throw new Error("Ingredient names are not unique")
}
