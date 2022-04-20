var idImagenes = [];
idImagenes["samuel"] = "./WhatsApp Image 2022-04-19 at 10.02.37 PM.jpeg";
idImagenes["josue"] = "./imagen2.jpeg";
idImagenes["Emilio"] = "./imagen1.jpeg";

var puntajeSamuel = 0 + 5;
var puntajeJosue = 0 + 6;
var puntajeEmilio = 0 + 17;

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
      document.write(" Nombre " + this.characterName + " <br>");
      document.write("Puntaje en competencia: " + this.puntos + " ");
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

