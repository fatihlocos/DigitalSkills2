// window and document
var result;

// window.addEventListener('scroll',()=>{
//     result = `X position: ${window.scrollX}\nY position: ${window.scrollY}`
//     console.log(result)
// })


// 500px X 182px 
result = `Width Value: ${window.outerWidth}\nHeight Value: ${window.outerHeight}`
result = `Width Value: ${window.innerWidth}\nHeight Value: ${window.innerHeight}`

result = document
result = document.all // html collection
result = document.all[6] // body
result = document.all[6].children
result = document.all[document.all.length-1]
result = document.body
result = document.head
result = document.location
result = document.URL
result = document.characterSet
result = document.scripts
result = document.scripts.length
result = document.links[1]
result = document.links[0].getAttribute('href')
result = document.links[0].classList

result = document.forms
result = document.forms.length
result = document.forms[0].method
result = document.forms[0].action

// selector methods

/*
getElementById
getElementByClassName
getElementByTagName
querySelector
querySelectorAll
*/

result = document.getElementById('main') // return element

result = document.getElementsByClassName('container')[0] // return htmlcollection

result = document.getElementsByTagName('div');

result = document.querySelector('div') // return single element
result = document.querySelector('.form-group') // return single element

result = document.querySelectorAll('div') // return all match elements // nodelist


// result.forEach(element=>{
//     console.log(element)
//     element.style.background="black"
//     element.style.color="yellow"
// })

document.querySelectorAll('form').forEach(element=>{
   element.style.background="black"
})

document.querySelectorAll('li:nth-child(even)').forEach(element=>{
    element.setAttribute('style','background:black;color:yellow')
})



//console.log(result)