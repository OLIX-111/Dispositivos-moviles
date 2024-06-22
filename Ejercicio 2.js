// Clase base Vehículo
class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    descripcion() {
        return `${this.marca} ${this.modelo} del año ${this.año} de color ${this.color}`;
    }

    arrancar() {
        return `El ${this.modelo} está arrancando`;
    }

    detener() {
        return `El ${this.modelo} está detenido`;
    }
}

// Clase Coche que hereda de Vehículo
class Coche extends Vehiculo {
    constructor(marca, modelo, año, color, numPuertas) {
        super(marca, modelo, año, color);
        this.numPuertas = numPuertas;
    }

    tocarBocina() {
        return `El coche ${this.modelo} está tocando la bocina`;
    }
}

// Clase Moto que hereda de Vehículo
class Moto extends Vehiculo {
    constructor(marca, modelo, año, color, tipo) {
        super(marca, modelo, año, color);
        this.tipo = tipo;
    }

    calibrar() {
        return `La moto ${this.modelo} está calibrada`;
    }
}

// Crear 2 objetos de la clase Coche
const coche1 = new Coche("Toyota", "Corolla", 2020, "rojo", 4);
const coche2 = new Coche("Honda", "Civic", 2021, "azul", 4);

// Crear 2 objetos de la clase Moto
const moto1 = new Moto("Yamaha", "YZF-R3", 2019, "negro", "deportiva");
const moto2 = new Moto("Harley-Davidson", "Iron 883", 2020, "gris", "crucero");

// Mostrar descripciones y métodos
console.log(coche1.descripcion());
console.log(coche1.arrancar());
console.log(coche1.tocarBocina());

console.log(coche2.descripcion());
console.log(coche2.arrancar());
console.log(coche2.tocarBocina());

console.log(moto1.descripcion());
console.log(moto1.arrancar());
console.log(moto1.calibrar());

console.log(moto2.descripcion());
console.log(moto2.arrancar());
console.log(moto2.calibrar());
