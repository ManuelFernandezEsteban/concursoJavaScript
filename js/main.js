const preguntas = document.getElementById("preguntas");
const contador = document.getElementById("contador");
var intervalo;
var fin;
var segundo;

function ocultarCaja(caja)
{
    caja.style.visibility="hidden";
} 

function mostrarCaja(caja)
{
    caja.style.visibility="visible";
}

function mostrarResultados()
{
    let ventanaresultado = open("resultados.html", "Resultados", "width=300, height=100, top=750, left=1200");

}


function finalizarContador(contador)
{
    clearInterval(contador);
    mostrarResultados();
}

function mostrarTiempo(){
    segundo++;
    contador.innerHTML=segundo;
   
}

function iniciarCuentaAtras()
{
    segundo=0;
    intervalo = setInterval(mostrarTiempo,1000,segundo);
    fin=setTimeout(finalizarContador,60000,intervalo);
}

function pararTiempo() 
{   
    clearInterval(fin);
    finalizarContador(intervalo);            
}

function inicializarPagina()
{
    ocultarCaja(preguntas);    
}

function comenzarConcurso()
{
    mostrarCaja(preguntas);
    iniciarCuentaAtras();
}