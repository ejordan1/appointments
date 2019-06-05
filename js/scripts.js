$ (document).ready(function(){
  $(".form").submit(function(event) {
  var inputName =
  $("input#label1").val();
  var inputDescription =
  $("input#label2").val();
  var inputDate =
  $("input#label3").val();
  var inputStart =
  $("input#label4").val();
  var inputEndTime =
  $("input#label5").val();

        alert (inputName+" "+inputDescription+" "+inputDate+" "+inputStart+" "+inputEndTime);
      event.preventDefault();
      window.location = "redirected.html";
    });
});
