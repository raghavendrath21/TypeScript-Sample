"use strict";
exports.__esModule = true;
var demo_1 = require("./demo");
var j;
var n = "a b c";
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("TEST WORKING!!!");
        var test = 'demo';
        console.log("test :", test);
        for (j in n) {
            console.log(n[j]);
            if (n[j] == 'a') {
                console.log("true");
                console.log(n[j]);
            }
            else {
                console.log("false");
            }
        }
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // initialize the static variable 
StaticMem.disp(); // invoke the static method
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log('result :', typeof result);
console.log('num :', typeof num);
console.log('obj :', typeof obj);
var test = new demo_1.Data();
test.username = 'demo';
test.password = 1234;
console.log('test :', test);
