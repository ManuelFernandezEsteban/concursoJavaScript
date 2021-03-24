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
    let ahora = Date.now();
    let fecha= new Date(ahora);
    let respuestaNumeros = parseInt(document.getElementById("respuestaNumeros").value);
    let respuestaHoras = parseInt(document.getElementById("respuestaHoras").value);
    let mayor=0;    
    if (!isNaN(respuestaNumeros))
    {        
        for (x in numeros)
        {                        
            if (mayor<numeros[x])
            {
                mayor=numeros[x];                 
            }
        }
        if (respuestaNumeros==mayor) esCorrectaNumeros=true;
    }
    if (!isNaN(respuestaHoras))
    {        
        let year = fecha.getFullYear();
        let mes = fecha.getMonth();
        let dia = fecha.getDate();
        alert(year+"/"+mes+"/"+dia);
        let fechaInicial = new Date(1970,mes,dia);
        let fechaFin = new Date(year,mes,dia);
        let solucion = ((((fechaFin.getTime()-fechaInicial.getTime())/1000)/60)/60);
        alert(fechaInicial.getTime()+" "+fechaFin.getTime()+" "+solucion);
        if (respuestaHoras==solucion)
        {
            esCorrectaFecha=true;
        }
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