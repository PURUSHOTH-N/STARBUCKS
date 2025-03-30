console.log("Desctruction in Javascript");

//! 1.Array destucting

let movies = ["KGF","VadaChennai","AO","Interstellar","V1000","nsa"]
console.log(movies);
console.log(movies[3]);

//? destructure
let [a,b,c,d,e,f] = movies;
console.log(d);
console.log(f);

//! 2.Objects Destructuring
let hero ={
    name:"Ajith",
    age: 53,
    job:"Actor",
};
console.log(hero);
console.log(hero.name);


//? destructure
let{name,age,job} = hero;
console.log(name);
console.log(age);








