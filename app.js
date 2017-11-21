// Get modal, get button/card, get span to close
// When clicked, open, when click on span or elsewhere, close

//Validus work modal
var syn = document.getElementById('validus');
var syn_btn = document.getElementsByClassName("card")[0];
var span1 = document.getElementsByClassName("close")[0];
syn_btn.onclick = function() { syn.style.display = "block"; }
span1.onclick = function() { syn.style.display = "none"; }


//TRIUMF work modal
var nn1 = document.getElementById('TRIUMF');
var nn1_btn = document.getElementsByClassName("card")[1];
var span2 = document.getElementsByClassName("close")[1];
nn1_btn.onclick = function() { nn1.style.display = "block";}
span2.onclick = function() { nn1.style.display = "none";}


//Kycia work modal
var vip = document.getElementById('Kycia');
var vip_btn =document.getElementsByClassName("card")[2];
var span3 = document.getElementsByClassName("close")[2];
vip_btn.onclick = function() {vip.style.display = "block";}
span3.onclick = function() { vip.style.display = "none"; }

//SweatFree work modal
var sf1 = document.getElementById('SweatFree');
var sf1_btn =document.getElementsByClassName("card")[3];
var span4 = document.getElementsByClassName("close")[3];
sf1_btn.onclick = function() {sf1.style.display = "block";}
span4.onclick = function() { sf1.style.display = "none"; }

//Powered arm modal
var pow=document.getElementById('MNSSoc');
var pow_btn = document.getElementsByClassName("card")[4];
var span5 = document.getElementsByClassName("close")[4];
pow_btn.onclick = function() {pow.style.display = "block";}
span5.onclick = function() { pow.style.display = "none"; }

//NN project modal
var nn2 = document.getElementById('FEDSCouncil');
var nn2_btn =document.getElementsByClassName("card")[5];
var span6 = document.getElementsByClassName("close")[5];
nn2_btn.onclick = function() {nn2.style.display = "block";}
span6.onclick = function() { nn2.style.display = "none"; }

//antifreeze project modal
var fog = document.getElementById('site');
var fog_btn =document.getElementsByClassName("card")[6];
var span7 = document.getElementsByClassName("close")[6];
fog_btn.onclick = function() {fog.style.display = "block";}
span7.onclick = function() { fog.style.display = "none"; }

//shelmet modal
var shl = document.getElementById('awards');
var shl_btn =document.getElementsByClassName("card")[7];
var span8 = document.getElementsByClassName("close")[7];
shl_btn.onclick = function() {shl.style.display = "block";}
span8.onclick = function() { shl.style.display = "none"; }

//publications modal
var pub = document.getElementById('publications');
var pub_btn =document.getElementsByClassName("card")[8];
var span9 = document.getElementsByClassName("close")[8];
pub_btn.onclick = function() {pub.style.display = "block";}
span9.onclick = function() { pub.style.display = "none"; }

//awards modal
var awd = document.getElementById('awards');
var awd_btn =document.getElementsByClassName("card")[9];
var span10 = document.getElementsByClassName("close")[9];
awd_btn.onclick = function() {awd.style.display = "block";}
span10.onclick = function() { awd.style.display = "none"; }

//honours modal
var hon = document.getElementById('otherhonours');
var hon_btn =document.getElementsByClassName("card")[10];
var span11 = document.getElementsByClassName("close")[10];
hon_btn.onclick = function() {hon.style.display = "block";}
span11.onclick = function() { hon.style.display = "none"; }


//If click outside modal, close whatever was open
window.onclick = function(event) {
    if(event.target ==syn) syn.style.display = "none";
    if(event.target == nn1) nn1.style.display = "none";
    if(event.target == vip) vip.style.display = "none";
    if(event.target == sf1) sf1.style.display = "none";
    if(event.target == nn2) nn2.style.display = "none";
    if(event.target == pow) pow.style.display = "none";
    if(event.target == fog) fog.style.display = "none";
    if(event.target == shl) shl.style.display = "none";
    if(event.target == pub) pub.style.display = "none";
    if(event.target == awd) awd.style.display = "none";
    if(event.target == hon) hon.style.display = "none";

}
