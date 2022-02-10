// data types 

// number (5)
var n1=4,n2=6;
var n3=5.5,n4=2040.50;
console.log(n1,n2,n3,n4)

// string ("a string data")
var companyname = "intecbrussel"
console.log(companyname)
var company = "intec"
company = company + "brussel" // merged string
console.log(company)

// boolean (true/false)
var isStudent = false;
var isAdmin = true;
console.log(isStudent,isAdmin)

// undefined
console.log(undefined)

// null 
console.log(null)
console.log((50*50)*null)

// object ([],{})
    // array

    var numbers = [1,2,3,4]
    var myArr = [23,"hello",true,undefined,null,[5,6,7]]
    console.log(numbers[2])
    console.log(myArr[5])
    console.log(myArr[5][1])

    var myComplexArray = [[[1,2,3],[4,5,6],[7,8,9]],[["a","b","c"],["d","e","f"]]]
    console.log(myComplexArray[0].length)
    console.log(myComplexArray[0][1][1])
    console.log(myComplexArray[0])
    console.log(myComplexArray[0][1])
    console.log(myComplexArray[1][0])

    // object
    var student = {
        fullname:"Joe Dalton",
        email:"joe@microsoft.com",
        age:23,
        isStudent:true,
        scores:[66,77,88,99]
    }

    console.log(student)
    console.log(student.scores)
    console.log(student.fullname)
    console.log(student['email'])

    
// function

