jQuery(document).ready(function($){
    $('#buscar').click(
        'submit',
        function(e){
            e.preventDefault();

            var pais = $('.login .pais').val();
            var experiencia = $('.login .experiencia').val();
            if(!pais) {
                alert('Debe ingresar un pais');
            }else if(!experiencia) {
                alert('Ingresa tu experiencia, plis');
            }
            else {
                var relato = {
                    pais:$('.login .pais').val(),
                    experiencia:$('.login .experiencia').val(),

                    };
                    console.log(relato);
                    database.ref('relato').push(relato);
                   alert ("Gracias¡ :3");
                   location.href="destinos.html";
            }
        });
});
