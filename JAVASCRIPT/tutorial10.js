// math object
var result;

// PI number
result =  Math.PI

// round method
result = Math.round(9.5)
result = Math.round(9.4)

// power Method
result = Math.pow(9,2);

// find square root of a number
result = Math.sqrt(64)
result = Math.sqrt(8)

// ABS absolute positive
result = Math.abs(-1)
result = Math.abs(-60)
result = Math.abs("10")

// sin - cos
result = Math.sin(90*Math.PI/180)
result = Math.cos(0*Math.PI/180)

// floor method

console.log(Math.floor(20.5))
result = Math.round(20.5)

// random method

result = Math.random(); 0 - 0.9
result = Math.floor(Math.random()*10) // 0-9
result = Math.floor(Math.random()*11)+1 // 1-10
console.log(result)

// // 1-45 randomMethod
// var lotto = [x,y,t,a,q,r];


// Option 1
var lotto = [];
while(lotto.length < 6){
    var r = Math.floor(Math.random() * 45) + 1;
    if(lotto.indexOf(r) === -1) lotto.push(r);
}
console.log(lotto);

// Option 2

var lotto = new Set();
while(lotto.size !== 6) {
  lotto.add(Math.floor(Math.random() * 45) + 1);
}

console.log([...lotto]);

// Option 3

var lotto = Array(45).fill().map((_, index) => index + 1);
lotto.sort(() => Math.random() - 0.5);

console.log(lotto.slice(0, 6));


































