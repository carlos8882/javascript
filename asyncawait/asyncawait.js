//asinc/await is another form to implement async methods
// await is compatible with promises, so it is able to implement .then methods and also can be Thenable

async function loadJson(url) { 
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404 (4)


// Async class methods
// To declare an async class method, just prepend it with async
class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1

// Async/Await Error handling
// it is posible to use try catch in order to catch errors with await
async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
  }
  
  f();