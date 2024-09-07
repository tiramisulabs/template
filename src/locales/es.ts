import English from "./en";

export default {
    hello: "Hola, mundo!",
    foo: {
        bar: "Puedes anidar objetos para crear un archivo de idioma más complejo",
        baz: () => `Puedes usar funciones para pasar variables a la traducción y agregar lógica`,
        ping: ({ ping }) => `El ping es ${ping}`
    },
    qux: [
        "También puedes usar arrays para crear una lista de traducciones",
        "Este es el segundo elemento de la lista"
    ].join("\n")
} satisfies typeof English; 