function setDate(){
 const d = new Date(); var dat = d.getDate(); var mon = d.getMonth()+1; var year = d.getFullYear(); document.getElementById("demo").innerHTML = dat+"/" + mon+ "/"+ year;
   
}

   