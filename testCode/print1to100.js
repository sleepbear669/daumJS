console.log("hello World!");

for(var i=1 ; i<=100 ; i++){
	if(i%2 == 1) document.getElementById('debug').innerHTML += (i +"<br>");
}

var num, total = 0;

for( var isEnd=false; isEnd===false;){
	num = prompt("숫자를 입력해주세요.");
	if(num === null){
		isEnd = true;
	}else{
		total += parseInt(num);
	}

}
console.log(total);