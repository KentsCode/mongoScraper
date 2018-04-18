$(".del-item").on("click", function() {
    var id = $(this).data("id");
    console.log(id);
    // Send the DELETE request.
    $.ajax({
      url: "/delete/" + id,
      type: "GET",
      data: {"id":id}
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
});

console.log("articles.js loaded!")
