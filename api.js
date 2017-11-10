//submit array of ingredients into an API request

$("#findRecipe").on("click", function(event) {

  event.preventDefault();

  $.get('/api/recipes')
    .done(function(ingredients) {
      var ingredientsList = ingredients.map(stock => stock.item_name).join(',');
      var queryURL = "http://www.recipepuppy.com/api/?i=" + ingredientsList;
    
      $.ajax({
       
        url:queryURL,
        method: 'GET'
      })

      .done(function(response) {

        var response = JSON.parse(response);
        
        console.log(response)

      
      });
    })