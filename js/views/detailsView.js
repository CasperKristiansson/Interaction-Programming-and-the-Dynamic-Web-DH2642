function DetailsView(props) {
    return (
        <div class="details-view">
            <div class="details-food-intro">
                <img src={props.dish.image}/>
                <div class="details-food-intro-text">
                    <h1> {props.dish.title} </h1>
                    <p class="dish-price">{`$${(props.dish.pricePerServing).toFixed(2)}`}</p>
                    <p class="dish-type">{dishTypeText(props.dish.dishTypes)}</p>
                    <li>{`Estimate preparation time: ${props.dish.readyInMinutes} minutes`}</li>
                    <li>{`Health score: ${props.dish.healthScore}`}</li>

                    <p class="total-price">{`Total Price $${(props.dish.pricePerServing * props.people).toFixed(2)}`}</p>
                    <button onClick = {event => props.dishAdded()} disabled = { props.isDishInMenu }>Add to menu</button> <button>Cancel</button>
                </div>
            </div>

            <div class="details-food-information">
                <div class="tabs">
                    <button class="tab-button active" onClick = {(event) => tabMenu(event, "Description")}>Description</button>
                    <button class="tab-button" onClick = {(event) => tabMenu(event, "instructions")}>Instructions</button>
                    <button class="tab-button" onClick = {(event) => tabMenu(event, "ingredients")}>Ingredients</button>
                </div>

                <div id="Description" class="tab-content">
                    <p>{removeHTMLTags(props.dish.summary)}</p>

                    <ul type = "information">
                        <li>{`Dairy free: ${props.dish.dairyFree ? "Yes" : "No"}`}</li>
                        <li>{`Gluten free: ${props.dish.glutenFree ? "Yes" : "No"}`}</li>
                        <li>{`Vegan: ${props.dish.vegan ? "Yes" : "No"}`}</li>
                        <li>{`Vegetarian: ${props.dish.vegetarian ? "Yes" : "No"}`}</li>
                        <li>{`Sustainable: ${props.dish.sustainable ? "Yes" : "No"}`}</li>
                    </ul>
                </div>
                <div id="instructions" class="tab-content">
                    <p>{props.dish.instructions}</p>
    
                </div>
                <div id="ingredients" class="tab-content">
                    {props.dish.extendedIngredients.map(function(result) {
                        return <li key={result.id}> {result.original} </li>
                    })}
                </div>
            </div>
        </div>
    );
}

function removeHTMLTags(string) {
    var div = document.createElement("div");
    div.innerHTML = string;
    return div.textContent || div.innerText || "";
}

function dishTypeText(array) {
    var text = "";
    for (var i = 0; i < array.length; i++) {
        text += array[i];
        if (i < array.length - 1) {
            text += "/";
        }
    }
    return text;
}

function tabMenu(event, desiredTab) {
    var tab = document.getElementsByClassName("tab-content");
    var links = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(desiredTab).style.display = "block";
    event.currentTarget.className += " active";
}
