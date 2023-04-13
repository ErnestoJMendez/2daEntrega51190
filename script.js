//array donde almaceno las garantias
/*puse unas garantias dentro del array de base porque me complicaba mucho cada vez que iniciaba el programa cargar una para hacer pruebas*/
const garantias =[
  {nombreCliente: 'Ernesto Mendez', patenteVehiculo: 'ab497by', fechaCompra: '10/02/2023', modeloBateria: 'm22ed', marcaBateria: 'moura'},{nombreCliente: 'Juan Perez', patenteVehiculo: 'aaa000', fechaCompra: '10/02/2015', modeloBateria: 'ub730', marcaBateria: 'willard'}]

// Funcion ingreso de garantias
function ingresarGarantia() {
  const garantia = {
    nombreCliente: prompt("Ingrese el nombre y apellido del cliente:"),
    patenteVehiculo: prompt("Ingrese la patente del vehículo:"),
    fechaCompra: prompt("Ingrese la fecha de compra:"),
    modeloBateria: prompt("Ingrese el modelo de la batería:"),
    marcaBateria: prompt("Ingrese la marca de la batería:")
  };

  garantias.push(garantia);
  alert("Garantía ingresada.");
}

//funcion para consultar garantias
function consultarGarantia() {
  const patente = prompt("Ingrese la patente del vehículo a consultar");

  const garantiaEncontrada = garantias.find(garantia => garantia.patenteVehiculo === patente);

  if (garantiaEncontrada) {
    alert(`Nombre: ${garantiaEncontrada.nombreCliente}\nPatente: ${garantiaEncontrada.patenteVehiculo}\nFecha de compra: ${garantiaEncontrada.fechaCompra}\nModelo de batería: ${garantiaEncontrada.modeloBateria}\nMarca de batería: ${garantiaEncontrada.marcaBateria}`);
  } else {
    alert("No se encontró una garantía con la patente ingresada.");
  }
}

// Función para editar una garantía
function editarGarantia() {
  const patente = prompt("Ingrese la patente del vehículo a editar:");

  const garantiaEncontrada = garantias.find(garantia => garantia.patenteVehiculo === patente);

  if (garantiaEncontrada) {
    garantiaEncontrada.nombreCliente = prompt("Ingrese el nuevo nombre del cliente:", garantiaEncontrada.nombreCliente);
    garantiaEncontrada.fechaCompra = prompt("Ingrese la nueva fecha de compra:", garantiaEncontrada.fechaCompra);
    garantiaEncontrada.modeloBateria = prompt("Ingrese el nuevo modelo de la batería:", garantiaEncontrada.modeloBateria);
    garantiaEncontrada.marcaBateria = prompt("Ingrese la nueva marca de la batería:", garantiaEncontrada.marcaBateria);

    alert("Garantía editada con éxito.");
  } else {
    alert("No se encontró una garantía con la patente ingresada.");
  }
}

//ciclo para mostrar menu de opciones
while (true) {
  const opcion = prompt("Seleccione el numero de opcion\n1 Ingresar nueva garantia.\n2 Consultar garantia.\n3 Modificar garantia");

  switch (opcion) {
    case "1":
      ingresarGarantia();
      break;
    case "2":
      consultarGarantia();
      break;
    case "3":
      editarGarantia();
      break;
    default:
      alert("Opción inválida. Por favor, seleccione una opción válida.");
      break;
  }
}