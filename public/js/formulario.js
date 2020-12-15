let inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	let label	 = input.nextElementSibling;

	input.addEventListener( 'change', function( e )
	{
            const file = input.files;
            label.innerHTML="<img src="+URL.createObjectURL(file[0])+"></img>";
			
	});
});