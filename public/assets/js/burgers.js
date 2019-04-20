// Wait for DOM to be fully loaded
$(function() {

  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);

    var eatenState = {
      eaten: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        console.log("Burger has been eaten");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Add a new order
  $(".order-burger-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bname").val().trim()
      // add , at end of prev line and add new options here
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger has been ordered");
        location.reload();
      }
    );

  });


});