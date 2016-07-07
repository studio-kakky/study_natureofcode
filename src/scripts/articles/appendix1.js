// Math.random vs p5.random


var container1;
var container2;
var h;
var p;
var tnode;


var startTime;
var currentTime;


container1 = document.createElement("div");
h = document.createElement("h3");

tnode = document.createTextNode("Math.random")
h.appendChild(tnode);

container1.appendChild(h);
document.body.appendChild( container1 );



container2 = document.createElement("div");
h = document.createElement("h3");

tnode = document.createTextNode("p5.random")
h.appendChild(tnode);

container2.appendChild(h);
document.body.appendChild( container2 );


var counter = 0;
startMathRandom();

function startMathRandom(){
  counter++;
  if( counter <= 10){
    setTimeout(doMathRandom,500);
  }else{
    counter = 0;
    startP5Random()
  }

}

function startP5Random(){
  counter++;
  if( counter <= 10){
    setTimeout(doP5Random,500);
  }
}

function doMathRandom(){
  startTime = new Date();

  for( var n = 0; n < 100000000; n++){
      Math.random();
  }

  currentTime = new Date();

  p = document.createElement('p');
  tnode = document.createTextNode((counter)+ "回目 : " + ( (currentTime - startTime )/1000 ) +"sec" );
  p.appendChild( tnode );
  container1.appendChild(p);
  startMathRandom();

}

function doP5Random(){

   startTime = new Date();

  for( var n = 0; n < 100000000; n++){
      p5.prototype.random();
  }

  currentTime = new Date();

  p = document.createElement('p');
  tnode = document.createTextNode((counter)+ "回目 : " + ( (currentTime - startTime )/1000 ) +"sec" );
  p.appendChild( tnode );
  container2.appendChild(p);
  startP5Random();
}
