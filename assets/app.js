$(document).ready(function () {
    //adding search feature (does not work)
    // var actor = $("#gif-input")
    var topics = [" denzel ", " hanks ", "leo ", " reese "];
    // function alertgifName() {
    //     var gifName = $(this).attr("data-name");
    // }
    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("gif");
            a.attr("data-actor", topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
        }
    }
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        topics.push(gif);
        renderButtons();
    });
    // $(document).on("click", ".gif", alertgifName);
    renderButtons();
    console.log(renderButtons)

    // Adding click event listen listener to all buttons
    // $("button").on("click", function () {
    $(document).on("click", "button", function() {
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
            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                // Looping through each result item
                //add data animate, data still and data-state...give each .gif a class 
                for (var i = 0; i < results.length; i++) {
                    var actorDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var actorImage = $("<img>");
                    actorImage.attr("src", results[i].images.fixed_height.url);
                    actorDiv.append(p);
                    actorDiv.append(actorImage);

                    $("#gifs-appear-here").prepend(actorDiv);


                }

            });

        // click to freeze / restart gif animation (does not work)
        $("#gifs-appear-here").on("click", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }

        });



    })

});