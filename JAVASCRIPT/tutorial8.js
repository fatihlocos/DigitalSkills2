// array methods

let result;

let numbers = [1, 2, 3, 4, 5, 6]
// result = numbers

let movieTitles = []

// push method
movieTitles.push("Fatih")
movieTitles.push("Joe")
movieTitles.push("Mike")
let movie = {
    title: "Joker"
}
movieTitles.push(movie)


let films = ['a', 'b', 'c', 'd', 'e']

// join
// result = films.join("----------")

// pop method
//films.pop() // e
//films.pop() // d

// shift method
//films.shift()

//result = films


// some method
// result = numbers.some(function(value){
//    // console.log(value)
//     return value >=7
// })

// result = numbers.every(function(value){
//     console.log(value)
//     return value >=1
// })

// result = numbers.reduce(function(total,current,index,arrayitself){
//     return total += current
// })



// result = films.unshift(99)
// result = films.push(88)
// result = films

// map

numbers.map(function (val, index) {
    // console.log(val, index)
})

let students = [
    {
        id: 1,
        name: "joe"
    },
    {
        id: 2,
        name: "joe1"
    },
    {
        id: 3,
        name: "joe2"
    },
    {
        id: 4,
        name: "joe3"
    }
]

students.map(function (x, i) {
    //   console.log(x,i)
    //  console.log(x.name)
})


let people = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    }
]

/*
street: 'Douglas Extension',
  suite: 'Suite 847',
  city: 'McKenziehaven',
  zipcode: '59590-4157',
  geo: { lat: '-68.6102', lng: '-47.0653' }
  */

people.map(function (person) {
    // console.log(person.address)

    let adres = person.address;
    let fulladres = `${adres.street} ${adres.suite}, ${adres.city} ${adres.zipcode}`

    // console.log(fulladres)
    let geolocation = person.address.geo;
    let fullgeo = `${geolocation.lat} ${geolocation.lng}`
    //  console.log(fullgeo)

})


// function findPersonById(obj,id){
//     if(obj.id==id){
//         console.log(obj)
//     }
// }


function findPersonById(id) {
    return people.filter(person => person.id == id)
}

// let showPerson = findPersonById(1)
// console.log(showPerson)



// people.map((x,i)=>{
//     findPersonById(x,3)
// })


// forEach
// people.forEach(function(person,index){
//     console.log(person)
// })

// flat
let mDArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, [66, 88, 99]]]]

result = mDArray.flat(3)

let randomNumberList = [88, 55, 33, 55, 22, 56, 45, 23, 12, 76, 9, 1]
let randomStringList = ['g', 'a', 'k', 'i', 'l', 'z', 'x', 'w', 'b']
result = randomNumberList.sort()
result = randomStringList.sort()

// compareFunction alghorithm
result = randomNumberList.sort(function (a, b) {
    return b - a
})


// result = movieTitles
//console.log(result, typeof result)

let person = [
    {
        name: "Ali Baba1",
        age: 70
    },
    {
        name: "Ali Baba2",
        age: 50
    },
    {
        name: "Ali Baba3",
        age: 25
    },
    {
        name: "Ali Baba4",
        age: 18
    },
    {
        name: "Ali Baba5",
        age: 100
    }
]

function findageabove25() {
    return person.filter(person => person.age >= 25)
}
let showPerson = findageabove25().sort((a,b)=>b.age-a.age)
console.log(showPerson)


let _students = [
    { name: 'Student', scores: [10, 20, 30, 40, 50] },
    { name: 'Student1', scores: [10, 20, 70, 40, 50] },
    { name: 'Student2', scores: [10, 30, 40, 50] },
    { name: 'Student3', scores: [10, 40, 50] }
]

function getStudents(obj){
    const totalScores = obj.scores.reduce(function(t,c){
        return t+=c
    })
    obj.totalScore = totalScores
    console.log(obj)
    return obj
}

function whoPassedExam(obj){
    return obj.totalScore>=130
}

result = _students.map(getStudents).filter(whoPassedExam)

console.log(result)