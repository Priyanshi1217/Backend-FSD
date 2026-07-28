// Synchromous:blocking js and asynchromous:nonblocking js
// we'll use asynchromous js
console.log("task 3");
function hello(){
    console.log("task 2");
}
hello();
console.log("task 1");
setTimeout(function(){
    // Isse function 2-3 sec late load ho rha h
console.log("task4");
},2000)

// callback:passed as an argument to another function and call
function hello(n1,n2){
    console.log("task1");
    return n1+n2;
}
let a=10;
let b =20;
console.log(hello(a,b));
hello(a,b,hi);
hello(a,b,demo);
function hi(){
    console.log("sayhi");
}
hi();
function demo(){
    console.log("demo");
}
demo();