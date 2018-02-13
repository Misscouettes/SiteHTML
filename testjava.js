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
case 3 :
    var elem=document.getElementById("image3");
    elem.style.opacity='0.1';
    document.getElementById("message3").innerHTML="Becher";
    break;
case 4 :
    var elem=document.getElementById("image4");
    elem.style.opacity='0.1';
    document.getElementById("message4").innerHTML="Burette graduée";
    break;
case 5 :
    var elem=document.getElementById("image5");
    elem.style.opacity='0.1';
    document.getElementById("message5").innerHTML="Cristallisoir";
    break;
case 6 :
    var elem=document.getElementById("image6");
    elem.style.opacity='0.1';
    document.getElementById("message6").innerHTML="Eprouvette graduée";
    break;
case 7 :
    var elem=document.getElementById("image7");
    elem.style.opacity='0.1';
    document.getElementById("message7").innerHTML="Erlenmeyer";
    break;
case 8 :
    var elem=document.getElementById("image8");
    elem.style.opacity='0.1';
    document.getElementById("message8").innerHTML="Pipette jaugée";
    break;
case 9 :
    var elem=document.getElementById("image9");
    elem.style.opacity='0.1';
    document.getElementById("message9").innerHTML="Pisette";
    break;
case 10 :
    var elem=document.getElementById("image10");
    elem.style.opacity='0.1';
    document.getElementById("message10").innerHTML="Spatule";
    break;
case 11 :
    var elem=document.getElementById("image11");
    elem.style.opacity='0.1';
    document.getElementById("message11").innerHTML="Trompe à eau";
    break;
case 12 :
    var elem=document.getElementById("image12");
    elem.style.opacity='0.1';
    document.getElementById("message12").innerHTML="Tube à essai";
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
case 3 :
    var elem =document.getElementById("image3");
    elem.style.opacity='1';
    document.getElementById("message3").innerHTML="";
    break;
case 4 :
    var elem =document.getElementById("image4");
    elem.style.opacity='1';
    document.getElementById("message4").innerHTML="";
    break;
case 5 :
    var elem =document.getElementById("image5");
    elem.style.opacity='1';
    document.getElementById("message5").innerHTML="";
    break;
case 6 :
    var elem =document.getElementById("image6");
    elem.style.opacity='1';
    document.getElementById("message6").innerHTML="";
    break;
case 7 :
    var elem =document.getElementById("image7");
    elem.style.opacity='1';
    document.getElementById("message7").innerHTML="";
    break;
case 8 :
    var elem =document.getElementById("image8");
    elem.style.opacity='1';
    document.getElementById("message8").innerHTML="";
    break;
case 9 :
    var elem =document.getElementById("image9");
    elem.style.opacity='1';
    document.getElementById("message9").innerHTML="";
    break;
case 10 :
    var elem =document.getElementById("image10");
    elem.style.opacity='1';
    document.getElementById("message10").innerHTML="";
    break;
case 11 :
    var elem =document.getElementById("image11");
    elem.style.opacity='1';
    document.getElementById("message11").innerHTML="";
    break;

case 12 :
    var elem =document.getElementById("image12");
    elem.style.opacity='1';
    document.getElementById("message12").innerHTML="";
    break;


}

}



function Affscore() {
    var score = 0;
    var reponse = document.getElementsByTagName("SECTION");
    var nbrep=reponse.length;
    var i = 0;
    while(i< nbrep) {
        var nbinput= reponse[i].getElementsByTagName("INPUT");
        var Tinput = nbinput.length;
        i++;
        var j=0;
        while(j<Tinput){
            if( (nbinput[j].type == "radio") && (nbinput[j].checked) ) {
                score = score + parseInt(nbinput[j].value,10);

                }
            j++;

          }
        }
document.getElementById("affichscore").innerHTML=score;
    }



// http://www.pompage.net/traduction/deroulants
