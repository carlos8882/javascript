//await test

const {taskOne, taskTwo} = require ('./tasks');

async function  main(){
    console.time('Mesure time');
    let task1 = await taskOne();
    let task2 = await taskTwo();
    console.timeEnd('Mesure time');
    
    console.log('Task One returned', task1);
    console.log('Task Two returned', task2);
}

main();


