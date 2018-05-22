// function seleccion(){
//   const selected = parseInt(event.srcElement.id,10);
//   const azar = Math.ceil(Math.random() * 3);
//
//   if (selected === azar) {
//     alert("Empataste con la máquina!");
//   } else if (selected===1 && azar=== 2) {
//     alert("Gana la máquina!");
//   } else if (selected === 1 && azar === 3){
//     alert("Jugador 1 gana!");
//   } else if (selected === 2 && azar === 1){
//     alert("Jugador 1 gana!");
//   } else if (selected === 2 && azar === 3) {
//     alert("Gana la máquina!");
//   } else if(selected === 3 && azar === 1){
//     alert("Gana la máquina!");
//   } else if (selected === 3 && azar === 2){
//     alert("Jugador 1 gana!");
//   }
//
// }


let selected = (id) => {
   return parseInt(id,10);
}

let azar = () => {
  return Math.ceil(Math.random() * 3);
}

let compare  = (selected, azar) => {
  let msg = '';

  if (selected === azar) {
    msg = "Empataste con la máquina!";
  } else if (selected===1 && azar=== 2) {
      msg = "Gana la máquina!";
  } else if (selected === 1 && azar === 3){
      msg = "Jugador 1 gana!";
  } else if (selected === 2 && azar === 1){
      msg = "Jugador 1 gana!";
  } else if (selected === 2 && azar === 3) {
      msg = "Gana la máquina!";
  } else if(selected === 3 && azar === 1){
      msg = "Gana la máquina!";
  } else if (selected === 3 && azar === 2){
      msg = "Jugador 1 gana!";
  }
  return msg;
}

module.exports = {
  azar,
  compare,
  selected
}
