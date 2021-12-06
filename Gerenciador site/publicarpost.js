var publicarpostagem = document.getElementById('publicar');
var inicio = document.getElementById('inicio');
var conteudos = document.querySelectorAll('.card');

publicarpostagem.addEventListener('click',function(){
    esconderConteudo()
    mostrarConteudo('publicarPost')
});

inicio.addEventListener('click',function(){
    esconderConteudo()
    mostrarConteudo('dashboard')
    mostrarConteudo('dashboard-google')
});


function esconderConteudo(){
    conteudos.forEach(element => {
        element.style.display = 'none';
    });
}

function mostrarConteudo(conteudoId) {
    const conteudo = document.getElementById(conteudoId);
    conteudo.style.display = 'block';
}

esconderConteudo()

mostrarConteudo('dashboard')
mostrarConteudo('dashboard-google')

var btnFecha = document.querySelector('.fecha-preview-js');
var saida = document.getElementById("publicacao");

saida.style.display = "block";
saida.style.backgroundImage = "url(./img/profile.png)";

var carregaArquivo = function(event){
    var leitura = new FileReader();
    leitura.onload = function() {
        saida.style.display = "block";
        btnFecha.style.display= "block";
        saida.style.backgroundImage = "url("+ leitura.result + ")";
    }
    leitura.readAsDataURL(event.target.files[0]);
}

var editarImagem = document.querySelector(".editar-conteudo");
var btnCarrega = document.getElementById("midia");

editarImagem.addEventListener('click',function(){    
    btnCarrega.click();
});

btnFecha.addEventListener("click", function(){
    btnFecha.style.display= "none";
    saida.style.backgroundImage = "url()";
    document.getElementById("midia").value="";
    document.getElementById("publicacao-texto").innerHTML = "";

});

var descricao = document.querySelector('#legenda');
var btnTextarea = document.querySelector('#botaoTextarea');

btnTextarea.onclick = function(){
    console.log(descricao.value);
    document.getElementById('publicacao-texto').innerHTML = descricao.value;
}


