// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array corregido, ordenado y con tiempos precisos en segundos
var lyricsData = [
  { text: "Te vi llegar del brazo de un amigo", time: 36 },
  { text: "Cuando entraste al bar y te caíste al piso", time: 40 },
  { text: "Me tiraste el pingüino, me tiraste el sifón", time: 44 },
  { text: "Estallaron los vidrios de mi corazón", time: 48 },
  { text: "Te vi bailar, brillando con tu ausencia", time: 53 },
  { text: "Sin sentir piedad, chocando con las mesas", time: 56 },
  { text: "Te burlaste de todos, te reíste de mí", time: 61 },
  { text: "Tus amigos se escaparon de vos", time: 66 },
  
  // Primer Estribillo
  { text: "Y a mí me volvió loco tu forma de ser", time: 69 },
  { text: "A mí me volvió loco tu forma de ser", time: 74 },
  { text: "Tu egoísmo y tu soledad", time: 78 },
  { text: "Son estrellas en la noche de la mediocridad", time: 83 },
  { text: "Me vuelve loco tu forma de ser", time: 86 },
  { text: "A mí me volvió loco tu forma de ser", time: 91 },
  { text: "Tu egoísmo y tu soledad", time: 96 },
  { text: "Son joyas en el barro de la mediocridad", time: 100 },
  
  // Tercera Estrofa
  { text: "Viniste a mí, tomaste de mi copa", time: 138 },
  { text: "Me sonreíste así, nadando en tu demencia", time: 142 },
  { text: "No sabía que hacer, te traté de besar", time: 146 },
  { text: "Me pegaste un sopapo y te pusiste a llorar", time: 151 },
  
  // Segundo Estribillo / Cierre
  { text: "Me vuelve loco tu forma de ser", time: 155 },
  { text: "A mí me volvió loco tu forma de ser", time: 158 },
  { text: "Tu egoísmo y tu soledad", time: 163 },
  { text: "Son estrellas en la noche de la mediocridad", time: 168 },
  { text: "Me vuelve loco tu forma de ser", time: 172 },
  { text: "A mí me volvió loco tu forma de ser", time: 175 },
  { text: "Tu egoísmo y tu soledad", time: 180 },
  { text: "Son joyas en el barro de la mediocridad", time: 185 },
  { text: "Y a mí me volvió loco tu forma de ser", time: 221 },
  { text: "Me vuelve loco tu forma de ser", time: 226 },
  { text: "Tu egoísmo y tu soledad", time: 230 },
  { text: "Son estrellas en la noche de la mediocridad", time: 235 },
  { text: "Me vuelve loco tu forma de ser", time: 238 },
  { text: "A mí me volvió loco tu forma de ser", time: 242 },
  { text: "Tu egoísmo y tu soledad", time: 247 },
  { text: "Son joyas en el barro de la mediocridad", time: 251 },
];

// Animar las letras
function updateLyrics() {
  // Usar currentTime con decimales ayuda a que la sincronización sea más fluida
  var time = audio.currentTime; 
  
  var currentLine = lyricsData.find(
    (line, index) => {
      var nextLine = lyricsData[index + 1];
      // Si hay una siguiente línea, la actual dura hasta que empiece la siguiente. 
      // Si es la última, le damos un margen de 5 segundos.
      var endTime = nextLine ? nextLine.time : line.time + 5;
      return time >= line.time && time < endTime;
    }
  );

  if (currentLine) {
    var fadeInDuration = 0.3; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualizar cada 100 milisegundos (0.1s) en vez de cada 1000ms (1s) 
// para que la transición de opacidad y aparición responda al instante.
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 216000);