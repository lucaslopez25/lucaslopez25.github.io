function calcularIdade() { 
	var data_nasc = new Date(2000, 9, 25);
    var diff_ms = Date.now() - data_nasc.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


function displayIdade () {
	var tag_html = document.getElementById("idade");

	tag_html.textContent = calcularIdade();
	tag_html.innerText = calcularIdade();
}
displayIdade();