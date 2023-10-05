// Clase Personaje
class Astronauta {
    constructor() {
      this.posicion = { x: 0, y: 0 };
      this.salud = 100;
      this.nivelOxigeno = 100;
      this.arma = null;
      this.mochilasPropulsores = 3;
    }
  
    moverse(x, y) {
      this.posicion.x = x;
      this.posicion.y = y;
    }

    atacar(enemigo) {
        // Lógica de combate
    }

    ganarExperiencia(experienciaGanada) {
        this.experiencia += experienciaGanada;
        // Lógica para subir de nivel si es necesario
    }
}

// Clase Enemigo
class Enemigo {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }

    recibirAtaque(ataque) {
        // Lógica para recibir daño
    }
}

// Clase Jugador (extiende de Personaje)
class Jugador extends Personaje {
    constructor(nombre, clase) {
        super(nombre, clase, 1, 0);
    }
}

// Aquí puedes agregar más clases de personajes, habilidades, etc.

// Evento de carga de página
document.addEventListener("DOMContentLoaded", () => {
    // Aquí puedes escribir el código para crear y gestionar personajes
});
