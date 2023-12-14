var selectletter = "";
var acciones = [];
var movimientos = [];
var pos = 0;

async function editar(op) {

   
    selectletter = op;
    


  
}

function gano(par) {
  if (par == 3) {
    document.getElementById("res").innerHTML +=
      "Gano:  " + selectletter+'<br>';
    blanquear();
  }
}
function blanquear() {
  acciones = [];
  for (let index = 1; index < 10; index++) {
    document.getElementById("num" + index).innerHTML = " ";
  }
}

function nowin() {
  var contar = 0;
  for (let index = 1; index < 10; index++) {
    if (acciones[index] == "X" || acciones[index] == "O") {
      contar++;
    }
  }

  if (contar == 9) {
    document.getElementById("last").innerHTML += "No hubo Ganador <br> ";
    blanquear();
  }
}

function tiro() {
  if (movimientos[pos] == selectletter) {
    alert("No puedes volver a DAR");
    return 1;
  } else {
    return 0;
  }
}

function marcar(num) {
  var valtiro = tiro();

  if (selectletter == "") {
    alert("Seleccione un Valor");
  } else {
    if (valtiro != 1) {
      let mark = (document.getElementById("num" + num).innerHTML =
        "<h1>" + selectletter + "</h1>");

      acciones[num] = selectletter;
      nowin();
      console.log(acciones);

      var horizontalez = [];
      horizontalez[0] = [1, 2, 3];
      horizontalez[1] = [4, 5, 6];
      horizontalez[2] = [7, 8, 9];
      var valor = verificar(horizontalez, 3);

      var verticales = [];
      verticales[0] = [1, 4, 7];
      verticales[1] = [2, 5, 8];
      verticales[2] = [3, 6, 9];
      valor = verificar(verticales, 3);

      var lado = [];
      lado[0] = [1, 5, 9];
      lado[1] = [3, 5, 7];
      var valor = verificar(lado, 2);

      pos++;

      movimientos[pos] = selectletter;
    }
  }
}

function verificar(param, numi) {
  for (let index = 0; index < numi; index++) {
    var cuentas = 0;

    for (let i = 0; i < 3; i++) {
      var numero = param[index][i];
      var asign = "";
      asign = acciones[numero];

      if (asign == selectletter) {
        cuentas++;
      }

      if (cuentas == 3) {
        acciones = [];
        console.log(acciones);
        gano(cuentas);
        break;
      }
    }
  }
}
