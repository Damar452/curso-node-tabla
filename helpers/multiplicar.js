const fs = require("fs");


const crearArchivo = async (base = 5, hasta= 10, listar) => {

  try {
    let salida = "";
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} =  ${base * index}\n`;
    }

    listar && console.log(salida);

    const name = `./outputs/Tabla-${base}.txt`;
    fs.writeFileSync(name, salida);

    return name;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
