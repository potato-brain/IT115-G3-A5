
function showAlt(x) {
  document.getElementById("alttext").innerHTML=x.alt;
  // document.getElementById("alttext").style.border = "1px solid black";
  // document.getElementsById("index-alttext").style.background = "rgba(16, 185, 30, 0.911)";
}

function hideAlt(x) {
  document.getElementById("alttext").innerHTML="";
  // document.getElementById("alttext").style.border="0px";
}