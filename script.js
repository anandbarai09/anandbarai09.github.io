window.onload = () => {
  if(window.location.pathname == "/"){
    window.location.patchname = "/#home";
  }
  var path = window.location.hash;
  console.log(path)

  if (path == "#candy") {
    // title[0].innerHTML = "Candy AI - Anand Barai"
    document.title = "Candy AI - Anand Barai"
  }
}