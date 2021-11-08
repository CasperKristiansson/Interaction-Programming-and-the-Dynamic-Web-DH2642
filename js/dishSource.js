const DishSource = {
    apiCall(params) {
        return fetch(BASE_URL + params, {
                "method": "GET",
                "headers": {
                    'X-Mashape-Key' : API_KEY,
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                }
        }).then(response => response.ok ? response.json() : throwError(response.statusText));
    },

    searchDishes(params) {
        return DishSource.apiCall("/recipes/search?" + new URLSearchParams(params))
                        .then(data => {return data.results});
    }, 

    getDishDetails(id){
        return DishSource.apiCall(`recipes/${id}/information`);
    }
};

function throwError(message) {
    throw new Error(message);
}
