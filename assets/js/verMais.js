function leiaMais() {
    var pontos = document.getElementById("pontos");
    var verMais = document.getElementById("ver-mais");
    var btn = document.getElementById("btnLeiaMais");
    var resumo = document.getElementById("resumo");

    
    if(pontos.style.display === "none") {
        pontos.style.display="block";
        verMais.style.display="none";
        btn.innerHTML="...ver mais";
    } else {
        pontos.style.display="none";
        verMais.style.display="inline";
        btn.innerHTML="Leia Menos";
    }
}