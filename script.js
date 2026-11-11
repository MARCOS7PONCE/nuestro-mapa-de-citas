const citas = {
    1: {
        titulo: "Café y paseo",
        descripcion: "Vamos por un café, caminamos juntos y dejamos que la conversación decida el resto del día."
    },

    2: {
        titulo: "Cena sorpresa",
        descripcion: "Uno de los dos elige dónde cenar. El otro no puede preguntar nada hasta llegar."
    },

    3: {
        titulo: "Noche de película",
        descripcion: "Elegimos una película que ninguno de los dos haya visto y hacemos una noche tranquila juntos."
    },

    4: {
        titulo: "Plan improvisado",
        descripcion: "Salimos sin tener decidido exactamente qué vamos a hacer y elegimos el plan sobre la marcha."
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
