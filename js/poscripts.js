$(document).ready(function() {
  $("#demographics form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#address2").val();
    var address3Input = $("input#address3").val();
    var address4Input = $("input#address4").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".address3").text(address3Input);
    $(".address4").text(address4Input);

    $("#receipt").show();
    event.preventDefault();

  });
});
