// let users = []

// function addUser(x) {
//     users.push(x)
// }

// addUser('mike')
// addUser('joe')
// addUser('smith')

// console.log(users)

let student = {
    name:"joe",
    scores:[55,66,77,88,99,55,77,44,76]
}

let result = student.scores.reduce(function(t,c){
    console.log(c)
   return t += c
    
})

console.log(result)