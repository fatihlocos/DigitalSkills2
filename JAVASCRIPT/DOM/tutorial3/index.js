const cardBody = document.querySelectorAll('.card-body')
const [appHeader, appBody] = cardBody
const listGroup = document.querySelector('.list-group')
const [addButton,deleteAllTodos] = document.querySelectorAll('button')

var html = `
<li class="list-group-item d-flex justify-content-between">
JS is Cool!!!!
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>`

// js events
addButton.addEventListener('click',function(e){
    e.preventDefault();
    console.log('hello click')
})

// document.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('hlelo')
// })