jQuery(document).ready(function($){
	$('.login').on(
		'submit', 
		function(e){
			e.preventDefault();

			var email = $('.login .email').val();
			var password = $ ('.login .password').val();

			if (!email) {
				alert ('debe ingresar un correo');
			}else if (!password ) {
				alert ('debe ingresar una contraseña');
			} else {
				firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(function(){
					alert ('bienvenido');
					location.href="destinos.html";
				})
				.catch(function(error) {
					alert ('no eres bienvenido');
				});
			}
		});

	$('.registro').on(
		'submit', 
		function(e){
			e.preventDefault();

			var email_registro = $('.registro .email').val();
			var contrasena_registro = $('.registro .password').val();

			alert (email_registro + "" + contrasena_registro);

			if (!email_registro) {
				alert ('debe ingresar un correo');
			}else if (!contrasena_registro ) {
				alert ('debe ingresar una contrasena');
			} else {
				firebase
				.auth()
				.createUserWithEmailAndPassword(email_registro, contrasena_registro)
				.then (function(){
					location.href="login.html";
				})
				.catch(function(error) {
					alert ('datos inadecuados');
				});
			}
		}
		);
});

