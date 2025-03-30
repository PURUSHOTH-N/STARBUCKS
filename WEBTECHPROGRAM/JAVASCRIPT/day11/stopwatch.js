let counter = 10;

let interval = setInterval(()=>{
    console.log(counter);
    counter--;

    if(counter<0){
        console.log("Boom💥");
        clearInterval(interval);
    }
},1000)