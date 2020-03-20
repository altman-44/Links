$(function() {
    crearContenedoresPeliculas('trending');
    crearContenedoresPeliculas('popular');

    $("#el").spin();

    $('#btnEnviar').on('click', function(){
        $.ajax({
            beforeSend: function(){
                $('#spinner').spin();
            },
            url: 'prueba',
            method: 'POST',
            success: function(data) {
                $('#spinner').spin('hide');
                console.log(data);
            }
        });
    })
    
    $('.flecha').on('click', function(){
        alert("Flecha");
    });
});

function crearContenedoresPeliculas(type){
    $.ajax({
        url: 'peliculas/imagenes',
        method: 'POST',
        data: {
            type
        },
        success: function(info){

            let div_type = $('#div_' + type);

            let fila, contenedor, input, text, flechaLeft, flechaRight, counter =  1;
        
            for(i = 0; i <= 1; i++){
        
                fila = document.createElement('div');
                fila.setAttribute('class', 'row row_films');
        
                let flechaLeft = document.createElement('i');
                flechaLeft.setAttribute('class', 'fas fa-arrow-alt-circle-left flecha');
                fila.prepend(flechaLeft);
        
                for(k = 0; k <= 2; k++){
        
                    contenedor = document.createElement('div');
                    contenedor.setAttribute('class', 'contenedor_peliculas');
                    img = document.createElement('img');
                    img.value = '1';
                    img.setAttribute('class', 'img-peliculas');
                    img.setAttribute('onclick', 'selectedImg(this.value)');
                    img.src = '/img/' + info[0].imgFile;
        
                    contenedor.append(img);
                    fila.append(contenedor);
                    div_type.append(fila);
                    counter++;
                }
        
                let flechaRight = document.createElement('i');
                flechaRight.setAttribute('class', 'fas fa-arrow-alt-circle-right flecha');
                fila.append(flechaRight);
            }
        }
    })
}

function selectedImg(valor) {
    alert(valor);
}