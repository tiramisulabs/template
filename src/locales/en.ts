export default {
    hello: "Each key value pair will be the translation for the key",
    foo: {
        bar: "You may nest objects to create a more complex language file",
        baz: () => `You may also use functions to pass variables to the translation and add some logic`,
        ping: ({ ping }: { ping: number }) => `The ping is ${ping}`
    },
    qux: [
        "You may also use arrays to create a list of translations",
        "This is the second item in the list"
    ].join("\n")
}