
function hisobla(nomi,narxi){
    const nechta=+prompt(nomi+ "  dan nechta zakaz qilomoqcisiz?");
    alert(nechta+ " ta " +nomi +"  jami : "+(narxi*nechta)+ " som bo'ladi"); 
     let javob=    confirm("zakas berasizmi?");
     if(javob==true){
        alert("zakaz qabul qilindi")
     } else{
        alert("buyurtma bekor qilindi!")
     }
}