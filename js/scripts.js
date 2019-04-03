$(document).ready(function() {
var click = 1;

  $("button#addBtn").click(function(){
    if(click <= 14){
    click++;
    $("#h" + click).show();
  }else {
    $(".infoBtn").show();
    $("button#addBtn").hide();}
  });

  $("#formOne").submit(function(event) {



    var input = ["b", "i", "o"];
    finalInput = [];

    for(var x = 0; x < 3; x++){
      for (var s = 1; s <= click; s++){
      var tempInput = $("input#" + input[x] + s).val();
      finalInput.push(tempInput);
      };
    };

    var count = 0;
    for(var i = 0; i < 3; i++){
      for (var c = 0; c < click; c++){
      $("." + input[i] + (c+1)).text(finalInput[count]);
      count++;
      };
    };
    $("#output").show();
    $("#bb0").show();
    for(var o = 0; o < click; o++){
      $("#bb" + (o + 1)).show();
    };
    $("#header1").show();
    for(var r = 0; r < click; r++){
      $("#a" + (r + 1)).show();
    };
    event.preventDefault();
  });
});


// | Behavior      | Input          | Output  |
// | ------------- |:-------------:| -----:|

// | col 3 is      | right-aligned | $1600 |
// | col 2 is      | centered      |   $12 |
// | zebra stripes | are neat      |    $1 |
