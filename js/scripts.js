$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = ["b", "i", "o"];
    finalInput = [];

    for(var x = 0; x < 3; x++){
      for (var s = 1; s < 6; s++){
      var tempInput = $("input#" + input[x] + s).val();
      finalInput.push(tempInput);
      };
    };
      console.log(finalInput);
      var count = 0;



    for(var i = 0; i < 3; i++){
      for (var c = 0; c < 5; c++){
      $("." + input[i] + (c+1)).append(finalInput[count]);
      count++;
      };
    };

    $("#output").show();
    event.preventDefault();
  });
});


// | Tables        | Are           | Cool  |
// | ------------- |:-------------:| -----:|
// | col 3 is      | right-aligned | $1600 |
// | col 2 is      | centered      |   $12 |
// | zebra stripes | are neat      |    $1 |
