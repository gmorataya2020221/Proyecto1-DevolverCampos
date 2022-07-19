console.log("Hola desde TS!");
function keysAndValues(input) {
    if (input === void 0) { input = {}; }
    var keys = Object.keys(input);
    keys.sort();
    var values = [];
    keys.map(function (key) { values.push(input[key]); });
    return [keys, values];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ b: "Apple", a: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key3: true, key2: false, key1: undefined }));
console.log(keysAndValues({}));
console.log(keysAndValues());
