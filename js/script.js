 //Скрыть placeholder при клике
 $(document).ready(function () {
	$('.form__input').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'));
		$(this).attr('placeholder', '');
	});
	$('input').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

//Очищение формы при клике по сабмиту
//$('.button__mainform').click(function(){
//	$('.form')[0].reset();
//});


//==================================================================>
const inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
  "mask": "+7(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);