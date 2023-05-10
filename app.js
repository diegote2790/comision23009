class jugador {
    constructor(nombre, edad, equipo, posicion){
        this.nombre = nombre
        this.edad = edad
        this.equipo = equipo
        this.posicion = posicion
    }
}

//instanciamos a los jugadores

let jugador1 = new jugador ("Lionel Messi","xx","Paris Saint Germain","Volante")

//muestro en pantalla

console.log(jugador1)
document.write(jugador1.nombre)