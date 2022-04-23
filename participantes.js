var idImagenes = [];
idImagenes["samuel"] = "https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/161432833_102932598551242_7090641754533412937_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lPlQK02uAgQAX_L7zOS&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8bz-FS_cpoXqGkR_CqikIE8ffiGsj9xOxYlJ3QWAGyKA&oe=6287078A";
idImagenes["josue"] = "./imagen2.jpeg";
idImagenes["Emilio"] = "./imagen1.jpeg";
idImagenes["Sanchez"] = "https://s1.zerochan.net/Donquixote.Doflamingo.600.2313934.jpg";
idImagenes["Cesar"] = "./WhatsApp Image 2022-04-19 at 10.02.37 PM.jpeg";

var puntajeSamuel = 4200 + 0;
var puntajeJosue = 5859 + 0;
var puntajeEmilio = 4824 + 0;
var puntajeSanchez = 0;
var puntajeCesar = 3710 + 0;

var puntajes = [];
puntajes["samuel"] = puntajeSamuel;
puntajes["josue"] = puntajeJosue;
puntajes["Emilio"] = puntajeEmilio;
puntajes["Sanchez"] = puntajeSanchez;
puntajes["Cesar"] = puntajeCesar;

var partidasGanadas = [];
partidasGanadas["samuel"] = 1;
partidasGanadas["josue"] = 1;
partidasGanadas["Emilio"] = 1;
partidasGanadas["Sanchez"] = 0;
partidasGanadas["Cesar"] = 1;

// funcion que imprima por consola el puntaje total del personaje con su nombre
function imprimirPuntaje(nombre, puntajeGanador) {
    console.log(nombre + ": " + puntajeGanador);
}

class participante {
    constructor(id, n, cN) {
        this.imagen = new Image();
        this.id = id;
        this.name = n;
        this.characterName = cN;
        this.puntos = puntajes[this.name];
        this.victorias = partidasGanadas[this.name];
        this.imagen.src = idImagenes[this.name];
        this.puntajeTotal = this.puntos + (this.victorias * 5000);
    }
    mostrar(){
      document.body.appendChild(this.imagen);
      document.write("<br>");
      document.write("<strong>" + this.id + "</strong>");
      document.write(") Nombre: " + this.characterName + " <br>");
      document.write("Score en competencias: " + this.puntos + "<br> ");
      document.write("Numero de victorias: " + this.victorias + "<br> ");
      imprimirPuntaje(this.name, this.puntajeTotal);
      document.write("Puntaje total: " + this.puntajeTotal + "<br> ");
      document.write("</p>");
      document.write("<hr />");
    }
}


var participante1 = new participante(01, "samuel", "AOKAMYA",);
var participante2 = new participante(02,"josue", "Empanada2");
var participante3 = new participante(03, "Emilio", "Emilio_OP");
var participante4 = new participante(04, "Sanchez", "Joaovitor");
var participante5 = new participante(05, "Cesar", "Baki");

var participantes = [];
participantes.push(participante1);
participantes.push(participante2);
participantes.push(participante3);
participantes.push(participante4);
participantes.push(participante5);

for (data of participantes) {
    data.mostrar();
}
