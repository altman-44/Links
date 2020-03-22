// Rules
// id: empieza en 1 y se va incrementando, siempre entero
// name: 
// genre: es un vector
// dateRelease: aclarar de qué país es esa fecha de estreno (preferible que sea de Argentina)
// country: 
// director: 
// protagonists: es un vector
// description: breve
// duration: Xh Xmin
// language: oficial
// awards: solo los ganados, NO LOS NOMINADOS
// iconSrc: se especifica si proviene de una web o si es una clase para poder determinar la fuente en el handlebars de una manera correcta
// imgFile:
// urlNetflix: es un objeto. Se especifica si existe. Si sí existe se inserta la url
// urlYoutube: es un objeto. Se especifica si existe. Si sí existe se inserta la url

module.exports = [
    {
        id: 1,
        name: 'The Avengers',
        genre: ['science fiction', 'action', 'superheroes'],
        dateRelease: '26 de abril de 2012 (Argentina)',
        country: 'Estados Unidos',
        director: 'Joss Whedon',
        protagonists: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner', 'Tom Hiddleston', 'Clark Gregg', 'Cobie Smulders', 'Stellan Skarsgård', 'Samuel L. Jackson'],
        plot: 'El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.',
        duration: '2h 23min',
        language: 'Inglés',
        awards: ["Premios People's Choice (2013): Actor de cine favorito (Robert Downey Jr.), Estrella de película de acción favorita (Chris Hemsworth), Superhéroe favorito de película (Robert Downey Jr.)", 'Teen Choice Award (2012): Película del Verano (Acción), Estrella de Película del Verano (Chris Hemsworth)'],
        iconSrc: {web: true, src: 'https://img.icons8.com/offices/50/000000/avengers.png'}, //el tamaño se cambia con el número ..offices/numero/000...
        imgFile: 'theAvengers.jpg',
        urlNetflix: {existe: true, url:'https://www.netflix.com/watch/70217913?trackId=13752289&tctx=0%2C1%2C4cf5b366d4f4705bfb71a19bb69ae4e12611446d%3A6fd17c6697acbf4662a0b34e86b3423a811335c9%2C%2C'},
        urlYoutube: {existe: true, url:'https://www.youtube.com/watch?v=eOrNdBpGMv8'}
    },
    {
        id: 2,
        name: 'Spider-Man',
        genre: ['action', 'superheroes', 'science fiction', 'exciting', 'drama'],
        dateRelease: '15 de mayo de 2002 (Argentina)',
        country: 'Estados Unidos',
        director: 'Sam Raimi',
        protagonists: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco', 'Cliff Robertson', 'Rosemary Harris', 'J. K. Simmons'],
        plot: 'Un tímido estudiante se vuelve en un luchador contra el crimen, desde que la picadura de una araña mutante le da poderes extraordinarios.',
        duration: '2h 1min',
        language: 'Inglés',
        awards: ["People's Choice a la Película Favorita"],
        iconSrc: {web: true, src: 'https://img.icons8.com/ios-filled/50/000000/spiderman-new.png'},
        imgFile: 'spiderman.jpg',
        urlNetflix: {existe: true, url: 'https://www.netflix.com/watch/60004481?trackId=13752289&tctx=0%2C0%2Cee6ef0bfff953740d08b534bebd3b3713d579887%3Ae09a75f9b582a8dfded619f56463d40900d234b1%2C%2C'},
        urlYoutube: {existe: true, url: 'https://www.youtube.com/watch?v=TYMMOjBUPMM'}
    },
    {
        id: 3,
        name: 'Toy Story',
        genre: ['adventure', 'comedy', 'animation', 'children'],
        dateRelease: '22 de noviembre de 1995 (Hollywood)',
        country: 'Estados Unidos',
        director: 'John Lasseter',
        protagonists: ['Tom Hanks', 'Tim Allen', 'Don Rickles', 'Jim Varney', 'Wallace Shawn', 'John Ratzenberger', 'Annie Potts', 'John Morris', 'Erik Von Detten', 'Laurie Metcalf', 'R. Lee Ermey', 'Sarah Freeman'],
        plot: 'El filme comienza con una misión de reconocimiento llevada a cabo por un grupo de juguetes, encabezados por el vaquero Woody, para identificar los obsequios recibidos por su dueño, Andy, con motivo de la fiesta de su séptimo cumpleaños. Entre los regalos se encuentra una figura de acción, el guerrero espacial Buzz Lightyear, que al poco tiempo se convierte en el nuevo juguete favorito de Andy. Si bien la mayoría de los juguetes, entre ellos Bo Peep, Mr. Potato Head, Hamm, Slinky y Rex, reciben con entusiasmo al nuevo integrante, Woody en cambio lo percibe como una amenaza tras haberlo reemplazado como el juguete predilecto de Andy, por lo que decide deshacerse de él. Por otro lado, Buzz desconoce su identidad como un juguete y cree que su objetivo es regresar de vuelta a su planeta de origen.',
        duration: '1h 21min',
        language: 'Inglés',
        awards: ['Premios de la academia: Logro Especial en 1996 (John Lasseter), "Para el desarrollo y aplicación de técnicas de inspiración que han hecho posible el primer largometraje animado por computadora película"', 'Premios Annie: Mejor Película de Animación, Mejor Logro Individual: Animación (Pete Docter), Directivo (John Lasseter), Música (Randy Newman), Producir (Bonnie Arnold y Ralph Guggenheim), Diseño de Producción (Ralph Eggleston), Escritura (Joel Cohen, Alec Sokolow, Andrew Stanton y Joss Whedon), Logro Técnico'],
        iconSrc: {file: true, src: 'botas.png'},
        imgFile: 'toyStory.jpg',
        urlNetflix: {existe: true, url: 'https://www.netflix.com/watch/60036637?trackId=13752289&tctx=0%2C0%2Ca5cb1e5396d5cf6cdb3f3a79f48b8373641ca137%3A9cb5f3b9f8ac7022868fefe3cf34dbb52326bde7%2C%2C'},
        urlYoutube: {existe: true, url: 'https://www.youtube.com/watch?v=4KPTXpQehio'}
    },
    {
        id: 4,
        name: 'Up!',
        genre: ['popular', 'comedy', 'trending'],
        dateRelease: '1998',
        country: '',
        director: '',
        protagonists: [''],
        plot: '',
        duration: '',
        language: '',
        awards: [''],
        iconSrc: {},
        imgFile: 'up.jpg',
        urlNetflix: {},
        urlYoutube: {}   
    },
    {
        id: 5,
        name: '3 metros sobre el cielo',
        genre: ['popular', 'romance', 'drama'],
        dateRelease: '3 de diciembre de 2010 (España)',
        country: 'España',
        director: 'Fernando González Molina',
        protagonists: ['Mario Casas', 'María Valverde', 'Álvaro Cervantes', 'Marina Salas'],
        plot: 'En Barcelona, dos jóvenes que pertenecen a mundos opuestos se conocen. Él, es un joven apuesto y problemático con tendencias violentas llamado Hugo ("H"), y ella, es una niña de bien llamada Babi. Hugo y Babi vivirán una relación intensa con la que aprenderán lo que significa el primer amor.',
        duration: '1h 59min',
        language: 'Español',
        awards: ['Premio Capital, 2011, Mejor actor (Mario Casas)', 'Premio Capital 2011 Mejor actriz revelacion (Andrea Duro)', 'Semana del Cine de Melilla, 2011, Premio del Público a la mejor película española'],
        iconSrc: {web: true, src: 'https://img.icons8.com/ios-filled/50/000000/motorcycle.png'},
        imgFile: '3metrosSobreElCielo.jpg',
        urlNetflix: {existe: false, msg:''},
        urlYoutube: {existe: true, url: 'https://www.youtube.com/watch?v=fKOZfhKDZ9Q'}
    },
    {
        id: 6,
        name: 'Titanic',
        genre: ['popular', 'drama', 'romance', 'classic'],
        dateRelease: '5 de febrero de 1998',
        country: '',
        director: 'James Cameron',
        protagonists: [''],
        plot: '',
        duration: '',
        language: '',
        awards: [''],
        iconSrc: {},
        imgFile: 'titanic.jpg',
        urlNetflix: {},
        urlYoutube: {}
    },
    {
        id: 7,
        name: 'Contratiempo',
        genre: ['suspense'],
        dateRelease: '10 de agosto de 2017',
        country: 'España',
        director: 'Oriol Paulo',
        protagonists: [''],
        plot: '',
        duration: '',
        language: '',
        awards: [''],
        iconSrc: {},
        imgFile: 'contratiempo.jpg',
        urlNetflix: {existe: true, url: 'https://www.netflix.com/watch/80093106?trackId=13752289&tctx=0%2C0%2C2095f8ce8d0626ec7cdf0f05b9d93f094de66563%3A3aa3566af4557216e7204e85d7e2b9d61ff948a4%2C%2C'},
        urlYoutube: {}
    },
    {
        id: 8,
        name: 'Batman, el Caballero de la Noche Asciende',
        genre: ['trending', 'suspense', 'action'],
        dateRelease: '26 de julio de 2012',
        country: '',
        director: 'Christopher Nolan',
        protagonists: [''],
        plot: '',
        duration: '',
        language: '',
        awards: [''],
        iconSrc: {},
        imgFile: 'batmanElCaballeroAsc.jpg',
        urlNetflix: {},
        urlYoutube: {}
    },
    {
        id: 9,
        name: 'Thor',
        genre: ['science fiction', 'action', 'superheroes'],
        dateRelease: '17 de abril de 2011',
        country: 'Estados Unidos',
        director: 'Kenneth Branagh',
        protagonists: [''],
        plot: 'Tras desatar una antigua guerra, el codicioso guerrero Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Allí, sin sus poderes, Thor deberá enfrentarse a las fuerzas más oscuras que su mayor enemigo le enviará desde Asgard.',
        duration: '1h 55min',
        language: '',
        awards: [''],
        iconSrc: {web: true, src: 'https://img.icons8.com/material-rounded/48/000000/law.png'},
        imgFile: 'thor.jpg',
        urlNetflix: {existe: true, url: 'https://www.netflix.com/watch/70141586?trackId=13752289&tctx=1%2C1%2C4cf5b366d4f4705bfb71a19bb69ae4e12611446d%3A0c331564926727b9d5f866ebd8e77a9f01237b8e%2C%2C'},
        urlYoutube: {existe: true, url: 'https://www.youtube.com/watch?v=JOddp-nlNvQ'}
    },
    {
        id: 10,
        name: 'El gran Gatsby',
        genre: ['drama', 'romance'],
        dateRelease: '16 de mayo de 2013',
        country: '',
        director: 'Baz Luhrmann',
        protagonists: [''],
        plot: 'Nick Carraway (Tobey Maguire), nativo del Medio Oeste, llega a Nueva York en 1922 en busca del sueño americano. Nick, un aspirante a escritor, se muda al lado del millonario Jay Gatsby (Leonardo DiCaprio) y al otro lado de la bahía de su prima Daisy (Carey Mulligan) y su esposo mujeriego, Tom (Joel Edgerton). Nick se involucra en un mundo cautivador de riqueza y -- mientras observa sus ilusiones y engaños -- escribe una historia de amor imposible, sueños y tragedia.',
        duration: '2h 23m',
        language: '',
        awards: ['Óscar al mejor diseño de producción', 'Óscar al mejor diseño de vestuario'],
        iconSrc: {web: true, src: 'https://img.icons8.com/material-rounded/48/000000/average-2.png'},
        imgFile: 'elGranGatsby.jpg',
        urlNetflix: {existe: true, url: 'https://www.netflix.com/watch/70244437?trackId=14170286&tctx=2%2C2%2C93c5099b-8f84-4684-a59e-8ced44539a02-57642481%2C4fd17f35-2bae-411a-9903-be44945770d4_29187538X3XX1584755874162%2C4fd17f35-2bae-411a-9903-be44945770d4_ROOT'},
        urlYoutube: {existe: true, url: 'https://www.youtube.com/watch?v=TYMMOjBUPMM'}
    },
];