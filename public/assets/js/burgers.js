$(function() {
  $(".change").on("click", function(event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour");

    var devourState = {
      devoured: devour
    };

    // console.log(devourState); 
    // console.log(id); 

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        console.log("changed eaten? to: ", devour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    console.log('newBurger: ' + newBurger);
    console.log('name: ' + newBurger.name);
    console.log('devoured: ' + newBurger.devoured);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.delBurger').on('click', function(event) {
    console.log('delete'); 
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id); 
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }); 

}); 