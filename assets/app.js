$(document).ready(function() {

var topics = []; 



      $("#actorSearch").on("click", function(event) {

       
        event.preventDefault();

        
        var actor = $("#actorSearch").val();
        console.log (actorSearch)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&city&api_key=va98Ii4e8WfRbdMR0ItjXLCV2tTIVJRQ";

       
      },

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

        var results = response.data;
        console.log (results);

        for (var i = 0; i < results.length; i++) {

            var rating = results[i].rating;
            var defaultAnimatedSrc = results[i].images.fixed_height.url;
            var staticSrc = results[i].images.fixed_height_still.url;
            var showImage = $("<img>")
            var p = $("<p>").text("rating" + " ");

           


        }
       
          
     







        $(".gif").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
        })
















});