$(document).ready(function(){
  $("button.btn").click(function(){
    var inot=parseInt($('input[name=method]:checked').val());
    var prom=parseInt($('input[name=diff]:checked').val());
    var learn=parseInt($('input[name=type]:checked').val());
    var pro=parseInt($('input[name=op]:checked').val());
    var wed=parseInt($('input[name=array]:checked').val());

    var tiGet=$("input[name=method]:checked").value;
    var wiGet=$("input[name=diff]:checked").value;
    var triGet=$("input[name=type]:checked").value;
    var youGet=$("input[name=op]:checked").value;
    var weGet=$("input[name=array]:checked").value;

    var answer= tiGet + wiGet + triGet + youGet + weGet;
    if(tiGet<1 || wiGet<1 || triGet<1 || youGet<1 || weGet<1){
        $('.output').html("final");
    }else if(final>0){
      $('.output').html("<b>Your Score: " +final+ "%</b>");
    }else {
      $('.output').html("<b>Failed</b>");
    }

  $(".well").show(final);
  });
});
