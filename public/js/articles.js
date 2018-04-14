$(".del-item").on("click", function() {
    var id = $(this).data("id");
    console.log(id);
    // Send the DELETE request.
    $.ajax("/delete", {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        //location.reload();
      }
    );
});
