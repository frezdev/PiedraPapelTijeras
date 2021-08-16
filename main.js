/* class Option {
  
  constructor(n, v) {
    this.nombre = n;
    this.valor= v;
  }
  
  mostrar()
  {
    title.innerHTML = ('Tu ' + this.nombre)
  }
}

let opciones = []

opciones.push( new Option("Piedra", 1));
opciones.push( new Option("Papel", 2));
opciones.push( new Option("Tijeras", 3));

*/

var user;
var pc;

var r = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3
};

var botonPiedra = document.getElementById("buttonRock");
var botonPapel = document.getElementById("buttonPaper");
var botonTijera = document.getElementById("buttonScissor");
var reset = document.getElementById("reset");
var play = document.getElementById("play");
var title = document.getElementById("title");
var election = document.getElementById("election");

// Funcion que devuelve un número aleatorio

function aleatorio(min, max)
{
  let numRandom;
  numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
}
/* <-----------------------> */

// Funciones de los Eventos 'click' de los botones 

function rockEvent()
{
  user = r.ROCK;
}

function paperEvent()
{
  user = r.PAPER;
}

function scissorEvent()
{
  user = r.SCISSORS;
}

function reiniciar()
{
  election.innerHTML = ('');
  title.innerHTML = ('Piedra, Papel o Tijeras');
  user = 0;
  pc = aleatorio(1,3);
  console.log(pc);
}

play.addEventListener("click", run);
reset.addEventListener("click", reiniciar);

function run()
{
  
    if(user == pc)
    {
      election.innerHTML = ("Tu oponente eligio lo mismo");
      title.innerHTML = ("Empate!!!");
    }
    else if(user == r.ROCK && pc == r.SCISSORS)
    {
      election.innerHTML = ('Tu oponente eligió Tijeras');
      title.innerHTML = ("GANASTE!!");
    }  
    else if(user == r.SCISSORS && pc == r.PAPER)
    {
      election.innerHTML = ('Tu oponente eligió Papel');
      title.innerHTML = ("GANASTE!!");
    }
    else if(user == r.PAPER && pc == r.ROCK)
    {
      election.innerHTML = ('Tu oponente eligió Piedra');
      title.innerHTML = ("GANASTE!!");
    }
    else
    {
      election.innerHTML = ('');
      title.innerHTML = ("Perdiste :(");
    }
  
  
    botonPiedra.addEventListener("click", rockEvent);
    botonPapel.addEventListener("click", paperEvent);
    botonTijera.addEventListener("click", scissorEvent);
    
  
}

/* <-----------------------> */



// Escuchamos el evento de un botón


/* <-------------------------> */


