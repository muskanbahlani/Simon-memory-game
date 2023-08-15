
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];



var started=false;
var level=-1;


function nextSequence(){

     level=level+1;
     console.log("level  "+level);
     $("h1").text("level"+" " +  level);
     
     var randomNumber=Math.floor(Math.random()*4);
     console.log("our random number is "+ randomNumber);

     var randomChosenColour=buttonColours[randomNumber];

     console.log("our randomChoosen color is "+ randomChosenColour);

     gamePattern.push(randomChosenColour);

     console.log("our gamePattern is  " + gamePattern);

     $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

     playSound(randomChosenColour);
     
     
     
}

$(".btn").click(function(){
     var userChosenColor=$(this).attr("id");
     userClickedPattern.push(userChosenColor);
     console.log("user clicked pattern is  "+ userClickedPattern);
     playSound(userChosenColor);
     animatePress(userChosenColor);
     checkAnswer(userClickedPattern.length-1);
    
     
});


function playSound(name){
     var audio= new Audio("sounds/" +name+ ".mp3");
     audio.play();
}

function animatePress(currentColor){
     $("#"+currentColor).addClass("pressed");
     setTimeout(function(){$("#"+currentColor).removeClass("pressed",1000);
})
}

$(document).keydown(function(){
     if(started===false){
     nextSequence();
     started=true;
     $("h1").text("level "+level);
     }
});

function checkAnswer(currentLevel){
     if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
          if(gamePattern.length===userClickedPattern.length){
       
               setTimeout(function(){
                    nextSequence();
                 },1000);
                   userClickedPattern=[];

     }
     }
     
     else{
         playSound("wrong");
         $("body").addClass("game-over");
         $("h1").text("Game over,Press any key to restart");

         setTimeout(function(){
          $("body").removeClass("game-over");
         },1000);

         started=false;
         level=0;
         

     }
     }









     


 













