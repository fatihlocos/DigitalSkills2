// localStorage
/*
setItem(), getItem(), removeItem(), clear(), key()
*/
// var result;
// // insert data into storage
// localStorage.setItem("companyname","intecbrussel")
// localStorage.setItem("users","root")
// localStorage.setItem('age',30)
// localStorage.setItem('switch',true)
// localStorage.setItem('todos',JSON.stringify({id:1,todo:"react"}))
// localStorage.setItem('alltodos',JSON.stringify([{id:1,title:'nextjs'},{id:2,title:'vuejs'}]))


// // get data from storage
// result = JSON.parse(localStorage.getItem('alltodos'));
// //result = localStorage.getItem('companyname')

// // result.forEach(todo=>{
// //     console.log(todo)
// // })

// localStorage.removeItem('age')
// localStorage.removeItem('companyname')
// localStorage.removeItem('users')

// result = localStorage.key(1)

// localStorage.clear()

// console.log(typeof result)
// console.log(result)
// var storageData = JSON.parse(localStorage.getItem('userdata')) !=null ? 
// JSON.parse(localStorage.getItem('userdata'))
// :
// {message:'no record'};

const [username, password] = document.querySelectorAll('input')
const addData = document.querySelector('a')
const WelcomeUser = document.querySelector('.welcome')

function isEmpty(str) {
  return (!str || str.length === 0 );
}


addData.addEventListener('click', (e) => {
  e.preventDefault();

  if(isEmpty(localStorage.getItem('userdata'))){
    localStorage.setItem('userdata','[]')
  }

  let tempData = JSON.parse(localStorage.getItem('userdata'));
  let temp;
  if (tempData.constructor.name != 'Object') {

    temp = [...JSON.parse(localStorage.getItem('userdata'))];

  } else {
    temp = [JSON.parse(localStorage.getItem('userdata'))];
  }


  const userData = {
    username: username.value,
    password: password.value
  }

  temp.push(userData)

  localStorage.setItem('userdata', JSON.stringify(temp))
  var storageData = JSON.parse(localStorage.getItem('userdata'))
  storageData != null ?
    WelcomeUser.innerHTML = `Welcome ${storageData.username} !!!!`
    :
    WelcomeUser.innerHTML = `No Message`
  //  console.log(userData)
})




document.addEventListener('DOMContentLoaded',()=>{
  let userData = JSON.parse(localStorage.getItem('userdata'))

  userData.forEach(user=>{
    console.log(user)
    WelcomeUser.innerHTML += `Username: ${user.username}\n`
  })
})