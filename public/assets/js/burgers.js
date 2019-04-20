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

});