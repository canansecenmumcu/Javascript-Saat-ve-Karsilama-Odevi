function GetTime() {
    var now= new Date();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    //var gun=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

    var day=now.getDate();
    var month=now.getMonth()+1;
    var year=now.getFullYear();

    document.getElementById("hour").innerText=hour;
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;

    document.getElementById("date").innerText=day+" / "+month+" / "+year;

}

setInterval(function(){GetTime();},1000);

let fullName= prompt("İsminizi Giriniz :)")
let yourName= document.querySelector('#yourName')

yourName.innerHTML= `${fullName}`;
