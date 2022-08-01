import {flag,sum} from "./aaa.js"

if(flag) {
  console.log('why是天才' )
}

import {num1} from "./aaa.js"
import {height} from "./aaa.js"
console.log(num1);
console.log(height);

//导入export的function
import {mul} from "./aaa.js"
console.log(mul(30,50) )

//导入export default中的内容
import addr from "./aaa.js"
console.log(addr)
addr('hello')

//统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag )
console.log(aaa.mul(10,20) )