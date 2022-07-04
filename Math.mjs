import { SmE } from "./SmE.js";
let M = {abs: (function(i1){return Math.abs(i1)}),
acos: (function(i1){return Math.acos(i1)}),
acosh: (function(i1){return Math.acosh(i1)}),
asin: (function(i1){return Math.asin(i1)}),
asinh: (function(i1){return Math.asinh(i1)}),
atan: (function(i1){return Math.atan(i1)}),
atan2: (function(i1,i2){return Math.atan2(i1,i2)}),
atanh: (function(i1){return Math.atanh(i1)}),
cbrt: (function(i1){return Math.cbrt(i1)}),
ceil: (function(i1){return Math.ceil(i1)}),
clz32: (function(i1){return Math.clz32(i1)}),
cos: (function(i1){return Math.cos(i1)}),
cosh: (function(i1){return Math.cosh(i1)}),
e: Math.E,
exp: (function(i1){return Math.exp(i1)}),
expm1: (function(i1){return Math.expm1(i1)}),
floor: (function(i1){return Math.floor(i1)}),
fround: (function(i1){return Math.fround(i1)}),
hypot: (function(l1){return Math.hypot(l1)}),
mul: (function(i1,i2){return Math.imul(i1,i2)}),
ln10: Math.LN10,
ln2: Math.LN2,
log: (function(i1){return Math.log(i1)}),
log10: (function(i1){return Math.log10(i1)}),
log1p: (function(i1){return Math.log1p(i1)}),
log2: (function(i1){return Math.log2(i1)}),
log2e: Math.LOG2E,
max: (function(l1){return Math.max(l1)}),
min: (function(l1){return Math.min(l1)}),
pi: Math.PI,
pow: (function(i1,i2){return Math.pow(i1,i2)}),
rand: (function(i1){return Math.random(i1)}),
round: (function(i1){return Math.round(i1)}),
sign: (function(i1){return Math.sign(i1)}),
sin: (function(i1){return Math.sin(i1)}),
sinh: (function(i1){return Math.sinh(i1)}),
sqrt: (function(i1){return Math.sqrt(i1)}),
sqrt1_2: Math.SQRT1_2,
sqrt2: Math.SQRT2,
tan: (function(i1){return Math.tan(i1)}),
tanh: (function(i1){return Math.tanh(i1)}),
trunc: (function(i1){return Math.trunc(i1)}),
pls: (function(i1,i2){return i1+i2}),
ms: (function(i1,i2){return i1-i2}),
mul: (function(i1,i2){return i1*i2}),
div: (function(i1,i2){return i1/i2}),
rto: (function(min,max){return Math.floor(Math.random() * (max - min + 1)) + min}),
mod: (function(i,d){return i%d}),
sm: (function(eq){return SmE(eq)})
};
console.log(M.sm("5*5"));