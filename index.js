import * as fs from 'node:fs';

function crearDoc(arr, tipoDato) {
    const tiposDatosValidos = [
        "boolean",
        "number",
        "string",
        "undefined",
        "symbol"
    ]
    let comparar = (a, b) => {return a-b};

    let tipoDatoParam = tiposDatosValidos.find(el => el === tipoDato);
    if(tipoDatoParam == null){
        throw new Error("El tipo de dato solicitado no es valido");
    } else {
        let newArray = [];
        if(tipoDato === "string"){
            newArray = arr.filter(el => typeof(el) === tipoDatoParam).sort();
        } else {
            newArray = arr.filter(el => typeof(el) === tipoDatoParam).sort(comparar);
        }
        //eliminar repetidos
        const newArrayEliminarDups = [];
        newArray.forEach(element => {
            if(!newArrayEliminarDups.find(el => el === element)){
                newArrayEliminarDups.push(element)
            }
        });

        const newFile = fs.writeFileSync("nuevo.txt", newArrayEliminarDups.join(","))
    }

}

const lista = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false];
let tipo = "string";
try {
    crearDoc(lista,tipo);
} catch (error) {
    console.log(error)
}