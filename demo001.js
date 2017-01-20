1.var msg;
	console.log(typeof(msg));  //undefined
	console.log(msg);		//undefined
	//var age;
	console.log(typeof(age));  //undefined
	console.log(age);		//报错


2.console.log(null == undefined);		//true
	console.log(null === null);		//true

3.console.log(NaN == NaN)		//false
	console.log(isNaN(NaN))		//true
	console.log(isNaN(true))		//false
	console.log(isNaN(false))		//false

4.var num;
	console.log(num.toString());	//报错
	console.log(String(num));		//undefined

5.var o = new Object();

6.function numAdd(num1, num2){
	console.log(num1 + num2);
}
numAdd('10','20','2');//1020
numAdd('t');//tundefined

//7.理解参数
function sayHi() {
	console.log('Hello ' + arguments[0] + ',' + arguments[1]);
	console.log(arguments[0])//Doris
}
sayHi('Doris')//Hello Doris,undefined，ECMAScript中的参数在内部是用一个数组来表示的


function doAdd(num1, num2) {
	arguments[1] = 10;
	console.log(arguments[0] + num2);
}
 doAdd('20');//20undefined  arguments的值永远与对应命名参数的值保持同步

function doAdd(num1, num2) {
	arguments[1] = 10;
	console.log(arguments[0] + num2);
}
 doAdd(20);//NaN
// var person = new Object;

8.function setName(obj){
	obj.name = 'Nick';
	person = new Object();
	person.name = 'Grey';
	console.log(person.name + ' inner');
}
var person = new Object();
setName(person);

console.log(person.name)

9.var colors = [ 'blue', 'green'];
colors.length = 4;
console.log(colors[3]);//undefined
console.log(colors[4]);//undefined

var colors = ['red', 'blue', 'green'];
colors[colors.length] = 'black';
console.log(colors);	//['red', 'blue', 'green', 'black']
colors[colors.length] = 'brown';
console.log(colors);	//['red', 'blue', 'green', 'black', 'brown']


10.var colors = ['red', 'blue', 'green'];
console.log(colors.toString());//red,blue,green

var colors = ['red', 'blue', 'green'];
console.log(colors.valueOf());//['red', 'blue', 'green']

var colors= ['red', 'blue', 'green'];
console.log(colors) //['red', 'blue', 'green']

var colors = ['red', 'blue', 'green'];
alert(colors.valueOf());//red,blue,green

var colors= ['red', 'blue', 'green'];
alert(colors)	//red,blue,green


11.var person1 = {
	toLocaleString : function(){
		return 'Nick';
	},
	toString : function(){
		return 'nick';
	}
};

var person2 = {
	toLocaleString : function(){
		return 'Gray';
	},
	toString : function(){
		return 'gray';
	}
};

var people = [person1, person2];
alert(people); //nick,gray
console.log(people); //[Object, Object]

alert(people.toString());	//nick,gray
console.log(people.toString());	//nick,gray

alert(people.toLocaleString());	//Nick,Gray
console.log(people.toLocaleString());	//Nick,Gray


//12.数组中的join()方法
var colors = ['red', 'green', 'blue'];
console.log(colors.join(','));//red,green,blue
console.log(colors.join('||'));//red||green||blue

//13.数组中的push()和pop()方法
var colors = new Array();
var count = colors.push('red', 'blue');
console.log(count); //2

var item = colors.pop();
console.log(item);	//blue
console.log(colors) //['red']
console.loh(colors.length);//1

//14.数组中的unshift()方法和pop()方法(shift移除 unshift添加)
var colors = new Array();
var count = colors.unshift('red', 'green');
console.log(colors);//['red', 'green']
count = colors.unshift('black');
console.log(colors);//['black', 'red', 'green']

var item = colors.pop();
console.log(colors);//['black', 'red']

//比较大小
function compare(value1, value2){
	if(value1 < value2){
		return 1;
	}else if(value1 > value2){
		return -1;
	}else{
		return 0;
	}
}

var values = [10,20]
values.sort(compare);//sort按升序排列


//
function displayInfo(args){
	var output = '';
	if(typeof args.name == 'string'){
		output += 'name:' + args.name + '\n';
	}
	if(typeof args.age == 'number'){
		output += 'Ages:' + args.age + '\n';
	}
	console.log(output);
}

displayInfo({
	name: 'Nich',
	age: 29
});
displayInfo({
	name: 'Gray'
})




//concat()方法 基于当前数组中的所有项创建一个新数组，不改变原有数组

var colors = ['red', 'green', 'blue'];
var colors2 = colors.concat('yellow', ['black', 'brown']);
console.log(colors);	//['red', 'green', 'blue']
console.log(colors2);	//['red', 'green', 'blue', 'yellow', 'black', 'brown']
console.log(colors);//['red', 'green', 'blue']

//slice()方法  基于当前数组中的一个或多个项创建一个新数组，不改变原有数组
var colors = ['red', 'green', 'blue'];
var colors2 = colors.slice(2);
var colors3 = colors.slice(3, 9);
console.log(colors2);	//['blue']
console.log(colors3);	//[]


var colors = ['red', 'green', 'blue', 'black', 'yellow']
var colors1 = colors.slice(1);//只有一个参数的时候，返回从该参数指定位置到当前数组末尾的所有项
var colors2 = colors.slice(0,4);//两个参数返回起始位置和结束位置之前的项
var colors3 = colors.slice(-3,4);
console.log(colors1);//['green', 'blue', 'black', 'yellow']
console.log(colors2);//['red', 'green', 'blue', 'black']
console.log(colors3)//['blue', 'black']
console.log(colors)//['red', 'green', 'blue', 'black', 'yellow']


//splice方法，删除，插入，替换，且会改变原有数组
	//删除
var colors = ['red', 'green', 'blue'];
var removed = colors.splice(0,1);//要删除的第一项的位置和要删除的项数
console.log(colors);//['green', 'blue']
console.log(removed);//['red']

var colors = ['red', 'green', 'blue'];
var removed = colors.splice(1,2);//要删除的第一项的位置和要删除的项数
console.log(colors);//['red']
console.log(removed);//['green', 'blue']
	//插入
var colors = ['red', 'green', 'blue'];
var removed = colors.splice(1,0,'yellow','orange');
console.log(colors);//['red', 'yellow', 'orange', 'green', 'blue']
console.log(removed)//[]

	//替换
var colors = ['red', 'green', 'blue'];
var removed = colors.splice(1,1,'red','purple');
console.log(colors);//['red', 'red', 'purple', 'blue']
console.log(removed);//['green']


//indexOf()和lastIndexOf()表示要查找的项（可选的）和表示查找起点位置的索引 ==> 返回要查找的项在数组中的位置
var num = [1,2,3,4,5];
console.log(num.indexOf(0));//-1
console.log(num.indexOf(4));//3
console.log(num.indexOf(4,1));//3
console.log(num.indexOf(4,4));//-1

//迭代方法
	//01
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
	return item > 2;
});
console.log(filterResult);//[3, 4, 5, 4, 3]

	//02
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
	return index > 2;
});
console.log(filterResult);	//[4, 5, 4, 3, 2, 1]

	//03
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
	return array > 2;
});
console.log(filterResult);//[]


//归并方法
//reduce() 和 reduceRight() 接收4个参数：前一个值、当前值、项的索引和数组对象
//这个函数返回的任何值都会作为第一个参数自动传给下一项
var values = [1,2,3,4];
var sum = values.reduce(function(prev, cur, index, array){
	return prev + cur;
});
console.log(sum);//10


//Data类型
var someDate01 = new Date(Date.parse('May 25, 2004'));
var someDate02 = new Date('May 25, 2004');
console.log(someDate01);//Tue May 25 2004 00:00:00 GMT+0800 (CST)
console.log(someDate02);//Tue May 25 2004 00:00:00 GMT+0800 (CST)
console.log(someDate01 == someDate02);//false
console.log(someDate01 === someDate02);//false


var a = ['apple'];
console.log(typeof(a));




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
console.log(colors1);		//['red, blue, green, yellow']
console.log(colors2);		//['red', ' blue', ' green', ' yellow']

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




//01每个方法都要在每个实例上重新创建一遍
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
      alert(this.name);
	}; 
}
//02
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
	this.sayName = new Function('alert(this.name)');
}
//03
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName(){
  alert(this.name);
}

//对象字面量表示法
function displayInfo(args){

	var output = '';
	if (typeof args.name == 'string'){
		output += 'Name: ' + args.name + '\n';
	}
	if(typeof args.age == 'number'){
		output += 'Age: ' +args.age;
	}	
	console.log(output);

}

displayInfo({
	name: 'Nich',
	age: 29
});

displayInfo({
	name: 'Gray',
	age: 27
});

//方括号可以通过变量来访问属性
var person = {
	name: 'Nich',
	age: 28
};
var propertyName = 'name';
console.log(person[propertyName]);//Nich
console.log(person.propertyName);//undefined


//数组
var colors = ['red', 'blue', 'green'];
console.log(colors[0]);//red
console.log(colors[-1]);//undefined

var colors = ['red', 'green', 'blue'];
console.log(colors.toString());	//red,green,blue
console.log(colors.valueOf());	//["red", "green", "blue"]


var person1 = {
	toLocaleString: function(){
		return 'Niko';
	},
	toString: function(){
		return 'Nich';
	}
};
var person2 = {
	toLocaleString: function(){
		return '28';
	},
	toString: function(){
		return '29';
	}
};
var people = [person1, person2];
console.log(people);	//[Object, Object]
console.log(people.toLocaleString());	//Niko,28

//数组的push()方法
var colors = ['red', 'green'];
var newColors = colors.push('blue');
var delColors = colors.pop();
console.log(newColors);	//3
//console.log(delColors);	//blue
console.log(colors);	//["red", "green"]


//比较函数--升序排列
function compare(value1, value2){
	if(value1 > value2){
		return 1;
	}else if(value1 < value2){
		return -1;
	}else{
		return 0;
	}
}

var values = [2,0,1,6,1,2,1,5];
var newValues = values.sort(compare);
console.log(values);


//slice()方法
var colors =['red','green','blue','black','orange','yellow'];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
console.log(colors2);		//['green','blue','black','orange','yellow'];
console.log(colors3);		//['green','blue','black'];


//函数名是指向函数的指针
function sum(num1, num2){
	return num1 + num2;
}
var newSum = sum;
console.log(newSum == sum);
console.log(sum(10, 10));
console.log(newSum(20, 10));

var a = new Object();
var b = new Object();
console.log(a === b);


var a = '10';
var b = a;
console.log( a === b);


var a = ['apple'];
var b = a;
console(b);


//js变量赋值相关
var a = ['apple'];
var b = a;
a = ['banana'];	//指向一个新的堆内存
console.log(b);	//apple

var a = 'apple';
var b = a;
a = 'banana';
console.log(b);	//apple 因为基本类型值复制之后相互独立，因此不会被影响

var a = {name: 'apple'};
var b = a;
a.name = 'banana';
console.log(b.name);	//banana 因为改变原有堆内存内name属性的值，b和a指向同一个堆内存，因此b的name属性也会改变

var a = {name: 'apple'};
var b = a;
a = {name: 'banner'};//指向一个新的内存，这里的a跟上面的a指向的不是同一个堆内存
console.log(b.name);	//apple


var a = {name: 'apple'};
var b = a.name;//此时b为一个字符串
a.name = 'banana';
console.log(b);		//apple 仅仅改变了a的name属性的值，跟b没有什么关系

var a = {name: "apple"};
var b = a;
a.name = "banana";
console.log(b.name);	//banana	a b指向同一个堆内存，所以b的name属性也会改变

//函数声明和函数表达式
console.log(sum(10, 10)); //20
function sum(num1, num2){
	return num1 + num2;
}

console.log(sum(10, 10));	// Uncaught TypeError: sum is not a function
var sum = function(num1, num2){
	return num1 + num2;
};


//作为值得函数
function callSomeFunction(callSomeFunction, someArgument){
	return callSomeFunction(someArgu ment);
}
function add10(num){
	return num + 10;
};
var result1 = callSomeFunction(add10, 10);
console.log(result1);


//函数内部属性
function factorial(num){
	if(num <= 1){
		return 1;
	}else{
		return num * arguments.callee(num - 1);
	}
};

var trueFactorial = factorial;
factorial = function(){
	return 0;
};
console.log(trueFactorial(5));	//120




function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);

// 解析
var bar = foo(2)之后，bar成为一个函数 
function(y){
	console.log(x + y + (++tmp));
}
所以，bar(10)就解析为
function(10){
	console.log(x + 10 + (++tmp));
}

所以，最后是
function foo(2){
	var tmp = 3;
	return function(10){
		console.log(2 + 10 + 4)	//结果为16
	}
}
// 解析结束



function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);



function foo(x) {
    var tmp = 3;
    function bar(y) {
        console.log(x + y + (++tmp));
    }
    bar(10);
}
foo(2);


function foo(x) {
	var tmp = 3;

	return function (y) {
		console.log(x + y + tmp);
		x.memb = x.memb ? x.memb + 1 : 1;
		//等同于
		// if(x.memb){
		//     x.memb += 1
		// }else{
		//    x.memb = 1
		// }
		console.log(x.memb);
	}
}

var age = new Number(2);	//声明age是一个Number类型
var bar = foo(age); 

bar(10);	//function(10){……}

// 解析
1、x 是一个值为2的number对象
2、对x进行数学运算的时候， 会拿x的值做运算
//解析结束
//
//

var count = 10;
function test(){
	for (var i = 0; i < count; i++){
	  	console.log(i + '内部'); //0内部 1内部 2内部 3内部 4内部 5内部 6内部 7内部 8内部 9内部
	}
}
test(2);
console.log(i + '外部'); //报错




for(var i = 0; i < 3; i++){
	function test(){
		console.log(i);
	}
}
console.log(i + '外部');
test(2);



