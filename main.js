//Add
function add(x,y){
    return x+y;

}
document.write(add(2,4)+"<br>")

//Multiply
function multiply(x,y){
    let total=0;
    for(let i=1;i<y;i++){
        total=add(6,total)
    }
    return total
}
document.write(multiply(5,8)+"<br>")
//Power
function power(x,y) {
    let total=1;
    for(let i=0;i<y;i++){
        total+=multiply(x,x)
    }
    console.log(total);
    return(total);
}
//Factorial
function factorial(x){
    
}
//Fibonacci
function fibonacci(x){

}
console.log(power(2,8));