document.getElementById("but1").addEventListener("click",dhtoEuro)
document.getElementById("hrf1").addEventListener("click", changer)
const mad = document.getElementById("text1"),
resultat = document.getElementById("text1")
;
document.getElementById("but2").addEventListener("click",dhtoEuro)
   function dhtoEuro(){
 if(document.querySelector(".inp").value=="MAD > EURO"){
   
       const val= parseFloat(mad.value),
       valmad = val/10;
       resultat.value=valmad;
 }
 else{
   const val= parseFloat(mad.value),
      valeuro = val*10;
      resultat.value=valeuro;
 }
 

 }
document.getElementById("hrf1").addEventListener("click", changer);
     function changer(){ 
      mad.value="";
       if(document.querySelector(".inp").id=="but1"){
        document.querySelector(".inp").id="but2";
        document.querySelector(".inp").value="MAD > EURO";
       } else if(document.querySelector(".inp").id=="but2") {
        document.querySelector(".inp").id="but1";
        document.querySelector(".inp").value="EURO > MAD ";
       }
     }
     
      
   
     
     
     //Badr El Rhazi


