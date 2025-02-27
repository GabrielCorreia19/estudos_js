function tratarErrorELancar(e) {
  throw new Error("Erro ao tratar o erro");
}

function imprimitNomeGritando(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErrorELancar(e);
  } finally {
    console.log("Fim");
  }
}

const obj = { name: "Pedro" };
imprimitNomeGritando(obj);
