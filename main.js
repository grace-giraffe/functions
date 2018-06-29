//Add
function add(x,y){
    return x+y;

}
document.write(add(2,4)+"<br>")

//Multiply
function multiply(x,y){
    let total=0;
    for(var i=1;i<y;i++){
        total=add(x,total)
    }
    return total
}
document.write(multiply(6,8)+"<br>")
//Power
function power(x,y){
    let total=1;
    for(var i=1;i<y;i++){
        total=multiply(x,total)
    }
    return total
}
document.write(power(2,8)+"<br>")
//Factorial
function factorial(x){

}
//Fibonacci
function fibonacci(x){

}