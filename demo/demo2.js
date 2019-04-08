document.addEventListener("DOMContentLoaded", function(event) { 
		var els = document.getElementsByTagName('h5');
		 for( title of els){
		 	title.innerHTML ="demo 23";
		 }
});
function findMax (a,b,c){
	var max = a;
	return 'Giá trị lớn nhất là:' + max;
	if (a == 10){
		return 'dsd';
	}
	if (max < c){
		return 'dsd';
	}
	
}
console.log(findMax(12,23,3));
function sum (a,b) {
	return a+b;
}
// caculate(1,2,'*');
// function cal (a,b,c){
//	
// 	if (c !== '*'){
// 		return 'Bạn nhập sai phép tính!'
// 	}
// 	if (c !== "+"){
// 		return 'Bạn nhập sai phép tính!'
// 	}
// 	if(typeof a !== "number"){
// 		return "a phải là số"
// 	}
// 	if(typeof b !== "number"){
// 		return "b phải là sô";
// 	}
// 	if (c == '+'){
// 		return a+b;
// 	}
// 	if (c == '-') {
// 		return a - b;
// 	}
// 	if (c == '*') {
// 		return a * b;
// 	}
// 	if (c == '/') {
// 		return a / b;
// 	}
//
// }
// console.log(cal(1,2,"+"));

function cal(a,b,caculator) {

	switch (caculator) {
		case '+':{
			result = a + b;
			break
		}
		case '-':{
			result = a - b;
			break
		}
		case '*':{
			result = a * b;
			break
		}
		case '/':{
			result = a / b;
			break
		}
	}
	return result;
}
console.log(cal(23,43,'+'));