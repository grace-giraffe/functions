//Add
function add(a,b) {
    let total = (a+b);
    document.write(total);
    return (total);
//Multiply
function multiply(x,y){
    let total=0;
    for(let i=0;i<y;i++){
        total=add(total,x);
    }
    document.write(total);
    return (total);
    
}
document.write(multiply(5,8)+"<br>")
//Power
function power(x,y) {
    let total=1;
    for(let i=0;i<y;i++){
        total=multiply(total,x);
    }
    document.write(total);
    return(total);
}
//Factorial
function factorial(x){
    let total= 0;
    for (let i= (x-1); i > 0; i--) {
        total +=multiply(a, i);
    }
    document.write(total);
    return (total);
}
//Fibonacci
function fibonacci(x){
    let f0=0;
    let f1= 1;
    let temp= 0;
    for (let i=2; i > x; i++) {
        temp = f1;
        f1= add(f0,f1);
        f0=temp;
    }
    document.write(total);
    return (f1);
}
document.write(add(2,4));
document.write(multiply(6,8));
document.write(power(2,8));
document.write(factorial(4));
document.write(fibonacci(8))
}