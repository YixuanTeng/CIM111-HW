
$(document).ready(function(){
    $("#hide").click(function(){
        $("#img").hide();
    });
    $("#show").click(function(){
        $("#img").show();
    });
    $("#hide1").click(function(){
        $("#img1").hide();
    });
    $("#show1").click(function(){
        $("#img1").show();
    });
    $("#hide2").click(function(){
        $("#img2").hide();
    });
    $("#show2").click(function(){
        $("#img2").show();
    });
    $("#hide3").click(function(){
        $("#img3").hide();
    });
    $("#show3").click(function(){
        $("#img3").show();
    });
    $("#hide4").click(function(){
        $("#img4").hide();
    });
    $("#show4").click(function(){
        $("#img4").show();
    });

$("#button1").click(function(){
      $("#replace").html("<img src='imgs/12.jpg' width=500 height=300/>");
      });
$("#button2").click(function(){
      $("#replace").html("<img src='imgs/13.jpg' width=500 height=300/>");
      });
$("#button3").click(function(){
      $("#replace").html("<img src='imgs/14.jpg' width=500 height=300/>");
      });
$("#button4").click(function(){
      $("#replace").html("<img src='imgs/15.jpg' width=500 height=300/>");
      });
$("#button5").click(function(){
      $("#replace").html("<img src='imgs/16.jpg' width=500 height=300/>");
      });

$("#toggle1").click(function(){
      $("#toggleimg").toggle(1000);
      });
$("#toggle2").click(function(){
      $("#toggleimg1").toggle(1000);
      });
$("#toggle3").click(function(){
      $("#toggleimg2").toggle(1000);
      });
$("#toggle4").click(function(){
      $("#toggleimg3").toggle(1000);
      });
$("#toggle5").click(function(){
      $("#toggleimg4").toggle(1000);
      });
});
