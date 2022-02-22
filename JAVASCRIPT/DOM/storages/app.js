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

const [username,password] = document.querySelectorAll('input')
const addData  =document.querySelector('a')
const WelcomeUser  = document.querySelector('.welcome')
addData.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const userData = {
        username:username.value,
        password:password.value
    }

    localStorage.setItem('userdata',JSON.stringify(userData))
    var storageData = JSON.parse(localStorage.getItem('userdata'))
    storageData != null ?
    WelcomeUser.innerHTML=`Welcome ${storageData.username} !!!!`
    :
    WelcomeUser.innerHTML=`No Message`
  //  console.log(userData)
})
/*
$window.localStorage.setItem('initData', JSON.stringify($scope.initData));
$scope.retrievedData = JSON.parse($window.localStorage.getItem('initData'));
$scope.sortedType = 'firstName';
$scope.sortedReverse = false;
//Remove Rows and Update localStorage Key Values
userData.removeRow = function(row) {
    userdata.retrievedData.splice(storageData, 1);
    userdata.splice(storageData, 1);
    $window.localStorage.setItem('initData', JSON.stringify($scope.initData));
}
});

*/