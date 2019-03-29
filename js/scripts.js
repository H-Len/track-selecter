$(document).ready(function() {
  $(".matches").hide();
    $("#user-data").submit(function(event) {
      event.preventDefault();
      var javaInput = $('#form-java').is(":checked");
      var phpInput = $("#form-php").is(":checked");
      var rubyInput = $("#form-ruby").is(":checked");
      var thoughInput = $('#form-cats input:radio:checked').val();
      // $("output.matches").text(result);
      // $(".matches").hide();

    if (javaInput){
      $("#javaSee").fadeIn();
    } else if (phpInput === true) {
      $("#phpSee").fadeIn();
    } else if (rubyInput !== false) {
      $("#rubySee").fadeIn();
    } else {
      $("#anyLang").fadeIn();
    }

  });
});
