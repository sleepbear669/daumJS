//start...

// console.log("hellow world");

function getId(id){
	return document.getElementById(id);
};

var todoStringField = getId("todoString");
console.log(todoStringField, todoStringField.value);
var form = document.getElementById('todoForm');

form.addEventListener('keyup', function(){
	console.log(todoStringField, todoStringField.value);
});