var time = 5;
var timerId;
var currentImg=0;
var arrayOfImageSrs;
function run() {
  var inputList = document.getElementById('inputList');
  var text = inputList.value;
  arrayOfImageSrs = text.split("\n");
  inputList.hidden = true; // скрываю текст от изменения
  document.querySelector("h1").innerHTML = "<img id=\"img\" alt=\"Image text\">"; // создаю новый элемент картинка
  changeTime();
}

function changeImg() {
  // if (document.getElementById("img") != undefined) 
  {
    var img = document.getElementById("img");
    img.src = arrayOfImageSrs[currentImg];
    console.log(arrayOfImageSrs[currentImg]);
    currentImg++;
    if (currentImg>=arrayOfImageSrs.length-1) currentImg=0;
  }

}

function changeTime() {
  var val = document.getElementById("time").value;
  if (!isNaN(val)) {
    time = +val;
    document.getElementById("time").style = "font-size: 18px"; // change style
    clearInterval(timerId);
    changeImg();
    timerId = setInterval(changeImg, time * 1000);
  } else alert("False time");
}