//! setTimeout()
//? Syntax => setTimeout(callbackFun , time(milliseconds))

let timer = setTimeout(()=>{
    console.log("Hello world!");
},2000);
//!clearTimeout(timerID)
// clearTimeout(timer)

// //! setInterval() =>
//     //? setInterval(callbackFun,time(ms))
// let i=1;
// let timeInterval = setInterval(()=>{
//     console.log("Task-",i++);   
// },1);
// //! clearInterval(timerID)
// clearInterval(timeInterval)
