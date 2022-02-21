var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});

const [todoInput, DateOfTodo, TodoFilter] = document.querySelectorAll('input')
const [x, y, z, i] = document.querySelectorAll('button')
const listGroup = document.querySelector('.list-group')

function makeTodo(obj) {
    const TodoModel = `
    <li class="list-group-item d-flex justify-content-between">
    <p class="todotitle">${obj.title}</p>
    <p class="tododate">${obj.date}</p>
         <a href="#" class="delete-item">
         <i class="fa fa-remove"></i>
          </a>
</li>
    `
    const ModelRendered = document.createRange().createContextualFragment(TodoModel)
    console.log(ModelRendered)
    listGroup.append(ModelRendered)
}

z.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(todoInput.value)
    console.log(DateOfTodo.value)
    makeTodo({
        title: todoInput.value,
        date: DateOfTodo.value
    })
})


i.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('hello')
    if(listGroup.childElementCount !=0){

        while(listGroup.firstChild){
            listGroup.removeChild(listGroup.lastChild)
        }
    }else{
        console.log('There is no todo!')
    }
})