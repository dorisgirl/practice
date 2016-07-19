var colors = ['red', 'green', 'blue'];
var colors2 = colors.concat('yellow', ['black', 'brown']);
console.log(colors);
console.log(colors2);


var colors = ['red', 'green', 'blue'];
var colors2 = colors.slice(2);
var colors3 = colors.slice(3, 9);
console.log(colors2);
console.log(colors3);

var colors = ['red', 'green', 'blue'];
var removed = colors.splice(0,1); 
// console.log(colors);		//red,black
//console.log(removed);			//green,blue

removed = colors.splice(1,0,'yellow','orange');
//console.log(colors);			
//console.log(removed);			

removed = colors.splice(1,1,'red','purple');

console.log(colors);			
console.log(removed);	


// arguments.callee&&递归函数
function factorial(num){
	if(num <= 1){
		return 1;
	}else{
		return num * arguments.callee(num - 1)
	}
}

var trueFactorial = factorial;

factorial = function(){
	return 0;
}

console.log(trueFactorial(5));	//5*4*3*2*1=120
console.log(factorial(5));			//0


//caller-->调用当前函数的函数的引用
function outer(){
	inner();
}

function inner(){
	console.log(inner.caller)
}

outer();			/*function outer(){
								inner();
							}*/


//bind() 创建一个函数示例，其this值会被绑定到传给bind()函数的值
window.color = 'red';
var o = {color: 'blue'};

function sayColor(){
	console.log(this.color)
}

var objectSayColor = sayColor.bind(o);
objectSayColor()			//blue  objectSayColor()函数的this值等于o


var s1 = 'some text';
var s2 = s1.substring(2);
console.log(s2);
//
//
//
//search
var text = 'dog, cat, bat, sat, fat';
var pos = text.search(/at/);
console.log(pos) ;		//1

var text = 'dog, cat, bat, sat, fat';
var pos = text.search(/at/);
console.log(pos) ;		//6

//replace
var text='dog, cat, bat, sat, fatat';
var result = text.replace(/(.at)/g, 'world ($1)');
console.log(result);		//dog, world (cat), world (bat), world (sat), world (fat)at


//split
var colorText = 'red, blue, green, yellow';
var colors1 = colorText.split('!');
var colors2 = colorText.split(',');
console.log(colors1);		//["red, blue, green, yellow"]
console.log(colors2);		//["red", " blue", " green", " yellow"]

//getter setter
var book = {
	_year: 2004,
	edition: 1
};

Object.defineProperty(book, 'year', {
	get: function(){
		return this._year;
	},
	set: function(newValue){
		if(newValue > 2004){
			this._year = newValue;
			this.edition += newValue - 2004
		}
	}
});

book.year = 2006;
console.log(book.edition);
















