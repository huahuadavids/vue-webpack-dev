import "babel-polyfill"
const a = 1;
const b = {
    name : "hauhau"
}
const {name} = b;
console.log(name)
const c = new Set();
const d =  ()=> {
    console.log(1111)
}
d()
const e = [1,2,3]
const [ee, ...aa] = e;
console.log(aa)