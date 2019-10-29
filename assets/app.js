var topicsArray = ["tom hanks", "denzel washington", "leonardo dicaprio", "christian bale"]
var actorImg = "";
// ßvar keyword = "keywordSearch"
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=va98Ii4e8WfRbdMR0ItjXLCV2tTIVJRQ&q=" + keyword + "&limit=25&offset=0&rating=G&lang=en";

// $("#keyword-input").on("click", function () {

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});






    // .done(function(response) {

    //     console.log(response);
    //     var results = response.data;
    //     for (var i = 0; i < results.length; i++) {
    //         var gifDiv = $("<div class='item'>");
    //         var p = $("<p>").text("Rating: " + rating);
    //         var actorImg = $("<img>");
    //         actorImg.attr("src", results[i].images.fixed_height_still.url);
    //         actorImg.attr("data-still", results[i].images.fixed_height_still.url);
    //         actorImg.attr("data-animate", results[i].images.fixed_height.url);
    //         actorImg.attr("data-state", "still");
    //         actorImg.addClass("img-fluid gif border border-primary");
    //         gifDiv.prepend(p);
    //         gifDiv.prepend(actorImg);
    //     };
    // })
//insert if else statement here for static or dynamic gifs 
    //$(".gif").on("click", function() {
        //var state = $(this).attr("data-state");

    //})
