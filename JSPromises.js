//stat is a variable to dictate the status of the request. It could be a fetch request, a jQuery or 
//a lodash

let stat = true;



//Creating a promise object
const promise = new Promise((resolve, reject) => {
    if(stat){
        //if request is resolved successfuly. In this situation, the request 
        //is successfully resolved if stat is true
        console.log('The status of the request has been resolved!')
        resolve();
    } else {
        // the request is rejected when stat is false
        console.log("The status of the request has been rejected");

        //this is to throw an error intentionally
        throw new Error();
        reject();
    }
});

//.then is used to access the return value of a successfully resolved request through a callback function
//.catch is used to access the return value (mostly error message) of a rejected request through a callback function

promise
.then((data)=>{console.log('Data retrieved successfully')})
.catch((err)=>{console.log(err)});