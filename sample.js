var message = "Updated";
var d = new Date();
console.log("date Updated : ", d);
console.log("message :", message);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log(" call the function");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var str = 1;
var str2 = str; //str is now of type number
console.log(typeof str2);
// new code //
var global_num = 12; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable
    };
    Numbers.sval = 10; //static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable
var newobj = new Numbers();
console.log("newobj.num_val : " + newobj.num_val);
var test = new Numbers();
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
var day = 4;
switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
var x = 10, y = 5;
switch (x) {
    case 0:
        console.log("Result: 0");
        break;
    case 5:
        console.log("Result: 5");
        break;
    case 10:
        console.log("Result: 10");
        break;
}
console.log("switch :", day);
console.log("switch x :", x);
console.log("switch y :", y);
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.MAX_VALUE;
    console.log("Month is " + month);
}
else {
    console.log("Value Accepted..");
}
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + typeof emp.id);
console.log("Employee's name: " + typeof emp.name);
console.log("Employee's Email ID: " + typeof emp.email);
//toExponential()
var num1 = 1225.3;
var val = num1.toExponential();
console.log("val: ", typeof val);
// TypeScript - String Constructor Property
var teststr = new String("This is string");
console.log("str.constructor is:" + teststr.constructor);
