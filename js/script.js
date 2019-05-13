// Задаем пропорционально высоту бэкгрунд фотографии на главном экране исходя из ширины окна браузера.
// Функция срабатывает при изменении окна браузера.
 
function setRectangleHeight() {
	const height = Math.round( document.documentElement.clientWidth * 600 / 1440 );	
	const rectangle = document.getElementById('rectangle');		
	
	rectangle.setAttribute("style", "height:" + height + "px");
}


// Вывод сообщения об ошибке.
// Функция принимает поле, в котором была допущена ошибка и само сообщение об ошибке.
  
function errorMessage(field, message) {
	const node = document.getElementById(field);
	node.parentNode.insertAdjacentHTML('afterend', '<div class="error">' + message + '</div>');
} 


// Проверка адреса почты	 на недопустимые символы.

function validateEmail(email) {
	const pattern  = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	
	return pattern.test(email);
}	 


// Проверка имени и фамилии ( допускаются только буквы ). 
	
function onlyChar(name) {
	const pattern  = /^[a-zа-яё ]+$/i;
	
	return pattern.test(name);
}	 


// Проверка телеыона ( допускаются только цифры, скобки, '+', '-' и пробел ).

function onlyNum(phone) {
	const pattern  = /^[0-9\(\)\+\- ]+$/i;
	
	return pattern.test(phone);
}		


// Проверка текстового поля ( допускаются только буквы, цифры, запятая, точка и пробел ).

function сharAndNum(text) {
	const pattern  = /^[a-zа-яё0-9-\,\. ]*$/gmi;
	 
	return pattern.test(text);
}
	 	 
	 	 
// Функция проверки формы на валидность.
	 	 
function validateForm(event) {
	event.preventDefault();
	
	
	// Удаляем старые сообщения об ошибках, чтобы вывести новые ( если новые будут ).
	
	const errorMessages = document.querySelectorAll('.error');

	if( errorMessages.length > 0 ) {  


	/*	ie не поддерживает конструкцию	array.forEach
			
		errorMessages.forEach(function(element) {
			element.parentNode.removeChild(element)
		});									  	
	*/	
		
		for(var i = 0; i < errorMessages.length; i++ ) {
			errorMessages[i].parentNode.removeChild(errorMessages[i]);
			console.log(errorMessages[i]);
			console.log(i);
		}	
	}
	 
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const phone = document.getElementById('phone');
	const text = document.getElementById('text');


	// Проверка на незаполненность полей.

	if(name.value === '') errorMessage('name', 'Пожалуйста введите имя и фамилию');
	if(email.value === '') errorMessage('email', 'Пожалуйста введите электронную почту');
	if(phone.value === '') errorMessage('phone', 'Пожалуйста введите телефон');
	if(text.value === '') errorMessage('text', 'Ответьте пожалуйста на вопрос');
	
	
	// Проверка на правильное заполнение каждого поля.
	
	if(!validateEmail(email.value) && email.value != '') errorMessage('email', 'Некорректный формат адреса электронной почты');
	if(!onlyChar(name.value) && name.value != '') errorMessage('name', 'Допускается вводить только буквы');
	if(!onlyNum(phone.value) && phone.value != '') errorMessage('phone', 'Допускается вводить только цифры');
	if(!сharAndNum(text.value.replace(/\n/gmi, " ")) && text.value != '') errorMessage('text', 'Допускается вводить только буквы, цифры, точку и запятую');
	
}
 
 
// Отлавливаем событие отправки формы и изменения ширины окна браузера. 
 
function main() { 
	const form = document.querySelector('form');
	form.addEventListener('submit' , validateForm);

	//document.addEventListener("DOMContentLoaded", setRectangleHeight);	
	window.addEventListener("resize", setRectangleHeight);		
}

main();
