//funcion 'peticiones' sirve para todas las peticiones que se quieran hacer
async function peticiones(beforeSend, url, method, data, success){
    await $.ajax({
        beforeSend,
        url,
        method,
        data,
        success
    });
}

function cargando(){
    $("#spinner").spin('show');
}

function closeAlert(){
    $('.alert').remove();
}