sfHover = function() {
        var sfEls = document.getElementById("nav").getElementsByTagName("li"); //on cherche les elements dans nav qui sont des listes (li)
        for (var i=0; i<sfEls.length; i++) { //pour chaque element dans cette liste
                sfEls[i].onmouseover=function() { //si on passe la souris dessus, on écrit "sfhover" dessus
                    this.className+=" sfhover";
                }
                sfEls[i].onmouseout=function() {
                        this.className=this.className.replace(this.className, ""); //si on sort la souris de dessus, on change le nom
                }

        }

}


function changerImage(n) {

switch(n)  {
case 1 :
    var elem=document.getElementById("image1");
    elem.style.opacity='0.1';
    document.getElementById("message1").innerHTML="Ampoule";
    break;
case 2 :
    var elem=document.getElementById("image2");
    elem.style.opacity='0.1';
    document.getElementById("message2").innerHTML="Ballon";
    break;


}
 
}
function remettreImage(n) {

switch(n) {
case 1 :    
    var elem =document.getElementById("image1");
    elem.style.opacity='1';
    document.getElementById("message1").innerHTML="";
    break;
case 2 :    
    var elem =document.getElementById("image2");
    elem.style.opacity='1';
    document.getElementById("message2").innerHTML="";
    break;

}

}



// http://www.pompage.net/traduction/deroulants
