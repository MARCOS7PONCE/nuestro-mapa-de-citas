const citas = {
    1: {
        titulo: "Elote en el centro",
        descripcion: "Vamos por un elote al centro."
    },

    2: {
        titulo: "Chocolate mexicano",
        descripcion: "Vamos a comer chocolate mexicano."
    },

    3: {
        titulo: "Mirador",
        descripcion: "Vamos a un mirador."
    },

    4: {
        titulo: "Paseo por el parque",
        descripcion: "Vamos a caminar por un parque."
    },

    5: {
        titulo: "Tarde de patines",
        descripcion: "Vamos a andar en patines."
    },

    6: {
        titulo: "Día de museo",
        descripcion: "Vamos a un museo."
    },

    7: {
        titulo: "Helado juntos",
        descripcion: "Vamos por un helado."
    },

    8: {
        titulo: "Noche de juegos de mesa",
        descripcion: "Jugamos juegos de mesa juntos."
    },

    9: {
        titulo: "Algo creativo",
        descripcion: "Hacemos algo creativo, como pintar."
    },

    10: {
        titulo: "Actividad cultural",
        descripcion: "Buscamos algún concierto, presentación de arte, exposición u otra actividad cultural que esté ocurriendo."
    }
};

function mostrarCita(numero) {
    const cita = citas[numero];

    if (!cita) {
        return;
    }

    document.getElementById("titulo-cita").textContent = cita.titulo;
    document.getElementById("descripcion-cita").textContent = cita.descripcion;
}
