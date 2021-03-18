/*

la valeur voulu est entré dans la case euros, en appuyant sur le bouton convertir
une somme apparait dans la case dollard.






button.addEventListener('click', fonction()){
onclick = alert("touche pas à sa p'tit con");
}*/


const valDollar = 1.19;
const btnConvertir = document.querySelector('#btnConverti');

function convertir() {
    const euros = parseInt(document.getElementById("euro").value);
    const valDollard = euros * valDollar;
    const inpDollar = document.getElementById("dollar");
    inpDollar.value = valDollard;
}


btnConvertir.addEventListener('click', convertir);
  


