//start...

// console.log("hellow world");

function getId(id){
	return document.getElementById(id);
};

var todoStringField = getId("todoString");
console.log(todoStringField, todoStringField.value);
var form = document.getElementById('todoForm');

form.addEventListener('keyup', function(){
	if(event.keyCode === 13){
		console.log(todoStringField.value);
		var todoListValue = todoStringField.value;
		todoStringField.value = null;
		var todoListField = getId("todoList");
		todoListField.innerHTML += '\
           <li>\
                <button class="delete">×</button>\
                <input type="checkbox" class="toggle-checked">\
                <span class="text">' + todoListValue+' </span>\
            </li>';
	}
	// console.log(event.keyCode);
	// console.log(todoStringField, todoStringField.value);

});