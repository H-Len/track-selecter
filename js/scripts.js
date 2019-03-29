$(document).ready(function() {
  ("#user-data").submit(function(event) {
    event.preventDefault();
    var hats = $('#form-hats').is(":checked");
    var poetInput = $("#form-poet").is(":checked");
    var litpref = $('#form-cats input:radio:checked').val();
    $(".matches").hide();

if (hats){
 $("#shakespear").fadeIn();
} else if (poetInput === false) {
 $("#dickens").fadeIn();
} else if (litpref === "classic") {
 $("#lewis").show();
} else {
 $("#emily").fadeIn();
}


 });
});
