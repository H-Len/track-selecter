$(document).ready(function() {
  ("#user-data").submit(function(event) {
    event.preventDefault();
    var javaInput = $('#form-java').is(":checked");
    var phpInput = $("#form-php").is(":checked");
    var rubyInput = $('#form-ruby input:radio:checked').val();
    $(".matches").hide();

if (java){
 $("#javaSee").fadeIn();
} else if (phpInput === false) {
 $(phpSee).slideIn();
} else if (rubyInput === "classic") {
 $("#rubySee").fadeIn();
} else (
  <p>Start with ANY language offered and go from there.<p>
);


 });
});
