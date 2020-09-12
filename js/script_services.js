//(document.getElementById('button')) 
//(document.getElementById('button').style.background = 
//colors[colorIndex])


//function myFunction(){   
 //   var colors = ["#E5E5E5", "#4DBFF7;"],
 //   selectedColor = colors[Math.floor(Math.random()*colors.length)]
  //  $("body").css("background-color", selectedColor);
//}

let prviBtn = document.getElementById('prvo');
let btn = document.querySelector('#prvo');
btn.addEventListener("click",function(){
    document.body.classList.toggle('colored');
});
