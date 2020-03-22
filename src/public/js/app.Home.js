$(function() {
    $('#div_films').hide();
    $('#div_films').fadeIn(3000);

    // Para agregar secciones solo hay que llamar a crearContenedoresPeliculas(genero) enviandole el genero que se desee
    // estando éste genero en la base de datos
    crearContenedoresPeliculas('trending', 'En Tendencia');
    crearContenedoresPeliculas('classic', 'Clásicas');
    crearContenedoresPeliculas('popular', 'Más Populares');
    crearContenedoresPeliculas('comedy', 'Comedia');
    crearContenedoresPeliculas('action', 'Acción');
    crearContenedoresPeliculas('suspense', 'Suspenso');
    crearContenedoresPeliculas('drama', 'Drama');
    crearContenedoresPeliculas('fantasy', 'Fantasía');
    crearContenedoresPeliculas('science fiction', 'Ciencia ficción');
    crearContenedoresPeliculas('superheroes', 'Superhéroes');
    crearContenedoresPeliculas('exciting', 'Emocionantes');
    crearContenedoresPeliculas('adventure', 'Aventura');
    crearContenedoresPeliculas('children', 'Infantiles');

    $('.flecha').on('click', function(){
        alert("Flecha");
    });

    $('#btnAceptar').click(function(){
        let success = function(info){
            alert(info);
        }
        peticiones(null, 'prueba', 'GET', null, success);
    });
});

function crearContenedoresPeliculas(type, title){
    //Variables
    let hayPelicula = false;
    let imagenes, cantFilas, cantImgsXFila = 3;
    let fila, contenedor, input, text, aElement, counterLoadedImgs =  0;

    //Settings of div_type
    let div_type = $('<div>', {
        'id': 'div_' + type,
        'class': 'container text-white',
        'style': 'background-color:rgba(0, 0, 255, 0);margin-top:1%;'
    })
    div_type.html('<h1 class="amatic" style="margin-bottom: 60px;">' + title + '</h1>');

    //Request to get the images
    let success = function(info){

        $("#spinner").spin('hide');
        imagenes = info;

        if(imagenes.length > 0){

            cantFilas = imagenes.length / cantImgsXFila;
            if(!Number.isInteger(cantFilas)){
                cantFilas = Math.floor(cantFilas + 1);
                console.log("Cantidad filas: ", cantFilas);
            }
    
            for(i = 0; i < cantFilas; i++){
    
               fila = $('<div>', {
                   'class': 'row row_films'
               });
        
                for(k = 0; k < cantImgsXFila ; k++){
                    console.log("Counter: ", counterLoadedImgs);
        
                    if(imagenes[counterLoadedImgs]){
                    
                        // contenedor
                        contenedor = $('<div>', {
                            'class': 'contenedor_peliculas'
                        });                    
        
                        // a
                        aElement = $('<a>', {
                            'href': '/peliculas/filmData/' + imagenes[counterLoadedImgs].id
                        });
    
                        // img
                        img = $('<img>', {
                            'class':'img-peliculas rounded',
                            'alt': imagenes[counterLoadedImgs].id,
                            'src': '/img/' + imagenes[counterLoadedImgs].imgFile //,
                            //'onclick': '/peliculas/showFilmData/' + imagenes[counterLoadedImgs].id
                        });
        
                        aElement.append(img);
                        contenedor.append(aElement);
    
                        // text
                        text = $('<h4>', {
                            'class': 'filmName playfairDisplay'
                        });
                        text.html(imagenes[counterLoadedImgs].name);
    
                        contenedor.prepend(text);
    
                        fila.append(contenedor);
            
                        counterLoadedImgs++;
                    }
                }
                div_type.append(fila);
            }
            $('#div_films').append(div_type);
            document.getElementById('div_films').innerHTML += '<hr class="hr">';
        }
        
    }
    peticiones(cargando, 'peliculas/imagenes', 'POST', {type}, success);
}

