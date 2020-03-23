//in order to avoid the pyramide of doom, the user is able to use promises
//using promises the user is able to read the code better
// a promise can be return a good response or an error (resolve, reject)

let promise = new Promise(function(resolve, reject){

});

function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
  }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));
  delay(3000).then(() => console.log('runs after 3 seconds'));

