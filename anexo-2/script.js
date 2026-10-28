//Ejercicio 1
async function crearTarea(tarea){
    const respuesta = await fetch("http://localhost:3000/tareas", {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            texto: tarea,
            hecha: false,
        }),
    });
    const tareaCreada = await respuesta.json();
    console.log("tarea creada", tareaCreada);
    return tareaCreada;
}

//crearTarea('HacerLaTareaDeDS');


//DELETE---------------------------------------------------------

async function borrarTarea(id) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE" 
        });
    
    if (!respuesta.ok){
        throw new Error(`Error al borrar la tarea ${respuesta.status}`);
    }
    console.log("tarea eliminada", id);
}

//borrarTarea('bWUBmhBBR6k');

//PATCH----------------------------------------------------------

async function marcarTareaHecha(id, estado) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            hecha: estado,
        }),
    });

    const tareaMarcada = await respuesta.json();
    console.log(tareaMarcada);
    return tareaMarcada;
}

//marcarTareaHecha('1H7NAZqqCPU', true);

//PUT----------------------------------------------------------------------

async function modificarTarea(id, estado, cambioTarea) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            texto: cambioTarea,
            hecha: estado,
        }),
    });

    const tareaModificada = await respuesta.json();
    console.log(tareaModificada);
    console.log("tarea modificada | id: ", id);
    return tareaModificada;
}

//modificarTarea('1H7NAZqqCPU', true, 'HacerLaTareaDeLengua');


//----------------------------------------------------------------
/*
**Preguntas para pensarlo**

- ¿De dónde salieron los `id`? ¿Los mandaste vos? ¿Cómo te enteraste de cuál
le tocó a cada una?
- ¿Por qué el `POST` va a `/tareas` y el `PATCH` a `/tareas/` + `id`?
- Abrí `http://localhost:3000/tareas` en el navegador después de cada paso.
¿Qué método está usando el navegador ahí?
*/

/*1. Los id los asigno el programa automaticamente y no lo mandamos nosotros.
En el db.json cuando se creaba un jfske aparece un coso donde aparece el id...
2.El POST va a tareas porque en el db.json creamos una lista llamada "tareas" y ahi dentro 
se guardaba todo lo que creaba/modificaba/eliminaba. En cambio para el PATCH se necesitaba
especificar el id para que el programa sepa cual tenia que modificar
3.El navegador esta usando el metodo dkawkaw
*/


// Ejercicio 2

async function crearTarea2(tarea){
    const respuesta = await fetch("http://localhost:3000/tareas", {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: {
            texto: tarea,
            hecha: false,
        },
    });
    const tareaCreada = await respuesta.json();
    console.log("tarea creada", tareaCreada);
    return tareaCreada;
}

crearTarea2('HOLA');