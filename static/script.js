var current=null
var sel = null

function openAct(evt, actName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(actName).style.display = "block";
  evt.currentTarget.className += " active";
  
}

function add(x)
{
  current = Object.keys(x)
}
function act()
{
  console.log(sel)
  if(sel!=null && sel>0)
     {
         console.log("EXEC -- "+sel);
         window.location.replace("http://microcon-detector.herokuapp.com/get/"+String(sel-1));

     }
  else
    {
      console.log("SELECT COMPONENT")
      alert("Pick a component first!!!")
    }
}

function d_load() {
  document.getElementById("imgOpen").click();
}

function b_nav() {
  window.history.back();
}

function ChangePhoto(name, img) {
  img = typeof img !== 'undefined' ? img : "{{ result['original'] }}";
  target = document.getElementById("label");
  target.innerHTML = name;
  target = document.getElementById("photo");
  target.src = img;
  sel = current.indexOf(name)
}

function WaitDisplay(upName) {
  target = document.getElementById("result");
  target.style.display = "none";
  target = document.getElementById("loading");
  target.style.display = "";
  setTimeout(function() {
    document.getElementById(upName).submit();
  }, 100);
}
