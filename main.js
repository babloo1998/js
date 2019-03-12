function showtime() {
var date = new Date();
var h =date.getHours();
var m= date.getMinutes();
var s= date.getSeconds();
var session = "AM";

if(h == 0){
h = 12;
}

if(h > 12){
h = h - 12;
session = "PM";
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;

if((h<12)&&(session=="AM"))
{
document.getElementById("wish").innerText= "Good morning";
}
else if (h<5)
{
document.getElementById("wish").innerText= "Good Afternoon";
}
else
{
document.getElementById("wish").innerText= "Good evening";
}
document.getElementById("digital-clock").innerText = time;
setTimeout(showtime, 1000);

var d= date.getDate() ;
var mon = date.getMonth();
var y= date.getFullYear();
d = (d < 10) ? "0" + d : d;
month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var day = d +" " +month[mon]+" " + y;


document.getElementById("date").innerText= day;

 
}



