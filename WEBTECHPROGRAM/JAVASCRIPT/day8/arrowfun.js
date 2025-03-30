console.log("Arrow Function")
// Arrow Function -> () =>{}

    //?Creating a Arrow Function
    let arr=()=>{
        console.log("This is Arrow-Function")
    }
    //?Callinng arrow functionn with the help of variable name
    arr();

    // Adding two number with the help of arrow function
    // whenever we providing one parameter there is no need of parenthesis and curly braces
    let addNum = a => console.log(a)
    addNum(10)
    //?if there more than one parameter and statement then you have to use() and {}
    let num=(a,b)=>{
        console.log(a+b)
        console.log(a-b)
    };
    num(10,20)

    // ? Implcit Return-> when it automatically return the value is called implicit Return
    // ^ if there is only one paramater then we no need to mention the return 
    let greet=(name) => {return name};
    console.log(greet("John"))

    // ?Explicit Return
    let greet2=(age)=>{
        console.log("Inside the arrow function")
        return age;
    }
    console.log(greet2(19))