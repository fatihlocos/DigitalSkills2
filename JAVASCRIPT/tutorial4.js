//global scope
//local scope

var username = "admin" // global scope

// function // regular - arrow

// regular function

// function getUsername () {
    // local scope
//   var username1="root" // local scope
  //  username = "admin_111"
    //console.log(username)
//}


  //  console.log(username)
  // getUsername ();

//

// arrow function
//const getUsername = ()=>{
//    console.log('hello function')
//}

//getUsername();

function getUsername (user){
    console.log(user)
}

getUsername("Jack")
getUsername(1)
getUsername([1,2,3])
getUsername({id:1})
getUsername(true)


//function printerservice(callBack){
  //  return callBack
//}

//function getUser(username){
 //   return username + "12"
//}

//let result = printerService (getUser('x'))
//console.log(result)

let users = ['jack','mike','smith']

// function theMachine(a,b,callBack){
//     return callBack

// }

// function getSum(x,y){
//     return x+y
// }

// let result = theMachine(5,6,getSum(5,6))
// console.log(result)

function getStudent(obj,index){
    return obj[index]
}

let result = getStudent(users,2)
console.log(result)