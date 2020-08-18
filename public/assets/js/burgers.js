// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(".change-devoured").on("click", function(event) {
	  var id = $(this).data("id");
	  console.log(id);
	  
	  var newdevoured = $(this).data("newdevoured");
	  console.log("new change",newdevoured);
  
	  var newdevouredState = {
		devoured: newdevoured
	  };
  
	  // Send the PUT request.
	  $.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: newdevouredState
	  }).then(
		function() {
		  console.log("changed devored to", newdevoured);
		  // Reload the page to get the updated list
		   location.reload();
		}
	  );
	});
  
	$(".create-form").on("submit", function(event) {
	  // Make sure to preventDefault on a submit event.
	  event.preventDefault();
  
	  var newBurger = {
		burger_name : $("#ca").val().trim(),
		devoured: $("[name=devoured]").val().trim()
	  };
  
	  // Send the POST request.
	  $.ajax("/api/burgers", {
		type: "POST",
		data: newBurger
	  }).then(
		function() {
		  console.log("created new burger",newBurger);
		  // Reload the page to get the updated list
		   location.reload();
		}
	  );
	});
  
  
  });
  
  
  