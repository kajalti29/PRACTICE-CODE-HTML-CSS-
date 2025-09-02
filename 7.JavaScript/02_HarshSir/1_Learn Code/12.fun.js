// //Variable me store karna function ko
// let greet = function(){
//     console.log("Hello!");
// }
// greet();

// Function inside Object(Method)

let person = {
    name : "kajalti",
    sayHello : function(){
        console.log("Hello" + this.name);
    }
};
person.sayHello();