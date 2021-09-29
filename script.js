// function pi(){
// 	return 3.14;
// }
// var r=14;
// var circumference=2*pi()*r;
// alert(circumference);
var Balance=5000;
var offerprice=2000;
function transaction(purchase){
	if(purchase<=Balance&& purchase>=offerprice){
		    Balance-=purchase;
        	console.log("you got the offer");
	}
	else if(purchase<=Balance){
		Balance-=purchase;
		console.log("purchase successfull");
	}
	else{
		console.log("sorry! insufficient Balance");
	}
}
console.log(Balance);
transaction(2700);

console.log(Balance);
transaction(1400);
 
console.log(Balance);
transaction(3200);
