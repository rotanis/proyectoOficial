var traer_html = new Promise (function(res, rej) {
			var blog = database.ref("/destinos/colombia/costumbres/").once("value").then(function(snapshot){
				var data = snapshot.val();

				$('.definicion_colombia').text(data.definicion_colombia);
				$('.definicion_costumbres').text(data.definicion_costumbres);
				$('.lugar_optimista').text(data.lugar_optimista);
				$('.Positividad_nacional').text(data.Positividad_nacional);
				$('.Gastronomia').text(data.Gastronomia);
				$('.Fiesta_eventos').text(data.Fiesta_eventos);

				return res(data);

			});
			if (!blog) { return rej();}
		});