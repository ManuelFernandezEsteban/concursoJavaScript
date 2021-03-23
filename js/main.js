const preguntas = document.getElementById("preguntas");
const contador = document.getElementById("contador");
var intervalo;
var fin;
var segundo;
var numeros;
var esCorrectaNumeros, esCorrectaFecha;

function ocultarCaja(caja)
{
    caja.style.visibility="hidden";
} 

function limpiarInputs()
{
    document.getElementById("respuestaHoras").value="";
    document.getElementById("respuestaNumeros").value="";
}

function comprobarRespuestas()
{
    let respuestaNumeros = parseInt(document.getElementById("respuestaNumeros").value);
    let respuestaHoras = parseInt(document.getElementById("respuestaHoras").value);
    let mayor=0;
    
    if (!isNaN(respuestaNumeros))
    {        
        for (x in numeros)
        {  
            alert(numeros[x]);          
            if (mayor<numeros[x])
            {
                 mayor=numeros[x];
                 alert(mayor);
            }
        }
        if (respuestaNumeros==mayor) esCorrectaNumeros=true;
    }
    if (esCorrectaNumeros)
    {
        alert("correcta");
    }
    else
    {
        alert("incorrecta");
    }
}

function mostrarCaja(caja)
{
    let x,y,z;
    let numero1=document.getElementById("numero1");
    let numero2=document.getElementById("numero2");
    let numero3=document.getElementById("numero3");
    numeros=new Array();
    x=generarAleatorios();
    y=generarAleatorios();
    z=generarAleatorios();
    numeros=new Array(x,y,z);
    numero1.innerHTML=x;
    numero2.innerHTML=y;
    numero3.innerHTML=z;


    caja.style.visibility="visible";
}

function mostrarResultados()
{
    //let ventanaresultado = open("resultados.html", "Resultados", "width=300, height=100, top=750, left=1200");

}

function generarAleatorios()
{
    return (Math.floor(Math.random()*100)+1);

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
    fin=setTimeout(pararTiempo,60000,intervalo);
}

function pararTiempo() 
{   
    clearInterval(fin);
    finalizarContador(intervalo);  
    comprobarRespuestas();
    document.getElementById("botonEmpezar").disabled=false;   
           
}

function inicializarPagina()
{
    ocultarCaja(preguntas);    
}

function comenzarConcurso()
{
    limpiarInputs();
    mostrarCaja(preguntas);
    iniciarCuentaAtras();
    document.getElementById("botonEmpezar").disabled=true;
    esCorrectaNumeros=false;
    esCorrectaFecha=false;
}