
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var first_hobby = $("input#hobby_one").val();
    var second_hobby = $("input#hobby_two").val();
    var third_hobby = $("input#hobby_three").val();

    var array_hobby = [first_hobby, second_hobby, third_hobby];
    var clone_array = array_hobby.slice();
    $(".results").text(array_hobby);

    var different_order = [clone_array[2], clone_array[0]];

    $(".results_two").text(different_order);

    $("#story").show();

    event.preventDefault();
  });
});
