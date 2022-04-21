var idImagenes = [];
idImagenes["samuel"] = "https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/161432833_102932598551242_7090641754533412937_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lPlQK02uAgQAX_L7zOS&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8bz-FS_cpoXqGkR_CqikIE8ffiGsj9xOxYlJ3QWAGyKA&oe=6287078A";
idImagenes["josue"] = "./imagen2.jpeg";
idImagenes["Emilio"] = "./imagen1.jpeg";

var puntajeSamuel = 0;
var puntajeJosue = 0;
var puntajeEmilio = 0;

var puntajes = [];
puntajes["samuel"] = puntajeSamuel;
puntajes["josue"] = puntajeJosue;
puntajes["Emilio"] = puntajeEmilio;


class participante {
    constructor(id, n, cN, p) {
        this.imagen = new Image();
        this.id = id;
        this.name = n;
        this.characterName = cN;
        this.puntos = puntajes[this.name];
        this.imagen.src = idImagenes[this.name];
    }
    mostrar(){
      document.body.appendChild(this.imagen);
      document.write("<p>");
      document.write("<strong>" + this.id + "</strong>");
      document.write(") Nombre: " + this.characterName + " <br>");
      document.write("Puntaje en competencias: " + this.puntos + " ");
      document.write("</p>");
      document.write("<hr />");
    }
}


var participante1 = new participante(01, "samuel", "AOKAMYA",);
var participante2 = new participante(02,"josue", "Empanada2");
var participante3 = new participante(03, "Emilio", "Emilio_OP");

var participantes = [];
participantes.push(participante1);
participantes.push(participante2);
participantes.push(participante3);

for (data of participantes) {
    data.mostrar();
}

