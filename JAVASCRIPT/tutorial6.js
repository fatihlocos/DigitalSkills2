// event
console.log('hello')
let mybtn = document.getElementById("MyButton")
let myinput = document.getElementById('username')
console.log(mybtn)


function Clickhandler(){
    console.log('click event!!!')
    console.log(myinput.value)
    console.log(result)
    result.innerText = myinput.value
}

mybtn.addEventListener('click',Clickhandler)


let_result;
let text = "Lorem lorem lorem"



// string methods

// length
_result = text.length
console.log(_result)