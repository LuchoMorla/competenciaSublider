var idImagenes = [];
idImagenes["samuel"] = "https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/161432833_102932598551242_7090641754533412937_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lPlQK02uAgQAX_L7zOS&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8bz-FS_cpoXqGkR_CqikIE8ffiGsj9xOxYlJ3QWAGyKA&oe=6287078A";
idImagenes["josue"] = "./imagen2.jpeg";
idImagenes["Emilio"] = "./imagen1.jpeg";
idImagenes["Sanchez"] = "https://s1.zerochan.net/Donquixote.Doflamingo.600.2313934.jpg";
idImagenes["Cesar"] = "./WhatsApp Image 2022-04-19 at 10.02.37 PM.jpeg";

var puntajeSamuel = 4200 + 6974 + 9751 + 8760 + 3051 + 6257 + 6785 + 8363;
var puntajeJosue = 5859 + 5920 + 6621 + 4986 + 4655 + 5317 + 4189 + 4127 + 4545 + 6165;
var puntajeEmilio = 4824 + 3591 + 3371 + 3456 + 3989 + 3109 + 4316 + 3271 + 5722;
var puntajeSanchez = 0 + 7315 + 5106 + 5779 + 4312 + 5958 + 4758 + 4606 + 5480 + 4893 + 6115;
var puntajeCesar = 3710 + 8761 + 3663 + 1860 + 1403 + 1789 + 4986 + 2396;

var puntajes = [];
puntajes["samuel"] = puntajeSamuel;
puntajes["josue"] = puntajeJosue;
puntajes["Emilio"] = puntajeEmilio;
puntajes["Sanchez"] = puntajeSanchez;
puntajes["Cesar"] = puntajeCesar;

var partidasGanadas = [];
partidasGanadas["samuel"] = 1 + 1 + 1 + 1 + 1 + 1;
partidasGanadas["josue"] = 1 + 1 + 1 + 0 + 0 + 1 + 0 + 1 + 1;
partidasGanadas["Emilio"] = 1 + 0 + 1 + 0 + 0 + 0 + 0 + 0 + 0;
partidasGanadas["Sanchez"] = 0 + 1 + 0 + 1 + 1 + 1 + 1 + 1;
partidasGanadas["Cesar"] = 1 + 1 + 0 + 0 + 1;

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
      document.write('<div>');
      document.write("<br>");
      document.write("<strong>" + this.id + "</strong>");
      document.write(") Nombre: " + this.characterName + " <br>");
      document.write("Score en competencias: " + this.puntos + "<br> ");
      document.write("Numero de victorias: " + this.victorias + "<br> ");
      imprimirPuntaje(this.name, this.puntajeTotal);
      document.write("Puntaje total: " + this.puntajeTotal + "<br> ");
      document.write("</p>");
      document.write("<hr />");
        document.write("</div>");
    }
}


var participante1 = new participante(01, "samuel", "ZombieTM",);
var participante2 = new participante(02,"josue", "Empanada2");
var participante3 = new participante(03, "Emilio", "Emilio_OP | Descalificado");
/* No me molestaria ponerlo en un equipo ganador a emilio */
var participante4 = new participante(04, "Sanchez", "Joaovitor");
var participante5 = new participante(05, "Cesar", "Sakuna");

var participantes = [];
participantes.push(participante1);
participantes.push(participante2);
participantes.push(participante3);
participantes.push(participante4);
participantes.push(participante5);

for (data of participantes) {
    data.mostrar();
}
