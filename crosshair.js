
function display() { 
    if(document.getElementById('inlineRadio1').checked) {
        document.getElementById("crosshair-baslik").innerHTML
            = "<h3>CSGO</h3>";
    }
    else if(document.getElementById('inlineRadio2').checked) {
        document.getElementById("crosshair-baslik").innerHTML
            = "<h3>VALORANT</h3>";  
    }
    else if(document.getElementById('inlineRadio3').checked) {
        document.getElementById("crosshair-baslik").innerHTML
            = "<h3>APEX LEGEND</h3>";  
    }
    else {
    }
}
