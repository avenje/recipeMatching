$("#findRecipe").on("click", function(event) {
  event.preventDefault();

  $.get('/api/recipes', function(ingredients) {

      $("#newInfo").empty();

console.log("7. ingredients: " + ingredients);
      
      // var ingredientsList = ingredients.item_name.map(stock => stock.item_name).join(',');

      var ingredientsList = ingredients.item_name.map(stock => {
        if(stock.include) {
        return stock.item_name
        } else {
          return '';
        }
      }).filter(String).join(',');
      
      // console.log("18. ingredients Include: " + ingredientsInclude);
      console.log("19. ingredients List: " + ingredientsList);

      var apiKey= "c026add351dfcdad7aa3ae49dd81851c";
      var apiId= "ad890c01";

      var queryURL = "https://api.edamam.com/search?q=" + ingredientsList + "&id=" + apiId + "&app_key=" + apiKey + "&more=true";

      console.log("26. URL: " + queryURL);
      console.log("27. ingredientsList: " + ingredientsList);

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      
      .done(function(response) {
        // var response = JSON.parse(response);
          var results= response.hits;
          var hitCount= response.count;

          console.log("29. results: " + results);
          console.log(response);

          for(var i= 0; i < results.length; i++) {

            // console.log("inside For loop ");

              var imgURL= results[i].recipe.image;

              var image= $("<img>").attr("src", imgURL);

              var recipeOutput = $('<div class="new-info col-xs-12">' 
              + "<br>"
              + "Recipes Found: " + hitCount 
              + "<br>" 
              + "Title: " + results[i].recipe.label
              + "<br>" 
              + "Ingredients in use: " + ingredientsList
              + "<br>"  
              + "Recipe Link: <a href=" + results[i].recipe.href + ">" + results[i].recipe.url + "</a>" 
              + "</div>"
              );
              $(".newInfo").append(recipeOutput).append(image);
          }; 

      })  
      // console.log("results.item_name.title: " + results.item_name);
  });
});