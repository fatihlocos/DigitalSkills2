// if

var n1 = 6;
var n2 = 5;
var n3= 11;
// if(n1 < n2){ // false
//     // do this
//     console.log('correct')
// }
// (n1<n2) false
// (n3>n1) true

// if((n1<n2) && (n3>n1)){
//     console.log('correct')
// }

// if((n1<n2) || (n3>n1)){
//     console.log('correct')
// }

// if else
// n1<n2 false
// if(n1<n2){ // true
//     console.log('n1 is less than n2')
// }else{
//     // return this if first condition fail
//     console.log('n1 is not less than n2')
// }

// if((n1<n2) && (n3>n1)){
//     console.log('both condition is fine!')
// }else{
//     console.log("Second message!!!!")
// }

// if((n1<n2) && (n3>n1)){
//     console.log('both condition is fine!')
// }else if(n3<n2){ // true
//     console.log('else if scope saved app')
// }else{
//     console.log('test')
// }

// switch

// switch("90"){
//     case 1:
//         console.log('yes number is 1')
//         break
//     case 80:
//         console.log('number is incorrect but too close')
//         break
//     case "90":
//         console.log('number is correct: 90')
//         break
//     default:
//         console.log('default message')
// }


// date Object
let today = new Date();
//console.log(today.getDay())
/*
sunday 0
monday 1
tuesday 2
wednesday 3
thursday 4
friday 5
saturday 6
*/
let fatihBirthDay = new Date("Oct 1, 1991")

console.log(fatihBirthDay)
// // console.log(fatihBirthDay.getDay())
switch(fatihBirthDay.getDay()){
    case 0:
        console.log('Zondag')
    break;
    case 1:
        console.log('Mandaag')
    break;
    case 2:
        console.log('Dinsdag')
    break;
    case 3:
        console.log('Woensdag')
    break;
    case 4:
        console.log('Donderdag')
    break;
    case 5:
        console.log('Vrijdag')
    break;
    case 6:
        console.log('Zaterdag')
    break;
    default:
        console.log('default')
}

// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.toLocaleTimeString())


// Math Object