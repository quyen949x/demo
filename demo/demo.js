var t = document.getElementsByTagName('h1');
console.log(t);
var t2 =document.getElementsByTagName('h2');
console.log(t2);
var x =document.getElementById('quyen');
console.log(x);
var p =document.getElementsByTagName('p');
console.log(p[1].innerHTML);
p[1].innerHTML= 'Web đã bị hack'
var d ='dung quyen dan duy';
var ten = d.split(' ');
console.log(ten);
for (var i = 0; i< ten.length ; i++) {
	console.log(ten[i]);
};
var vitri =ten[0].search('dung');
if (vitri !=-1)
{ console.log('Tìm thấy');
	// var moi =c.replace('mitin', 'minoob');
	// console.log(moi);
}
else{console.log('Không tìm thấy');};
