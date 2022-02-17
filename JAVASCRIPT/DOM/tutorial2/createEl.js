// createElement
// const divcontainer = document.querySelector('.container')
const divcontainer = document.createElement('div')
divcontainer.classList.add('container')
// console.log(document.createElement("div"))
// var title = document.createElement('h1');
// title.innerText="Hello Javascript!"
// divcontainer.append(title)
// console.log(title)

/*
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.
*/



// var boxModel = document.createElement('div')
// boxModel.setAttribute('style','background-color:lightgrey; width:300px; border:15px solid green; padding:50px; margin:20px;')

// var myBigTitle= document.createElement('h1')
// myBigTitle.innerText="Hello JS!"
// boxModel.append(myBigTitle)
// divcontainer.append(boxModel)
//console.log(boxModel)

// https://picsum.photos/200

// const myImage = document.createElement('img')
// myImage.setAttribute('src',"https://picsum.photos/200")
// divcontainer.append(myImage)

// document.body.append(divcontainer)

// <a href="#" target="_blank"><img src="https://picsum.photos/id/237/200/300"/></a>

/*
<div class="jumbotron jumbotron-fluid">
      <div class="container">
          <h1 class="display-3">Fluid jumbo heading</h1>
          <p class="lead">Jumbo helper text</p>
          <hr class="my-2">
      </div>
  </div>
  */

const g = t=>document.createElement(t)

const jumbotron = g('div')
jumbotron.classList.add('jumbotron')
jumbotron.classList.add('jumbotron-fluid')
jumbotron.classList.add('bg-dark')
jumbotron.classList.add('text-light')

const container = g('div')
container.classList.add('container')

const jumbotron_title = g('h1')
jumbotron_title.classList.add('display-3')
jumbotron_title.innerText="Hello Javascript!"

const jumbotron_desc = g('p')
jumbotron_desc.classList.add('lead')
jumbotron_desc.innerText="This is cool."

const hr_el = g('hr')
hr_el.classList.add('my-2')

container.append(jumbotron_title)
container.append(jumbotron_desc)
container.append(hr_el)

jumbotron.append(container)

document.body.append(jumbotron)



//  trick



const div = g('div')
const p = g('p')
const img = g('img')

// //Creating Table

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);

// // Adding the entire table to the body tag
// document.body.appendChild(table);

// // Creating and adding data to first row of the table
// let row_1 = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = "Number";
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = "Name/Github";
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = "Factory";
// let heading_4 = document.createElement('th');
// heading_4.innerHTML = "Exam Result 2022";

// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// row_1.appendChild(heading_4);

// thead.appendChild(row_1);


// // Creating and adding data to second row of the table
// let row_2 = document.createElement('tr');
// let row_2_data_1 = document.createElement('td');
// row_2_data_1.innerHTML = "1.";
// let row_2_data_2 = document.createElement('td');
// row_2_data_2.innerHTML = "Atilla/Injecti0n";
// let row_2_data_3 = document.createElement('td');
// row_2_data_3.innerHTML = "Intec Brussel";
// let row_2_data_4 = document.createElement('td');
// row_2_data_4.innerHTML = "95";


// row_2.appendChild(row_2_data_1);
// row_2.appendChild(row_2_data_2);
// row_2.appendChild(row_2_data_3);
// row_2.appendChild(row_2_data_4)

// tbody.appendChild(row_2);

// // Creating and adding data to third row of the table

// let row_3 = document.createElement('tr');
// let row_3_data_1 = document.createElement('td');
// row_3_data_1.innerHTML = "2.";
// let row_3_data_2 = document.createElement('td');
// row_3_data_2.innerHTML = "Abdeljalil/Hayan7";
// let row_3_data_3 = document.createElement('td');
// row_3_data_3.innerHTML = "Intec Brussel";
// let row_3_data_4 = document.createElement('td');
// row_3_data_4.innerHTML = "85";

// row_3.appendChild(row_3_data_1);
// row_3.appendChild(row_3_data_2);
// row_3.appendChild(row_3_data_3);
// row_3.appendChild(row_3_data_4);

// tbody.appendChild(row_3);


// // Creating and adding data to fourth row of the table

// let row_4 = document.createElement('tr');

// let row_4_data_1 = document.createElement('td');
// row_4_data_1.innerHTML = "3.";
// let row_4_data_2 = document.createElement('td');
// row_4_data_2.innerHTML = "Fatih/FatihLocos";
// let row_4_data_3 = document.createElement('td');
// row_4_data_3.innerHTML = "Intec Brussel";
// let row_4_data_4 = document.createElement('td');
// row_4_data_4.innerHTML = "85";

// row_4.appendChild(row_4_data_1);
// row_4.appendChild(row_4_data_2);
// row_4.appendChild(row_4_data_3);
// row_4.appendChild(row_4_data_4);

// tbody.appendChild(row_4);