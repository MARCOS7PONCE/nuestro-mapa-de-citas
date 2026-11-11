const citas = [
    {
        titulo: "Recrear la primera cita",
        descripcion: "Vamos a recrear nuestra primera cita juntos."
    },
    {
        titulo: "Picnic",
        descripcion: "Preparamos algo rico y buscamos un lugar bonito para hacer un picnic."
    },
    {
        titulo: "Turistas en la ciudad",
        descripcion: "Vamos a recorrer nuestra propia ciudad como si fuéramos turistas."
    },
    {
        titulo: "Atardecer y carta",
        descripcion: "Buscamos un lugar bonito para ver el atardecer y nos escribimos una carta."
    },
    {
        titulo: "Visitar un museo",
        descripcion: "Vamos a conocer un museo y descubrir algo nuevo juntos."
    },
    {
        titulo: "Mirador improvisado",
        descripcion: "Elegimos un mirador sin planear demasiado y vamos a descubrir qué pasa."
    },
    {
        titulo: "Panadería nueva",
        descripcion: "Buscamos una panadería que ninguno de los dos conozca y probamos algo."
    },
    {
        titulo: "Cafetería nueva",
        descripcion: "Elegimos una cafetería nueva para nosotros y pasamos un rato juntos."
    },
    {
        titulo: "Hacer aviones de papel y competir",
        descripcion: "Hacemos nuestros propios aviones de papel y competimos para ver cuál llega más lejos."
    },
    {
        titulo: "Vamos por helado",
        descripcion: "Salimos por un helado y disfrutamos el paseo."
    },
    {
        titulo: "Cita de lectura en silencio",
        descripcion: "Cada uno lleva algo para leer y compartimos un rato juntos en silencio."
    },
    {
        titulo: "Sesión de fotos urbana",
        descripcion: "Salimos por la ciudad a tomarnos fotos y descubrir lugares interesantes."
    },
    {
        titulo: "Vamos por una marquesita",
        descripcion: "Vamos por una marquesita y disfrutamos el antojo juntos."
    },
    {
        titulo: "Visita a una librería",
        descripcion: "Visitamos una librería y buscamos libros que nos llamen la atención."
    },
    {
        titulo: "Pintamos juntos",
        descripcion: "Buscamos algo que podamos pintar y hacemos nuestra propia obra juntos."
    },
    {
        titulo: "Paseo en bici",
        descripcion: "Salimos a dar un paseo en bicicleta y disfrutamos el camino."
    },
    {
        titulo: "Conozcamos un parque nuevo",
        descripcion: "Elegimos un parque en el que nunca hayamos estado y vamos a explorarlo."
    },
    {
        titulo: "Churro en el mirador de los arcos",
        descripcion: "Vamos por un churro y lo disfrutamos en el mirador de los arcos."
    },
    {
        titulo: "Jugar tenis",
        descripcion: "Vamos a jugar tenis y a pasarla bien, aunque no seamos profesionales."
    },
    {
        titulo: "Jugar fútbol",
        descripcion: "Nos ponemos a jugar fútbol juntos."
    },
    {
        titulo: "Película al azar en el cine",
        descripcion: "Elegimos una película al azar y vamos al cine sin saber exactamente qué veremos."
    },
    {
        titulo: "Visitemos amigos",
        descripcion: "Visitamos a algunos amigos y compartimos un rato juntos."
    },
    {
        titulo: "Vamos al gym",
        descripcion: "Vamos juntos al gym y hacemos una sesión diferente."
    },
    {
        titulo: "Vamos a Home Depot",
        descripcion: "Vamos a Home Depot y buscamos algo divertido o útil para hacer juntos."
    },
    {
        titulo: "Caminar en plaza comercial",
        descripcion: "Vamos a caminar por una plaza comercial, ver tiendas y pasar el rato juntos."
    },
    {
        titulo: "Cocinar juntos",
        descripcion: "Elegimos algo que queramos cocinar y lo preparamos juntos."
    },
    {
        titulo: "Ir a bailar",
        descripcion: "Salimos a bailar y simplemente disfrutamos la noche."
    },
    {
        titulo: "Misericordia en equipo",
        descripcion: "Hacemos una actividad de servicio juntos y buscamos una oportunidad para ayudar a alguien."
    }
];

function mezclarCitas(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

function obtenerCitasAsignadas() {
    const guardadas = localStorage.getItem("citasEntreSemana");

    if (guardadas) {
        return JSON.parse(guardadas);
    }

    const mezcladas = mezclarCitas(citas);

    localStorage.setItem(
        "citasEntreSemana",
        JSON.stringify(mezcladas)
    );

    return mezcladas;
}

function mostrarCita(numero) {
    const citasAsignadas = obtenerCitasAsignadas();
    const posicion = Number(numero) - 1;
    const cita = citasAsignadas[posicion];

    if (!cita) {
        document.getElementById("titulo-cita").textContent = "Cita no encontrada";
        document.getElementById("descripcion-cita").textContent =
            "Parece que este número todavía no tiene una cita asignada.";
        return;
    }

    document.getElementById("titulo-cita").textContent = cita.titulo;
    document.getElementById("descripcion-cita").textContent = cita.descripcion;
}
