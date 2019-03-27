document.getElementById('output').style.visibility='hidden';
const input = document.getElementById("poundsInput");

input.addEventListener('input', function(e){
    document.getElementById('output').style.visibility='visible';
    console.log(123);
    let pounds = e.target.value;
    console.log(pounds);
    document.getElementById("gramsOutput").innerHTML = pounds/0.0022046;
    document.getElementById("kgOutput").innerHTML = pounds/2.2046;
    document.getElementById("ounceOutput").innerHTML = pounds*16;
});