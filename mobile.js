function chance_table(){
    document.getElementById("Bitcoin").innerHTML="Bitrade";
    document.getElementById("Ethereum").innerHTML="Bitpreco";
    document.getElementById("Ripple").innerHTML="Novadax";
    document.getElementById("Stellar").innerHTML="Coinext";

    document.getElementById("Treding-1").style.display="none";
    document.getElementById("Treding-2").style.display="none";
    document.getElementById("Treding-3").style.display="none";
    document.getElementById("Treding-4").style.display="none";

    document.getElementById("Monedas").style.color="#1A9AF7";
    document.getElementById("Monedas").innerHTML="Comisiones";

    document.getElementById("Value-1").innerHTML="$ 12.96";
    document.getElementById("Value-1").style.fontSize= "1.4rem";
    document.getElementById("Value-2").innerHTML="$ 13.07";
    document.getElementById("Value-2").style.fontSize= "1.4rem";
    document.getElementById("Value-3").innerHTML="$ 13.15";
    document.getElementById("Value-3").style.fontSize= "1.4rem";
    document.getElementById("Value-4").innerHTML="$ 14.96";
    document.getElementById("Value-4").style.fontSize= "1.4rem";

    var tiempo= new Date();
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
    ];
    var dia= tiempo.getDate();
    var mes= tiempo.getMonth();
    var hora= tiempo.getHours();
    var min= tiempo.getMinutes();
    document.getElementById("actualizar").innerHTML="<b>Actualizado:</b> " +dia+" "+monthNames[mes]+" "+hora+":"+min;

    document.getElementById("table-date").style.backgroundColor= "#E7F5FF";

    document.getElementById("arrow").style.display= "none";
    document.getElementById("arrow-left").style.display= "inline-block";


}

function chance_table_one(){
    document.getElementById("Bitcoin").innerHTML="Bitcoin";
    document.getElementById("Ethereum").innerHTML="Ethereum";
    document.getElementById("Ripple").innerHTML="Ripple";
    document.getElementById("Stellar").innerHTML="Stellar";

    document.getElementById("Treding-1").style.display="inline-block";
    document.getElementById("Treding-2").style.display="inline-block";
    document.getElementById("Treding-3").style.display="inline-block";
    document.getElementById("Treding-4").style.display="inline-block";

    document.getElementById("Monedas").style.color="#FF9536";
    document.getElementById("Monedas").innerHTML="Monedas";

    document.getElementById("Value-1").innerHTML="$ 1.96";
    document.getElementById("Value-1").style.fontSize= "1.2rem";
    document.getElementById("Value-2").innerHTML="$ 0.07";
    document.getElementById("Value-2").style.fontSize= "1.2rem";
    document.getElementById("Value-3").innerHTML="$ 2.15";
    document.getElementById("Value-3").style.fontSize= "1.2rem";
    document.getElementById("Value-4").innerHTML="$ 4.96";
    document.getElementById("Value-4").style.fontSize= "1.2rem";

    
    document.getElementById("actualizar").innerHTML="<b>Actualizado:</b> 19 Julio 23:45";

    document.getElementById("table-date").style.backgroundColor= "#E7F5FF";

    document.getElementById("table-date").style.backgroundColor= "#FFE9D5";

    document.getElementById("arrow").style.display= "inline-block";
    document.getElementById("arrow-left").style.display= "none";
}