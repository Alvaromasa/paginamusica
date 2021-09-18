

 $(document).ready(function(){ 
	$('.respuestas').on('click',function(e){
		$(this).parent().next().toggle();
		e.preventDefault();
	});
	$('#alternar-todo').on('click',function(e){
		$('.respuesta').toggle('slow');
		e.preventDefault();
	});
	$('.videos').on('click',function(e){
		$(this).parent().next().toggle();
		e.preventDefault();
	});
});

function validacion(){
	
	
    var nombre=$('#nombre').val();
    var correo=$('#correo').val();
    var mensaje=$('#mensaje').val();

    
    if(nombre=="" || nombre==null){

		alerta("Inserte su nombre");
        return false;
    }

    if(correo=="" || correo==null){

        alerta("Inserte su correo electrónico");
        return false;
    }
	
	if(mensaje=="" || mensaje==null){

		alerta("Inserte un mensaje");
        return false;
    }

	$("#enviar").click(alert("Gracias por enviar el formulario"));
	$("#form")[0].reset();
	return true;
	
}
 


function alerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}

arrayslider = new Array(4);
arrayslider[0] = "https://www.musicabodas.net/images/repertorio.jpg";
arrayslider[1] = "https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/28/2017/08/30041757/Blog-Banner-Image-1000x300-Arapahoe-Libraries-3.png";
arrayslider[2] = "https://www.gu.se/sites/default/files/styles/100_10_3_xmedium_1x/public/2020-09/fiol-twitter.jpg?h=44e502a5&itok=xtKQenmL";
arrayslider[3] = "https://d38trduahtodj3.cloudfront.net/images.ashx?t=ig&rid=SwiftelCenter&i=ticket-information(2).jpg";


var longitud = arrayslider.length;
var contador = 0
contador = Math.floor((Math.random() * longitud))

var t = 1
var timer = t * 2500;

function slider() {
    contador++;
    contador = contador % longitud
    $("#slider").attr("src",arrayslider[contador]);
    setTimeout("slider()", timer);
}