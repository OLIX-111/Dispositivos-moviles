// Definición del arreglo de clientes
const clientes = [
  {
    id: 1,
    nombre: "Kervin",
    Apellido: "Cruz",
    edad: 30,
    servicios: [
      { name: "Netflix", status: true },
      { name: "Spotify", status: false }
    ]
  },
  {
    id: 2,
    nombre: "Juan",
    Apellido: "Perez",
    edad: 25,
    servicios: [
      { name: "Netflix", status: false },
      { name: "HBO+", status: false }
    ]
  },
  {
    id: 3,
    nombre: "Bartolo",
    Apellido: "Gimenes",
    edad: 40,
    servicios: [
      { name: "HBO+", status: true },
      { name: "Spotify", status: true }
    ]
  },
  {
    id: 4,
    nombre: "Ana",
    Apellido: "Martínez",
    edad: 35,
    servicios: [
      { name: "Internet", status: false },
      { name: "Cable", status: true }
    ]
  },
  {
    id: 5,
    nombre: "Luis",
    Apellido: "Hernández",
    edad: 28,
    servicios: [
      { name: "Internet", status: true },
      { name: "Telefonía", status: false }
    ]
  }
];

// Función para mostrar los clientes y sus servicios
function mostrarClientes(clientes) {
  clientes.forEach(cliente => {
    console.log(`Cliente ${cliente.name} ${cliente.lastname}:`);
    cliente.services.forEach(service => {
      const estado = service.status ? 'Activo' : 'Inactivo';
      console.log(`- Su servicio ${service.name} está ${estado}.`);
    });
  });
}

// Llamada a la función para mostrar los clientes y sus servicios
mostrarClientes(clientes);
