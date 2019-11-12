import { Data } from './demo';
var j:any; 
var n:any = "a b c" 

class Greeting {
   greet(): void {
      console.log("TEST WORKING!!!")
      var test = 'demo'
      console.log("test :", test)
for(j in n) {
   console.log(n[j])  
   if(n[j]=='a'){
	 console.log("true")
	   console.log(n[j]) 
   } else{
	   console.log("false")
   }
}

   }

}
var obj = new Greeting();
obj.greet();

class StaticMem {
   static num: number;

   static disp(): void {
      console.log("The value of num is" + StaticMem.num)
   }
}

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()      // invoke the static method
var num: number = -2
var result = num > 0 ? "positive" : "non-positive"
console.log('result :', typeof result)
console.log('num :', typeof num)
console.log('obj :', typeof obj)
let test = new Data()
test.username = 'demo'
test.password = 1234
console.log('test :', test)

