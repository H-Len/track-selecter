$(document).ready(function() {
    $("#user-data").submit(function(event) {
      event.preventDefault();
      var javaInput = $('#form-java').is(":checked");
      var phpInput = $("#form-php").is(":checked");
      var rubyInput = $("#form-ruby").is(":checked");
      $(".matches").hide();

    if (javaInput){
      $("#javaSee").fadeIn();
    } else if (phpInput === true) {
      $("#phpSee").slideIn();
    } else if (rubyInput !== false) {
      $("#rubySee").fadeIn();
    } else {
      $("#anyLang").show();
    }

    });
  });
