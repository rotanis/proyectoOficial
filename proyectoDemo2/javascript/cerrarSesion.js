jQuery(document).ready(function($){
	$('.cs').on(
		'click',
		function(e){
			e.preventDefault();

			firebase.auth().signOut()
			.then(function() {
				alert("Cerraste sesion.");
				location.href="paginaPrincipal.html";
			})
			.catch(function(error) {
	  			alert("Algo salio mal...");
	  	})

		})
});