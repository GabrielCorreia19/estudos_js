function testandoSwitch(nota) {
  switch (Math.ceil(nota)) {
    case 9:
    case 10:
      console.log("Miserável");
      break;
    case 7:
    case 8:
      console.log("Boa");
      break;
    case 6:
    case 5:
    case 4:
      console.log(`Recu recu ${nota}`);
      break;
    case 1:
    case 2:
    case 3:
      console.log(`Ai voce me fudeu pai ${nota}`);
      break;
    default:
      console.log("Nada");
  }
}

testandoSwitch(7);
testandoSwitch(9);
testandoSwitch(10);
testandoSwitch(4);
testandoSwitch(6);
testandoSwitch(1);
testandoSwitch(2312);
testandoSwitch(9.6);
