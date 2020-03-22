// the callbacks are like function than can be passed as parameteres
//this gunctioncion are more used for assincronics methos


function sum(value1, value2){
    console.log('Sum:');
    return value1 + value2;
}

function res(value1, value2){
    console.log('Res:');
    return value1 - value2;
}

function multi(value1, value2){
    console.log('Multi:');
    return value1 * value2;
}

function div(value1, value2){
    console.log('Div:');
    return value1 / value2;
}

function calculator(value1, value2, callback){
    let result = callback(value1,value2);
    console.log(result);
}

const value1 = 4;
const value2 = 2;
console.log('Value1: ' + value1 + ' Value2: ' + value2)
calculator(value1, value2, sum);
calculator(value1, value2, res);
calculator(value1, value2, multi);
calculator(value1, value2, div);
