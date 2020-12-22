if(document.querySelector('.libroForm') || document.querySelector('.discoForm')){

	document.querySelector('form').classList.add('hidden');
	
}

if(document.querySelector('#libro').checked){

	document.querySelector('form').action ='/createBook';
	
}else{
	document.querySelector('form').action ='/createDisc';
}