let hourse = document.querySelector(".hourse")
let minite = document.querySelector(".minite")
let second = document.querySelector(".second")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")


 start.addEventListener("click", ()=>{
    set()
 })

 turn = true;
 var minites = 0;
 var hourss = 0;
 num = 0;


 function set(){
        inter =  setInterval(function(){
           num++
           second.innerHTML = num
           wact()
      }, 1000)
 } 

 function wact(){
    if(num < 10){
        second.innerHTML = `0${num}`
    }
    if(num === 59){
        clearInterval(inter)
        minites++;
        minite.innerHTML = minites
        if(minites< 10){
            minite.innerHTML = `0${minites}`
        }
        minits()
  num = 0;
  stopinter = setInterval(function(){
    num++
    second.innerHTML = num
    if(num < 10){
        second.innerHTML = `0${num}`
    }
    if(num === 59){
        minites++;
        minite.innerHTML = minites
        if(minites< 10){
            minite.innerHTML = `0${minites}`
        }

        if(minites === 59){
            minites = 0
            hourss++
            hourse.innerHTML = hourss
            if(hourss === 24){
                hourss = 0;
            }
        }
        num = 0;
    }
  }, 1000)
    }
 }

function minits(){
    if(minites === 59){
        minites = 0;
 
        hourss++
        hourse.innerHTML = hourss
        if(hourss < 10){
            hourse.innerHTML = `0${hourss}`
        }
    }
}

function stopwacht(){
    clearInterval(inter)
    clearInterval(stopinter)
}
function clearwacht(){
    num = 0;
    minites = 0;
     hourss = 0;
    second.innerHTML = "00"
    minite.innerHTML = "00"
    hourse.innerHTML = "00"
    clearInterval(inter)
    
}
