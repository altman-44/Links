$(function() {
    // Para agregar secciones solo hay que llamar a crearContenedoresPeliculas(genero) enviandole el genero que se desee
    // estando éste genero en la base de datos y tener un div_genero creado en home.hbs
    crearContenedoresPeliculas('trending');
    crearContenedoresPeliculas('popular');
    crearContenedoresPeliculas('comedy');
    crearContenedoresPeliculas('action');

    $('.flecha').on('click', function(){
        alert("Flecha");
    });

});

async function crearContenedoresPeliculas(type){

    let div_type = $('#div_' + type);
    let imagenes, cantFilas;
    let fila, contenedor, input, text, flechaLeft, flechaRight, counter =  0;

    await $.ajax({
        url: 'peliculas/imagenes',
        method: 'POST',
        beforeSend: function(){
            $("#spinner").spin('show');
        },
        data: {
            type
        },
        success: function(info){
            console.log(info);

            $("#spinner").spin('hide');
            imagenes = info;

            cantFilas = imagenes.length / 3;
            if(!Number.isInteger(cantFilas)){
                console.log("No");
                cantFilas = Math.floor(cantFilas + 1);
                console.log("Cantidad filas: ", cantFilas);
            }
        }
    });

    for(i = 0; i < cantFilas; i++){

        fila = document.createElement('div');
        fila.setAttribute('class', 'row row_films');

        let flechaLeft = document.createElement('i');
        flechaLeft.setAttribute('class', 'fas fa-arrow-alt-circle-left flecha');
        fila.prepend(flechaLeft);

        for(k = 0; k < 3; k++){
            console.log(counter);

            contenedor = document.createElement('div');
            contenedor.setAttribute('class', 'contenedor_peliculas');

            img = document.createElement('img');
            img.value = imagenes[counter].id;
            img.setAttribute('class', 'img-peliculas rounded');
            img.setAttribute('onclick', 'selectedImg(this.value)');
            img.src = '/img/' + imagenes[counter].imgFile;

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

function selectedImg(valor) {
    alert(valor);
}