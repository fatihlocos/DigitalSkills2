var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});

const cardBody = document.querySelectorAll('.card-body')
const [appHeader, appBody] = cardBody
//console.log(appHeader, appBody)
// appHeader.innerHTML="aijdiajdjaidjaidsjaisd"
const listGroup = document.querySelector('.list-group')
// var liHtml = document.createRange().createContextualFragment(`<li class="list-group-item d-flex justify-content-between">
// JS is cool
// <a href="#" class="delete-item">
//     <i class="fa fa-remove"></i>
// </a>
// </li>`)
const parser = new DOMParser();
var htmlTemp = `<li class="list-group-item d-flex justify-content-between">
JS is cool
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>`
var liHtml = new DOMParser().parseFromString(htmlTemp,'text/html')
//console.log(liHtml.childNodes[0].childNodes[1].childNodes[0])
//listGroup.append(liHtml)
listGroup.append(liHtml.childNodes[0].childNodes[1].childNodes[0])

const allTodos = document.querySelectorAll('.list-group-item');
// console.log(allTodos)

allTodos.forEach((liEl,index)=>{
  //  console.log(liEl)
    liEl.setAttribute('data-target',index)
})


var result;

result = listGroup.childNodes[1].childNodes[1].childNodes[1] // NodeList
result = listGroup.children[0].children[0].children[0] // HTMLCollection

for(var val of listGroup.children){
   //console.log(val)
    val.setAttribute('data-id','x')
}

result = listGroup.childElementCount // return total todos
result = listGroup.children.length // return total todos
result = listGroup.lastElementChild
result = listGroup.firstElementChild
var firstElement = listGroup.firstElementChild;
result = firstElement;
result = firstElement.nextElementSibling
result = firstElement.nextElementSibling.nextElementSibling
console.log(result,"nextElement")