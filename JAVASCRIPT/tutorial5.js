// Arithmetic operators
// + 
let result;
function getResult(a, b, operator) {

    return `${eval(`${a}${operator}${b}`)}` // 6 - 4 = 2
}


// {
//     fullname:
//     age:
//     email:
//     hobbies:2category> books  > nietzsche, game : valorant
//     links > contact links 
// }

// template literal ``
// console.log()



// let fullname: John;
// let age = "25";
// let email = "intec@brussel.be";
// let hobbies = ["books", "football", "movies"];
// let links = "contact links";

// let text = `Hello people, my name is ${fullname}, I am ${age} years old., My e-mail address is ${email}., 
// My hobbies are the folowwing: ${hobbies}, The contact links are: ${links}`

// console.log(text)

var person = {
    "firstName": "Fatih",
    "lastName" : "Özer",
    "BirthofYear": 1991,
    "email": "ozer@fatih.be",
    "courses": ["math", "chemics"],
    "hobbies" : {
        "sport": ["badminton","pingpong"],
        "leisure": "movies",
    },
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }

  console.log(person.hobbies.sport[1])
  console.log(person.courses[1])
  console.log("My name is" + person.fullName() +","+ "I am born in " + 
  person.BirthofYear+ "." + " My e-mail address is: "+ 
  person.email+ "My hobbies are "+
  person.hobbies.sport [0] +" and "+ 
  person.hobbies.leisure)




// Subtraction
// result = getResult(6, 4, '-')

// // Addition
// result = getResult(4,4,'+')

// // multiplication
// result = getResult(3,3,'*') // 3*3 =9 

// division
// result = getResult(20,2,'/')

// modulus
result = getResult(100, 3, '%')

var number = 0;

// increment op

number++ // 1
++number // 2
number++

// decrement op

number--;
--number;

// result = number



// console.log(result)


// var n1 = 5;

// n1 = n1 + 2

// result = n1;


// var StudentAge = 20;
// //StudentAge = StudentAge + 10
// StudentAge += 10
// console.log(StudentAge) // 30


// console.log(result)

// Comparison operators
var n1 = 5;
var n2 = 6;

// ==
result = n1 == n2

// ===
result = n1 === n2 // data type and value

// !=
result = 1 != 2 // true
result = 1 != 1 // false

// > greater than
result = 3 > 4 // false
result = 4 > 3 // true
result = 4 > 4 // false

// < less than 
result = 3 < 4 // true
result = 4 < 3 // false
result = 4 < 4 // false

// >= greater than or equal
result = 4 >= 4 // true
result = 7 >= 8 // false
result = 7 >= 6 // true

// <= less than or equal 
result = 3 <= 4 // true
result = 3 <= 3 // true

// ternary operator

// ?
result = 3 >= 3 ? 'Yes they are equal' : 'No they are not equal'
// condition ? true:false



// fn: age, name
//     ternary ? less than 18
//     return 'you are not allowed to drink alcohol' : 'enjoy your drink'


// logical operators
/*
and operator
or operator
not operator
*/
// n1=5 n2= 6
// true + true = true
// false + true = false
result = (n1 >= n2) && (n2 > n1);

// or operator
// false + true = true
result = (n1 >= n2) || (n2 > n1);

// not operator
result = !(n2 > n1) // reverse result


result = {
    username: "admin",
    password: "admin123",
    show: this,
    showuser: function () {
        console.log('hello', this, "after")
    }
}


console.log(result.show, "before")


var complexObject = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        id: 1
                    }
                }
            }
        }
    }
}

var TVChannel = {
    "name": "& PRIVE HD",
    "logo": null,
    "url": "https://y5w8j4a9.ssl.hwcdn.net/andprivehd/tracks-v1a1/index.m3u8",
    "category": null,
    "language": [],
    "country": {
        "code": "in",
        "name": "India"
    },
    "tvg": {
        "id": null,
        "name": null,
        "url": null
    }
}

console.log(TVChannel.url)
console.log(TVChannel.country.name)

console.log(complexObject)
console.log(complexObject.a)
console.log(complexObject.a.b)
console.log(complexObject.a.b.c)
console.log(complexObject.a.b.c.d)
console.log(complexObject.a.b.c.d.e)
console.log(complexObject.a.b.c.d.e.id)
// result.showuser()

//console.log(result)