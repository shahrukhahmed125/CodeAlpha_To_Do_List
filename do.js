
// appending all the text in a list
function add(){
    var text=document.getElementById('text').value;
    var para=document.getElementById('result').innerHTML;
    var concat=para+'<br>'+text;
    document.getElementById('result').innerHTML=concat;
}