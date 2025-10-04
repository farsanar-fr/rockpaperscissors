var plyrSel;
var compSel;
var plyrScore=0;
var compScore=0;
var gameStop=false;
var maxScore;

$('.submit').click(function()
{
    maxScore=$('.max-score')[0].valueAsNumber;
    console.log(maxScore);
    console.log(Number.isNaN(maxScore));
    
    if(maxScore==null||maxScore==''||Number.isNaN(maxScore))
    {
        alert("Enter a number to continue")
    }
    else
    {
        $('.welcome').hide();
        $('.game-area').removeClass("hidden");
        
    }
    
});

$(".choiceBtn").click(
    function()
    {
        if(!gameStop )
        {
            console.log(maxScore);
            var currentImg=this.firstElementChild.attributes["src"].value;
        console.log(currentImg);
        console.log(currentImg.slice(9,-5));
        plyrSel=currentImg.slice(9,-5);
    //$(".ds-plyr img").attr("src",currentImg);
    compSelection();
        }
  
    }
);


function compSelection()
{
    var num=Math.floor(Math.random()*3);
    var options=["rock","paper","scissor"]
    compSel=options[num]
    console.log(compSel);
    console.log(plyrSel);
    display();
    calcScore();
    
}
function display()
{
    $(".ds-plyr img").attr("src","./images/"+plyrSel+".jpeg").fadeOut(100).fadeIn(100);
    $(".ds-comp img").attr("src","./images/"+compSel+".jpeg").fadeOut(100).fadeIn(100);
}
function calcScore()
{
    console.log("calcScore ()");
    
    
    if(plyrSel=="scissor"&&compSel=="paper"||plyrSel=="paper"&&compSel=="rock"||plyrSel=="rock"&&compSel=="scissor")
    {
        plyrScore++;
        $(".score-plyr").text(plyrScore)
    }
    else if(compSel=="scissor"&&plyrSel=="paper"||compSel=="paper"&&plyrSel=="rock"||compSel=="rock"&&plyrSel=="scissor")
    {
        compScore++;
        $(".score-comp").text(compScore)
    }
    console.log("PLYR"+plyrScore);
    console.log("COMP"+compScore);
    
    if(maxScore==compScore)
    {
        console.log("COMPWON");
        setTimeout(()=>
        {
            
            $(".msg").addClass("red");
        $(".msg h1").text("Computer Won");
        $('.msg').removeClass("hidden");
        $('.overlay').show();
        
        gameStop=true;
        },500)
        
        
    }
    else if(maxScore==plyrScore)
    {
        console.log("PLYR won");
        
        setTimeout(()=>
        {
        $(".msg").addClass("green");
        $(".msg h1").text("Player Won");
        $('.msg').removeClass("hidden");
        $('.overlay').show();
        gameStop=true;
        triggerConfetti();
        },500)
    }
    
  
}
$(".rst").click(
    function()
    {
         plyrSel='';
 compSel='';
 plyrScore=0;
 compScore=0;
 gameStop=false;
  $('.welcome').show();
$('.game-area').addClass("hidden");
$('.overlay').hide();
if($(".msg").hasClass("red"))
{
    $(".msg").removeClass("red")
}
else if($(".msg").hasClass("green"))
{
    $(".msg").removeClass("green")
}
 $(".ds-plyr img").attr("src","./images/default.jpeg");
 $(".ds-comp img").attr("src","./images/default.jpeg");
 $(".score-plyr").text(0);
 $(".score-comp").text(0);
 $('.msg').addClass("hidden");

    }
)
function triggerConfetti() {
  confetti({
    particleCount: 350,
    spread: 100,
    origin: { y: 0.6 },
    decay:0.8
  });
}
