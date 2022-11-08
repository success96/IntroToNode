//stat is a variable to dictate the status of the request. It could be a fetch request, a jQuery or 
//a lodash

// let stat = true;



// //Creating a promise object
// const promise = new Promise((resolve, reject) => {
//     if(stat){
//         //if request is resolved successfuly. In this situation, the request 
//         //is successfully resolved if stat is true
//         console.log('The status of the request has been resolved!')
//         resolve();
//     } else {
//         // the request is rejected when stat is false
//         console.log("The status of the request has been rejected");

//         //this is to throw an error intentionally
//         throw new Error();
//         reject();
//     }
// });

// //.then is used to access the return value of a successfully resolved request through a callback function
// //.catch is used to access the return value (mostly error message) of a rejected request through a callback function

// promise
// .then((data)=>{console.log('Data retrieved successfully')})
// .catch((err)=>{console.log(err)});

class Api {
    constructor (name, friend) {
      this.user = { id: 1, name}
      this.friends =  friend 
      this.photo = 'not a real photo'
    }
  
    getUser () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.user), 200)
      })
    }
  
    getFriends (userId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.friends.slice()), 200)
      })
    }
  
    getPhoto (userId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.photo), 200)
      })
    }
  
    throwError () {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Intentional Error')), 200)
      })
    }
  };

  function callbackHell() {
    const api = new Api('Fawas', ['Tolu', 'Wasiu', "ARahman"])
    let user, friends
    api.getUser().then((returnedUser)=> {
        user = returnedUser
        api.getFriends(user.id).then((returnedFriends)=>{
            friends = returnedFriends
            api.getPhoto(user.id).then((photo)=>{
                console.log('callbackHell', {user, friends, photo})
            })
        })
    })
  };
callbackHell();

function promiseChain(){
    const api = new Api('Fawas', ['Tolu', 'Wasiu', "ARahman"])
    let user, friends
    api.getUser()
        .then((returnedUser)=>{
            user = returnedUser;
            return api.getFriends(user.id)

        })
        .then((returnedFriends)=>{
            friends = returnedFriends;
            return api.getPhoto(user.id)
        })
        .then((photo)=>{
            console.log('promiseChain', {user, friends, photo})
        })
        .catch((err)=>{
            console.log(err)
        })
};

promiseChain();

async function asyncAwaitIsYourNewBestFriend() {
    try {
        const api =  new Api('Fawas', ['Tolu', 'Wasiu', "ARahman"]);
        const user = await api.getUser();
        const friends = await api.getFriends(user.id);
        const photo = await api.getPhoto(user.id);
        console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo})
    } catch (err) {
        console.log(err)
    }
    
};

asyncAwaitIsYourNewBestFriend();
