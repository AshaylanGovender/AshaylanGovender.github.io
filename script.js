var deadlineDate = new Date("December, 13 2021 12:00:00").getTime();
        
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var time = deadlineDate - now;
    
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

})

var w = window.innerWidth;
wei = w / 10;
const para = document.createElement("p");
h = window.innerHeight;
var hei = Math.floor((h - 1.15) / 14) - 1;

const spaces = [" ","  ","   ","    ","     ","      ","       ","        ","         ","          "]

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

for (i = 1; i < hei; i++) {
    var ran = Math.floor(Math.random()* 10);
    var space = spaces[ran];
    var l = Math.random() * wei;
    var text = makeid(l);
    var node = document.createTextNode((i+1) + space + text + ";\r\n");
    para.appendChild(node);
}

var node = document.createTextNode((hei + 1) + " }");
para.appendChild(node);

const element = document.getElementById("background");
element.appendChild(para)

function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";
    
    var i = 0;
    var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

var speed = 0.0000000001;
var h6 = document.querySelector('h6');
var p = document.querySelector('p');
var delay = h6.innerHTML.length * speed + speed;

typeEffect(h6, speed);

setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);
