//PROMISES FOR ASYNCHRONOUS
const promiseOne = new Promise((resolve, reject) => {
    console.log("Promise task 1");
    resolve("promises passed using resolve");
    let msg = false;
    if (!msg) {
        console.log("message using promises failed");
    }
    else {
        console.log("--------error-------");
    }
    setTimeout(() => {      //setTimeout() is also asynch
        console.log("waited for 2 sec");
    }, 2000)
});
promiseOne.then((result) => {
    console.log("result");
}).catch((error) => {
    console.log(error);
})

// Assyn /await
console.log("1");
async function test(){
    console.log("2");
    await console.log("3");
    console.log("4");
async function test(){;
console.log("5");
}
test();
}


// t1=test();
// console.assertlog("5");
// create promises that will prirnt username and password usin and if username and password not found then it will call rehect state and print ERROR...
new Promise((resolve,reject)=>{
setTimeout(function(){
let err=true;
if(!err){
    resolve(" user:ABC,password:1233");
}else{
    reject("ERROR..:daata fail");
} 
},2000);
});
Promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    async function test(){
        console.log("message:2");
        fetch()
    }
    test()

    test().then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})