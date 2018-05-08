$(function() {
$.get("/api/all", function(data) {

  for (var i = 0; i < data.length; i++) {
    var devourButton = $("<button>");

    devourButton.addClass("devour");
    devourButton.text("DEVOUR ME");

    var wellSection = $("<div>");
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    wellSection.attr("number", i +1);
    wellSection.attr("devoured", data[i].devoured);
// might have to add if condition to determine where the entry populates
    wellSection.append(devourButton);

    if (wellSection.attr("devoured") === "true") {
      console.log(wellSection.attr("number") + " should go to devour");
    $("#devoured").append(wellSection)
    } else {
      console.log(wellSection.attr("number") + " should go to orders");
    $("#orders").append(wellSection);
    }

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].burger_name + "</h2>");
  }
});


  $("#orders").on("click", ".well", function(event) {

    var devourState = $(this).attr("devoured");
    var number = $(this).attr("number");
      
    var nowDevoured = {
        // have a feeling I need to pass in the ID here
        devoured: true
    };

    var id = $(this).attr("id");
    console.log(id)
    $.ajax("/api/" + number, {
			type: "PUT", 
      data: {
        id: number,
        devoured: true
      }
		}).then(
			function() {
				console.log("changed to devoured");

				location.reload();
      })
      
  });

$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBurger object
  var newBurger = {
    burger_name: $("#title").val().trim(),
  };

  console.log(JSON.stringify(newBurger));

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function() {
   console.log()
      
   location.reload();
      // Log the data we found

    });
    
  // Empty each input box by replacing the value with an empty string
  $("#title").val("");

});
});