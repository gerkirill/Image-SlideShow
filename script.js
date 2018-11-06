var time = 5;

function run() {
  var inputList = document.getElementById('inputList');
  var text = inputList.value;
  var arrayOfImageSrs = text.split("\n");   
  inputList.hidden = true;                  // скрываю текст от изменения
  document.querySelector("h1").innerHTML = "<img id=\"img\" src=\"pic1.img\" alt=\"Image text\">"; // создаю новый элемент картинка
  var img = document.getElementById("img");
  img.src = "https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png";

}

function changeTime() {
  var val = document.getElementById("time").value;
  if (!isNaN(val)){
    time = +val;
    document.getElementById("time").style="font-size: 35px"; // change style
  } else alert("False time");
}
 
function changeImg() {
  if (document.getElementById("img") != undefined) {
  }
}