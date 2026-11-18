import os from "os"
import express from "express"
import {arr , even} from "./modules.js"

console.log(arr)
console.log(even)

let r = even(10)
console.log(r)
let y = even(9)
console.log(y)
console.log(os.cpus())
console.log(os.totalmem())
console.log(express)