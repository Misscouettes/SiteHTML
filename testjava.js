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


function changerImage() {
 
document.getElementById("image1").innerHTML="<p> Prout <p>";

 //"./Images/9203531.jpg"
}
 
function remettreImage() {

document.getElementById("image1").src="./Images/ampoule_a_decanter.jpg";

}



// http://www.pompage.net/traduction/deroulants
