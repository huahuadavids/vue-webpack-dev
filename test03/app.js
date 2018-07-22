import add from "./add.js"
console.log(add(1,2))
console.log("app")



/**
 * @会有2个chunk文件。因为是异步加载的
 */
require(["./minus"],function(minus){
    console.log(minus(2,1))
})