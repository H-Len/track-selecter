$(document).ready(function() {
  ("#user-data").submit(function(event) {
    event.preventDefault();
    var javaInput = $('#form-java').is(":checked");
    var phpInput = $("#form-php").is(":checked");
    var rubyInput = $('#form-ruby input:radio:checked').val();
    $(".matches").hide();

if (java){
 $("#shakespear").fadeIn();
} else if (phpInput === false) {
 $("#dickens").fadeIn();
} else if (rubyInput === "classic") {
 $("#emily").fadeIn();
} else (
  <p>Start with ANY language offered and go from there.<p>
)


 });
});
