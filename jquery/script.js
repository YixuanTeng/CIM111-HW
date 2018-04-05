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
    
$("#button1").click(function(){
      $("#replace").html("<img src='img/1.jpg' width=164 height=200/>");
      });
$("#button2").click(function(){
      $("#replace").html("<img src='img/2.jpg' width=164 height=200/>");
      });
$("#button3").click(function(){
      $("#replace").html("<img src='img/3.jpg' width=164 height=200/>");
      });
$("#button4").click(function(){
      $("#replace").html("<img src='img/4.jpg' width=164 height=200/>");
      });
$("#button5").click(function(){
      $("#replace").html("<img src='img/5.jpg' width=164 height=200/>");
      });
$("#button6").click(function(){
      $("#replace").html("<img src='img/6.png' width=164 height=200/>");
      });

$("#hover").mouseenter(function(){
      $("#hoverimg").hide(5000);
      });
$("#hover").mouseleave(function(){
      $("#hoverlink").show(5000);
      });

$("#toggle").click(function(){
      $("#toggleimg").toggle(1000);
      });

$(".css").hover(function(){
      $("p",).css("background-color", "black");
      $("p",).css("color", "white");
      });
    });
