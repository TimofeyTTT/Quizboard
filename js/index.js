$(document).ready(function(){
  $("#submitAnswer").click(function(){

    var radio=[];
    radio.push($("input:radio[name=bum]:checked").val());
    radio.push($("input:radio[name=diff]:checked").val());
    radio.push($("input:radio[name=type]:checked").val());
    radio.push($("input:radio[name=op]:checked").val());
    radio.push($("input:radio[name=array]:checked").val());

    var result = 0;
    if(radio[0] == "10"){result+=10;
    }
    if(radio[1] == "10"){result+=10;
    }
    if(radio[2] == "10"){result+=10;
    }
    if(radio[3] == "10"){result+=10;
    }
    if(radio[4] == "10"){result+=10;
    }
    $("#number-correct").val(result);
    $(".col-md-10").hide();
    $("#finalOutput").show();
  });
});
