var gifs = [];
function alertgifName() {
  var gifName = $(this).attr("data-name");
}
function renderButtons() {
  for (var i = 0; i < gifs.length; i++) {

    // Then dynamicaly generating buttons for each gif in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    a.addClass("gif");
    a.attr("data-name", gifs[i]);
    a.text(gifs[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#gif-input").val().trim();
  gifs.push(gif);
  renderButtons();
});
$(document).on("click", ".gif", alertgifName);
renderButtons();
    




    // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-actor property value from the button
      var actor = $(this).attr("data-actor");

      // Constructing a queryURL using the actor name
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=va98Ii4e8WfRbdMR0ItjXLCV2tTIVJRQ&q=" + actor + "&limit=10&offset=0&rating=G&lang=en";

        

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var actorDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var actorImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            actorImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the actorDiv
            actorDiv.append(p);
            actorDiv.append(actorImage);

            // Prependng the actorDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(actorDiv);
          }
        });


        
    });

