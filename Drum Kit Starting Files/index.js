var count=document.querySelectorAll(".drum").length;
for(var i=0;i<count;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var emt=this.innerHTML;
    keyboard(emt);
    buttonanimation(emt);
   
    });
}
document.addEventListener("keypress",function(event){

keyboard(event.key);
buttonanimation(event.key);
});
function keyboard(value)
{
    switch(value)
    {
    case "w":
        var crash= new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "a":  
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":  
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "d": 
    var tom_1=new Audio("sounds/tom-1.mp3");
    tom_1.play();
    break;
    case "j": 
    var tom_2=new Audio("sounds/tom-2.mp3");
    tom_2.play();
    break;
    case "k":  
    var tom_3=new Audio("sounds/tom-3.mp3");
    tom_3.play();
    break;
    case "l":
    var tom_4=new Audio("sounds/tom-4.mp3");
    tom_4.play();
    break;
    default: console.log(value);
    }



}
function buttonanimation(kvalue)
{
var active=document.querySelector("."+kvalue);
active.classList.add("pressed");
setTimeout(function(){
active.classList.remove("pressed");},100);
    

}


