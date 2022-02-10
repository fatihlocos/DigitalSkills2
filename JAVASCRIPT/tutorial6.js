// event
console.log('hello')
let mybtn = document.getElementById("myButton")
let myinput = document.getElementById('username')
let result = document.getElementById('result')
console.log(mybtn)


function ClickHandler(){
    console.log('click event!!!')
    console.log(myinput.value)
    console.log(result)
    result.innerText = myinput.value
}


mybtn.addEventListener('click',ClickHandler)

let _result;
let text = "Lorem ipsum dolor sit amet intecbrussel consectetur adipisicing elit. Expedita laboriosam fugit est intecbrussel vitae deserunt"
let example = "23627323 237232873 sadhjasdjasjdajhd 237283 INTECBRUSSEL hsdjhsdjhsdj 7323 sjdhhsdjdhsj"
let url = '               http://google.com"><script>alert(1)</script>                    '
// string methods

// length 
_result = text.length

// indexOf
_result = text.indexOf("intecbrussel")
_result = text.lastIndexOf("intecbrussel")

// search method
_result = text.search("amet")

// extract string
_result = text.slice(6,11)
_result = url.slice(0,17)
console.log(text.length-15)
_result = text.substring(5,text.length-15)

// replace method
_result = text.replace("amet","google")
_result = example.replace(/([0-9])/gm,'...')
_result = example.replace(/([a-zA-Z])/gm,'...')

// uppercase lowercase methods
_result = text.toUpperCase();
_result = text.toLowerCase();

_result = url

// remove spacing (trim)
_reuslt = url.trim();
_result  = url.trimLeft();
_result = url.trimRight();

var name = "intec"
var brx = "brussel"
// name +="brussel"
// _result = name

// concat method
_result = name.concat(brx)


var students = "Fatih-AbdulJelil-Prince"

_result = students

// convert string to array split method

_result = students.split("-")[3]

console.log(_result, typeof _result)