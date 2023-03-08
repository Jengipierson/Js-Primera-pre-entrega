let CostoDelProducto;

validarCostoDelProducto();

let respuesta = prompt(
  "el valor del producto es de: " + CostoDelProducto + ". Es correcto?"
);

respuesta = respuesta.toUpperCase();

validarRespuestaDelPrecio();

// FUNCIONES

function validarCostoDelProducto() {
  while (isNaN(CostoDelProducto) || CostoDelProducto <= 0) {
    CostoDelProducto = prompt("ingrese el valor del producto.");

    if (isNaN(CostoDelProducto)) {
      alert("ingrese numero valido.");
    } else if (CostoDelProducto <= 0) {
      alert("El numero debe ser mayor a cero.");
    }
  }
}

function validarRespuestaDelPrecio() {
  while (respuesta != "Si" && respuesta != "NO") {
    alert(
      "este campo debe completarse con si o no,presionar aceptar e ingresar su nueva respuesta."
    );

    respuesta = prompt(
      "el valor del prodcuto es de: " + CostoDelProducto + ".es correcto?"
    );

    respuesta = respuesta.toUpperCase();
  }
}
