// Wait for DOM to be fully loaded

$(function() {
  var bellSound = new Audio("/assets/sounds/order-up.mp3");
  var eatingSound = new Audio("/assets/sounds/mmm1.mp3");


  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    var eatenState = {
      eaten: true
    };
    
    $("#modal-eating").modal();
    eatingSound.play();

    // Send the PUT request.
    setTimeout(() => {
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
    },2000);
  });

  // Add a new order
  $(".order-burger-form").on("submit", function(event) {
    event.preventDefault();
    bellSound.play();
    setTimeout(() => {

      let burgerType = $("input[type='radio'][name='burger_type']:checked").val();
      let bunType = $("input[type='radio'][name='bun']:checked").val();
      let cheeseType = $("input[type='radio'][name='cheese']:checked").val();
  
      var newBurger = {
        name: $("#bname").val().trim(),
        bun: bunType,
        cheese: cheeseType,
        burger_type: burgerType,
        eaten: 0
        // add , at end of prev line and add new options here
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
  
    },2000);
  });
});