function toggleMenu(){
    var menuBox = document.getElementById('menu-box');  
    var bar=document.getElementById('menu');
    
    if(bar.style.color=="gold"){
        bar.style.color="white";
    }
    else{
        bar.style.color="gold";
    }

    window.onclick = function(event){
      if (event.target.bar){
      }
        
    }

    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
        menuBox.style.display = "none";
      }
      else { // if is menuBox hidden, display it
        menuBox.style.display = "block";
      }
}