let cantidadesNecesariasGlobal = {};
let printData = {}; // Datos para impresión
let randomOrderNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
cantidadEspeficicada = {}
cantidadBruta = {};
observaciones = {};
document.addEventListener("DOMContentLoaded", () => {
    const postgree = document.getElementById("postgree");
    const createOrderButton = document.getElementById("createOrderButton");
    const searchSection = document.getElementById("searchSection");
    const newFichaButton = document.getElementById("newFichaButton");
    const newFichaForm = document.getElementById("newFichaForm");
    const backSearchButton = document.getElementById("backSearchButton");
    const backNewFichaButton = document.getElementById("backNewFichaButton");
    const materialesForm = document.getElementById("materialesForm");
    const saveProp = document.getElementById("saveProp");
    const proporcionesMATS = document.getElementById("proporcionesMATS");
    const continueAction = document.getElementById("continueAction");
    const calculadoraDeProporciones = document.getElementById("calculadoraDeProporciones");
    const cantiDAD = document.getElementById("cantiDAD");
    const h2cantidad = document.getElementById("h2cantidad");
    const crearOrden = document.getElementById("crearOrden");
    const downloadButton = document.getElementById("downloadButton");
    const ifEscotes = document.getElementById("ifEscotes");
    const escote1 = document.getElementById("escote1");
    const escote2 = document.getElementById("escote2");
    const buttonAddEscote = document.getElementById("buttonAddEscote");
    const ifBuje = document.getElementById("ifBuje");
    const buje = document.getElementById("buje");
    const ifCodigo = document.getElementById("ifCodigo");
    const CODIGO = document.getElementById("CODIGO");
    const ifPesoRecorte = document.getElementById("ifPesoRecorte");
    const pesoRecorte = document.getElementById("pesoRecorte");
    const ifTermico = document.getElementById("ifTermico");
    const tratamientoTermico = document.getElementById("tratamientoTermico");
    const diametroRecorte = document.getElementById("diametroRecorte");
    const ifPesoPiso = document.getElementById("ifPesoPiso");
    const pesoPiso = document.getElementById("pesoPiso");
    const pesoPared = document.getElementById("pesoPared");
    const searchByMedidas = document.getElementById("searchByMedidas")
    const manosALaObra = document.getElementById("manosALaObra");
    const mensaje = document.getElementById("mensaje");
    const borrarFichas = document.getElementById("borrarFichas");
    const backToTheEnd = document.getElementById("backToTheEnd");
    const reactorA210 = document.getElementById("reactorA210")


    let fichaValue = "";

    createOrderButton.addEventListener("click", () => {
        medidasInput.style.display = "none";
        createOrderButton.style.display = "none";
        newFichaButton.style.display = "none";
        searchSection.style.display = "block";
        newFichaForm.style.display = "none";
        manosALaObra.style.display = "none";
        borrarFichas.style.display = "none";
    });
    newFichaButton.addEventListener("click", () => {
        newFichaButton.style.display = "none";
        createOrderButton.style.display = "none";
        newFichaForm.style.display = "block";
        searchSection.style.display = "none";
        manosALaObra.style.display = "none";
        borrarFichas.style.display = "none";
        backNewFichaButton.style.display = "none";
    });
    backSearchButton.addEventListener("click", function () {
        window.location.reload();
    });
    backNewFichaButton.addEventListener("click", function () {
        window.location.reload()
    });
    backToTheEnd.addEventListener("click", () => {
        window.location.reload();
    })
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        const fichainput = document.getElementById("fichaInput").value;
        const fechaInput = document.getElementById("fechaInput").value; // Captura la fecha ingresada
        const clientesTo = document.getElementById("clientesTo").value;
        if (fichainput) {
            fetch(`http://localhost:3000/get_data?ficha=${fichainput}`)
                .then(response => response.json())
                .then(jsonData => {
                    const dataElement = document.getElementById("data");
                    dataElement.style.display = "block";
                    dataElement.innerHTML = "";

                    if (jsonData.length > 0) {
                        const item = jsonData[0];
                        const divElement = document.createElement("div");
                        divElement.className = "item";
                        divElement.innerHTML = `
                            <p class="data-title">Ficha: ${item.ficha}</p>
                            <p class="data-title">Tipo: ${item.tipo}</p>
                            <p class="data-title">Medida: ${item.medidas}</p>
                            <p class="data-title">Caracteristicas: ${item.caracteristicas}</p>
                            <p class="data-title">Prensa: ${item.prensa}</p>
                            <p class="data-title">presion: ${item.presion}</p>
                            <p class="data-title">Peso piso: ${item.pesoPiso}</p>
                            <p class="data-title">Peso pared: ${item.pesoPared}</p>
                            <p class="data-title">Peso Total: ${item.pesoTotal}</p>
                            <p class="data-title">Largo: ${item.largo}</p>
                            <p class="data-title">Altura: ${item.altura}</p>
                            <p class="data-title">Ancho: ${item.ancho}</p>
                            <p class="data-title">Diametro de recorte: ${item.diametroRecorte}</p>
                            <p class="data-title">Buje: ${item.buje}</p>
                            <p class="data-title">Codigo: ${item.CODIGO}</p>
                            <p class="data-title">Peso recorte: ${item.pesoRecorte}</p>
                            <p class="data-title">Tratamiento termico: ${item.tratamientoTermico}</p>
                            <p class="data-title">Escote 1: ${item.escotes1}</p>
                            <p class="data-title">Escote 2: ${item.escotes2}</p>
                        `;
                        // Mostrar los datos de materiales usando un bucle
                        divElement.innerHTML += "<p class='data-title'>Materiales:</p><ul class='data-list'>";
                        for (let i = 1; i <= 12; i++) {
                            const materialKey = `materialesAlter${i}`;
                            const materialValue = item[materialKey];
                            if (materialValue !== "" && materialValue !== "no" && materialValue !== null) {
                                divElement.innerHTML += `<li class='data-list-item'>Material ${i}: ${materialValue}</li>`;
                            }
                        }
                        divElement.innerHTML += "</ul>";

                        // Mostrar los datos de proporciones usando un bucle
                        divElement.innerHTML += "<p class='data-title'>Proporciones:</p><ul class='data-list'>";
                        for (let i = 1; i <= 12; i++) {
                            const proporcionKey = `proporcion${i}`;
                            const proporcionValue = item[proporcionKey];
                            if (proporcionValue !== "null" && proporcionValue !== null && proporcionValue !== 0) {
                                divElement.innerHTML += `<li class='data-list-item'>Proporción ${i}: ${proporcionValue}</li>`;
                            }
                        }
                        divElement.innerHTML += "</ul>";
                        dataElement.appendChild(divElement);
                        // Almacenar los datos para impresión
                        // Almacenar los datos relevantes en printData
                        printData = { ...item };
                    } else {
                        dataElement.innerHTML = "No se encontraron resultados.";
                        printButton.style.display = "none"; // Ocultar el botón si no hay resultados
                    }
                })
                .catch(error => console.error("Error al obtener los datos:", error));
        } else {
            //Para que busque por medidas
            functionSearchByMedidas();
        }
        searchByMedidas.style.display = "none";
        searchButton.style.display = "none";
    });
    searchByMedidas.addEventListener("click", () => {
        searchByMedidas.style.display = "none";
        medidasInput.style.display = "block";
        continueAction.style.display = "none";
        createOrderButton.style.display = "none";
        fichaInput.style.display = "none";
        fechaInput.style.display = "none";
        clientesTo.style.display = "none";
        newFichaButton.style.display = "none";
        newFichaForm.style.display = "none";
        manosALaObra.style.display = "none";
        borrarFichas.style.display = "none";
    })

    function functionSearchByMedidas() {
        // Obtener medidas ingresadas
        const medidasInput = document.getElementById("medidasInput").value;

        // Verificar si se ingresaron medidas
        if (medidasInput) {
            // Realizar la búsqueda por medidas en la base de datos
            fetch(`http://localhost:3000/buscar?medidas=${medidasInput}`)
                .then(response => response.json())
                .then(jsonData => {
                    const dataElement = document.getElementById("data");
                    dataElement.style.display = "block";
                    dataElement.innerHTML = "";
                    if (jsonData.length > 0) {
                        jsonData.forEach(item => {
                            const divElement = document.createElement("div");
                            divElement.className = "item";
                            divElement.innerHTML = `
                                <p class="data-title">Ficha: ${item.ficha}</p>
                                <p class="data-title">Tipo: ${item.tipo}</p>
                                <p class="data-title">Medida: ${item.medidas}</p>
                                <!-- Otras propiedades aquí -->
                            `;
                            dataElement.appendChild(divElement);
                        });
                    } else {
                        dataElement.innerHTML = "No se encontraron resultados.";
                    }
                })
                .catch(error => console.error("Error al obtener los datos:", error));
        } else {
            alert("Debe ingresar una ficha o medidas para realizar la búsqueda.");
        }
    }
});


continueAction.addEventListener("click", () => {
    const reactorN21 = document.getElementById("reactorN21");
    borrarFichas.style.display = "none";
    selectedKey.style.display = "none";
    reactorN21.style.display = "block";
    data.style.display = "none";
    cantiDAD.style.display = "block";
    searchButton.style.display = "none";
    fechaInput.style.display = "none";
    clientesTo.style.display = "none";
    continueAction.style.display = "none";
    newFichaButton.style.display = "none";
    newFichaForm.style.display = "none";
    crearOrden.style.display = "block";
    manosALaObra.style.display = "none";
    borrarFichas.style.display = "none";
});
//cantidades//

crearOrden.addEventListener("click", () => {
    // Obtener la cantidad deseada ingresada por el usuario
    const cantidadDeseada = parseFloat(document.getElementById("cantiDAD").value);

    // Verificar que la cantidad deseada sea válida
    if (isNaN(cantidadDeseada) || cantidadDeseada <= 0) {
        alert("Por favor, ingrese una cantidad válida mayor que cero.");
        return;
    }

    // Obtener la ficha seleccionada ingresada por el usuario
    const fichaInput = document.getElementById("fichaInput").value;
    // Realizar la solicitud para obtener los materiales de la ficha seleccionada
    fetch(`http://localhost:3000/get_data?ficha=${fichaInput}`)
        .then(response => response.json())
        .then(jsonData => {
            if (jsonData.length > 0) {
                const item = jsonData[0];

                // Calcular las cantidades necesarias de materiales
                const cantidadesObject = {};
                for (let i = 1; i <= 12; i++) {
                    const proporcionKey = `proporcion${i}`;
                    const proporcionValue = item[proporcionKey];

                    // Calcular la cantidad necesaria de cada material
                    const cantidadNecesaria = cantidadDeseada * proporcionValue;

                    // Almacenar la cantidad necesaria en el objeto "cantidadesObject"
                    cantidadesObject[`Material${i}`] = cantidadNecesaria;
                }
                // Agregar la cantidad deseada al objeto
                cantidadBruta['CantidadDeseada'] = cantidadDeseada;

                // Asignar el objeto a la variable global
                cantidadesNecesariasGlobal = cantidadesObject;

            } else {
                alert("Ocurrio un problema")
            }
        })
        .catch(error => console.error("Error al obtener los datos:", error));
    cantidadEspeficicada = cantidadDeseada.value
    reactorN21.style.display = "none";
    reactorA210.style.display = "block";
});

const saveButton = document.getElementById("saveButton");
const fichaForm = document.getElementById("fichaForm");
saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    materialesForm.style.display = "block";
    fichaForm.style.display = "none";
    proporcionesMATS.style.display = "block";

    // Obtener los valores del formulario
    const fichaValue = document.getElementById("ficha").value;
    const tipoValue = document.getElementById("tipo").value;
    const medidasValue = document.getElementById("medidas").value;
    const caracteristicasValue = document.getElementById("caracteristicas").value;
    const prensaValue = document.getElementById("prensa").value;
    const presionValue = document.getElementById("presion").value;
    const pesoPisoValue = document.getElementById("pesoPiso").value;
    const pesoParedValue = document.getElementById("pesoPared").value;
    const pesoTotalValue = document.getElementById("pesoTotal").value;
    const largoValue = document.getElementById("largo").value;
    const alturaValue = document.getElementById("altura").value;
    const anchoValue = document.getElementById("ancho").value;
    const diametroRecorteValue = document.getElementById("diametroRecorte").value;
    const bujeValue = document.getElementById("buje").value;
    const CODIGOValue = document.getElementById("CODIGO").value;
    const pesoRecorteValue = document.getElementById("pesoRecorte").value;
    const tratamientoTermicoValue = document.getElementById("tratamientoTermico").value;
    const escote1 = document.getElementById("escote1").value;
    const escote2 = document.getElementById("escote2").value;

    const formData = {
        ficha: fichaValue,
        tipo: tipoValue,
        medidas: medidasValue,
        caracteristicas: caracteristicasValue,
        prensa: prensaValue,
        presion: presionValue,
        pesoPiso: pesoPisoValue,
        pesoPared: pesoParedValue,
        pesoTotal: pesoTotalValue,
        largo: largoValue,
        altura: alturaValue,
        ancho: anchoValue,
        diametroRecorte: diametroRecorteValue,
        buje: bujeValue,
        CODIGO: CODIGOValue,
        pesoRecorte: pesoRecorteValue,
        tratamientoTermico: tratamientoTermicoValue,
        escote1: escote1,
        escote2: escote2,
    };
    fetch("http://localhost:3000/save_ficha", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
        })
        .catch(error => console.error("Error al guardar en la base de datos:", error));

    //
    proporcionesMATS.style.display = "none"
});
const saveMats = document.getElementById("saveMats");
saveMats.addEventListener("click", (event) => {
    event.preventDefault();
    //Obtener los valores del formulario de los materiales
    const materialesAlter1 = document.getElementById("materialesAlter1").value;
    const materialesAlter2 = document.getElementById("materialesAlter2").value;
    const materialesAlter3 = document.getElementById("materialesAlter3").value;
    const materialesAlter4 = document.getElementById("materialesAlter4").value;
    const materialesAlter5 = document.getElementById("materialesAlter5").value;
    const materialesAlter6 = document.getElementById("materialesAlter6").value;
    const materialesAlter7 = document.getElementById("materialesAlter7").value;
    const materialesAlter8 = document.getElementById("materialesAlter8").value;
    const materialesAlter9 = document.getElementById("materialesAlter9").value;
    const materialesAlter10 = document.getElementById("materialesAlter10").value;
    const materialesAlter11 = document.getElementById("materialesAlter11").value;
    const materialesAlter12 = document.getElementById("materialesAlter12").value;
    const formData = {
        materialesAlter1: materialesAlter1,
        materialesAlter2: materialesAlter2,
        materialesAlter3: materialesAlter3,
        materialesAlter4: materialesAlter4,
        materialesAlter5: materialesAlter5,
        materialesAlter6: materialesAlter6,
        materialesAlter7: materialesAlter7,
        materialesAlter8: materialesAlter8,
        materialesAlter9: materialesAlter9,
        materialesAlter10: materialesAlter10,
        materialesAlter11: materialesAlter11,
        materialesAlter12: materialesAlter12,
    };
    fetch("http://localhost:3000/save_materiales", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("respuesta del servidor", data)
        })
        .catch(error => console.error("error al guardar los materiales", error))
    // Para enviar datos de proporciones
    proporcionesMATS.style.display = "block"

    saveProp.addEventListener("click", (event) => {
        event.preventDefault();
        //obtener los datos de los parametros....//
        const proporcion1 = document.getElementById("proporcion1").value
        const proporcion2 = document.getElementById("proporcion2").value
        const proporcion3 = document.getElementById("proporcion3").value
        const proporcion4 = document.getElementById("proporcion4").value
        const proporcion5 = document.getElementById("proporcion5").value
        const proporcion6 = document.getElementById("proporcion6").value
        const proporcion7 = document.getElementById("proporcion7").value
        const proporcion8 = document.getElementById("proporcion8").value
        const proporcion9 = document.getElementById("proporcion9").value
        const proporcion10 = document.getElementById("proporcion10").value
        const proporcion11 = document.getElementById("proporcion11").value
        const proporcion12 = document.getElementById("proporcion12").value
        const formData = {
            proporcion1: proporcion1,
            proporcion2: proporcion2,
            proporcion3: proporcion3,
            proporcion4: proporcion4,
            proporcion5: proporcion5,
            proporcion6: proporcion6,
            proporcion7: proporcion7,
            proporcion8: proporcion8,
            proporcion9: proporcion9,
            proporcion10: proporcion10,
            proporcion11: proporcion11,
            proporcion12: proporcion12,
        };
        fetch("http://localhost:3000/save_proporciones", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("respuesta del servidor", data)
            })
            .catch(error => console.error("error al guardar los materiales", error))
    });
    materialesForm.style.display = "none"
});
// const borrarFichas = document.getElementById("borrarFichas")
// const mostrarPseudo = document.getElementById("mostrarPseudo")
// const postgree = document.getElementById("postgree");

// borrarFichas.addEventListener("click", () => {
//     mostrarPseudo.style.display = "block";
//     postgree.style.display = "none"
// });

// // Borrar fichas no deseadas
// const selectedKey = document.getElementById("selectedKey");

//     selectedKey.addEventListener("click", () => {
//         const fichaValue = document.getElementById("fichaInputToDelete").value;

//         console.log("Ficha Value:", fichaValue);

//         if (fichaValue) {
//             fetch(`http://localhost:3000/eliminar_ficha?ficha=${fichaValue}`, {
//                 method: "DELETE",
//             })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Server Response:", data);
//             })
//             .catch((error) => {
//                 console.error("Error al procesar la respuesta del servidor: ", error);
//             });
//         } else {
//             console.warn("Ingrese una ficha válida."); // Muestra un mensaje en la consola del navegador
//         }
//     });
const enviarObser = document.getElementById("enviarObser")

enviarObser.addEventListener("click", () => {
    const observacionesFicha = document.getElementById("observacionesFicha").value;
    observaciones['ObservacionesFicha'] = observacionesFicha;
    mensaje.style.display = "block";
    downloadButton.style.display = "block";
});



ifEscotes.addEventListener("click", () => {
    event.preventDefault();
    escote1.style.display = "block";
    buttonAddEscote.style.display = "block";
    ifEscotes.style.display = "none";
});

buttonAddEscote.addEventListener("click", () => {
    event.preventDefault();
    escote2.style.display = "block";
    buttonAddEscote.style.display = "none";
})
ifBuje.addEventListener("click", () => {
    event.preventDefault();
    buje.style.display = "block"
    ifBuje.style.display = "none";
})
ifCodigo.addEventListener("click", () => {
    event.preventDefault();
    CODIGO.style.display = "block";
    ifCodigo.style.display = "none";
})
ifPesoRecorte.addEventListener("click", () => {
    event.preventDefault();
    diametroRecorte.style.display = "block";
    pesoRecorte.style.display = "block";
    ifPesoRecorte.style.display = "none";
})
ifTermico.addEventListener("click", () => {
    event.preventDefault();
    tratamientoTermico.style.display = "block"
    ifTermico.style.display = "none";
})
ifPesoPiso.addEventListener("click", (event) => {
    event.preventDefault();
    pesoPiso.style.display = "block";
    ifPesoPiso.style.display = "none";
    pesoPared.style.display = "block"

})
downloadButton.addEventListener("click", () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`<!DOCTYPE html>
    <html lang="es">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ficha Técnica de Abrasivos</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
            }
    
            #contenedor-principal {
                border: 1px solid #000;
                /* Línea del recuadro */
                padding: 20px;
                /* Espaciado dentro del recuadro */
                margin: 20px;
                /* Márgenes alrededor del recuadro */
             
            }
    
            .order-sheet {
                font-family: Arial, sans-serif;
                margin: auto;
                padding: 20px;
                border: 1px solid #ccc;
                width: 100%;
            }
    
            .recuadro {
                display: flex;
                flex-wrap: wrap;
                background-color: #f0f0f0;
                border: 1px solid #ccc;
                margin: 10px;
                padding: 10px;
            }
    
            /* Estilos para la sección de materiales */
            #materialesSection {
                background-color: #fff;
                padding: 20px;
                margin: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 600px;
                /* Puedes ajustar este valor según tus preferencias */
                margin: 0 auto;
                /* Centra la sección horizontalmente */
            }
    
            /* Estilos para la sección de materiales */
            #materialesSection {
                background-color: #fff;
                padding: 20px;
                margin: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
            }
    
            /* Estilos para el título de la sección de materiales */
            #materialesSection h2 {
                margin-top: 0;
            }
    
            /* Estilos para la lista de materiales */
            #materialesList {
                list-style-type: none;
                padding: 0;
            }
    
            /* Estilos para los elementos de la lista de materiales */
            #materialesList li {
                margin-bottom: 10px;
                font-size: 16px;
                color: #333;
            }
    
            #escotes2 {
                text-align: center;
                /* Centra el contenido horizontalmente */
                border: 1px solid black;
                padding: 20px;
                margin: 0 auto;
                /* Centra horizontalmente */
                width: 200px;
                height: 60px;
            }
    
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
    
            th,
            td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
    
            th {
                background-color: #f1e7e7;
            }
    
            /* Estilo para el contenedor */
            #contenedor {
                display: flex;
            }
    
            .cuadrado {
                width: 450px;
                height: 50px;
                border: 1px solid #000;
                padding: 10px;
                display: inline-block;
                margin: 5px;
                position: relative;
                /* Añadimos la siguiente propiedad para ajustar la posición de la línea */
                padding-left: 20px;
            }
    
            .linea {
                position: absolute;
                width: 1px;
                height: 100%;
                background-color: #000;
                top: 0;
                /* Posición superior en lugar de centrar */
                left: 140px;
            }
    
            .linea2 {
                position: absolute;
                width: 1px;
                height: 100%;
                background-color: #000;
                top: 0;
                left: 130px;
            }
    
            .linea-horizontal {
                width: 130px;
                height: 1px;
                background-color: #000;
                margin: 0;
                margin-top: 35px;
                top: 0;
                left: 130px;
            }
    
            #etiquetado {
                text-align: start;
                font-weight: bold;
                font-size: 120%;
            }
    
            #seccionEtiquetado {
                text-align: start;
            }
    
            #etiquetado {
                text-align: start;
                font-weight: bold;
                font-size: 120%;
            }
    
            #rectificadoPeriferia {
                text-align: end;
                margin: 0;
                margin-top: -50px;
            }
    
            #embujado {
                text-align: start;
                margin: 0;
                margin-top: -90px;
            }
    
            #rectificadoBujeYEscote {
                text-align: end;
                margin: 0;
            }
    
            #rectificadoPlano {
                text-align: start;
                margin-top: -90px;
            }
    
            .fechaInicioEtiquetado {
                margin-left: 260px;
                margin-top: -1px;
            }
    
            .lineaVerticalMalEducada {
                position: absolute;
                width: 1px;
                height: 100%;
                background-color: #000;
                top: 0;
                left: 110px;
            }
    
            .textDerecho {
                display: flex;
                margin: 0;
                margin-top: 5px;
                margin-left: 260px;
            }
    
            .textHora {
                display: flex;
                margin: 0;
                margin-top: -40px;
                margin-left: 365px;
            }
    
            .horaSegunda {
                display: flex;
                margin: 0;
                margin-top: -23px;
                margin-left: 365px;
            }
    
            .horaPrimera {
                display: flex;
                margin: 0;
                margin-top: -40px;
                margin-left: 365px;
            }
    
            .operatorSide {
                display: flex;
                margin: 0;
                margin-top: -27px;
                margin-left: 10px;
            }
    
            .operator {
                display: flex;
                margin: 0;
                margin-top: -30px;
                margin-left: 10px;
            }
    
            .cantidadNoSeVe {
                display: flex;
                margin: 0;
                margin-top: -19px;
                margin-left: 124px;
            }
    
            .scraps {
                display: flex;
                margin: 0;
                margin-top: 19px;
                margin-left: 124px;
            }
    
            hr {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
            }
    
            .numeroOrden {
                margin-left: auto;
            }
    
            .dates {
                display: flex;
            }
    
            .dates p {
                margin-right: 10px;
            }
    
            .ficha {
                display: flex;
            }
    
            .ficha {
                margin-right: 10px;
            }
    
            .cuadrito {
                display: flex;
                flex-wrap: wrap;
                background-color: #f0f0f0;
                border: 1px solid #ccc;
                margin: 10px;
                padding: 10px;
                width: 250px;
                opacity: 0%;
            }
    
            .centrar-contenido {
                text-align: center;
            }
    
            .cuadradoParaEscotes {
                border: 1px solid #000;
                padding: 10px;
                width: 200px;
                margin: 10px auto;
                /* Esto debería centrar el bloque horizontalmente */
            }
            .cuadritos{
                display: flex;
                flex-wrap: wrap;
                background-color: #f0f0f0;
                border: 1px solid #ccc;
                margin: 10px;
                padding: 10px;
                width: 150px;
                opacity: 0%;
            }
            .cuadrin{
                display: flex;
                flex-wrap: wrap;
                background-color: #f0f0f0;
                border: 1px solid #ccc;
                margin: 10px;
                padding: 10px;
                width: 50px;
                opacity: 0%;
            }
            .cuadradaso{
                display: flex;
                background-color: #f0f0f0;
                border: 1px solid #000000;
                margin: 10px;
                padding: 10px;
                width: 120px;
                height: 60px;
            }
        </style>
    </head>
    
    <body>
        <div id="contenedor-principal">
            <div class="recuadro">
                <div>
                    <h1>SAILLEN ABRASIVOS S.R.L</h1>
                    <p>BV DE LOS RUSOS 2895</p>
                </div>
                <div class="numeroOrden">
                    <h2>ORDEN DE TRABAJO</h2>
                    <p>Numero:${randomOrderNumber}</p>
                </div>
                <hr>
                <div class="dates">
                    <p>Fecha: ${printData.fecha}</p>
                    <p>Cliente: ${printData.clientesTo}</p>
                </div>
                <hr>
                <div class="ficha">
                    <p>Ficha: ${printData.ficha}</p>
                    <div>
                        <p>Tipo: ${printData.tipo}</p>
                        <p>Características: ${printData.caracteristicas}</p>
                        <p>Medida: ${printData.medidas}</p>
                    </div>
                    <div class="cuadrito">
    
                    </div>
    
                </div>
                <div class="pandp">
                    <p>Nro Prensa: ${printData.prensa}</p>
                    <p>Presión: ${printData.presion}</p>
                </div>
                <div class="cuadrin"></div>
                <div class="pesoshxr">
                    <p>Peso piso: ${printData.pesoPiso}</p>
                    <p>Peso Pared: ${printData.pesoPared}</p>
                    <p>Peso Total: ${printData.pesoTotal}</p>
                </div>
                <div class="cuadrito">
                </div>
                <div>
                    <p>Cantidad</p>
                <div class="cuadradaso">
                        <p style="font-size: 20px;">${cantidadBruta.CantidadDeseada}</p>
                </div>
            </div>
                <hr>
                <div>
                    <p id="tallest1">Altura: ${printData.altura}</p>
                    <p id="broad">Ancho: ${printData.ancho}</p>
                    <p id="large1">Largo: ${printData.largo}</p>
                </div>
                <div class="cuadritos"></div>
                <div class="centrar-contenido">
                    <h2>Herramental</h2>
                    <p>escotes</p>
                    <p>Peso recorte: ${printData.pesoRecorte}</p>
                    <div class="cuadradoParaEscotes">
                        <p>1º: ${printData.escotes1}</p>
                        <p>2º: ${printData.escotes2}</p>
                    </div>
                </div>
                <div class="cuadrito"></div>
                <div>
                    <p>Buje: ${printData.buje}</p>
                    <p>Codigo: ${printData.CODIGO}</p>
                    
                    <p>Tratamiento termico: ${printData.tratamientoTermico}</p>
                </div>
                <!-- <div>
                        <p>Buje: ${printData.buje}</p>
                        <p>Codigo: ${printData.CODIGO}</p>
                        <p>Peso recorte: ${printData.pesoRecorte}</p>
                        <p>Tratamiento termico: ${printData.tratamientoTermico}</p>
                    </div>
                </div> -->
                <hr>
                <div class="expediciones">
                <p>OBS ${observaciones.ObservacionesFicha}</p>
                    <h3>EXPEDICION</h3>
                    <div class="cuadrito">
    
                    </div>
                    <section id="rectificadoPeriferia">
    
                        <div class="cuadrado">
                            <div class="linea">
                                <div class="linea-horizontal">
                                    <div class="linea2">
                                        <div class="lineaVerticalMalEducada"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="textDerecho">Inicio:_ /_</p>
                            <p class="textDerecho">Fin:_ /_</p>
                            <p class="horaSegunda">Hora:_ /_</p>
                            <div>
                                <p class="horaPrimera">Hora:_ /_</p>
                            </div>
                            <div>
                                <p class="operatorSide">Operario</p>
                            </div>
                            <div>
                                <p class="cantidadNoSeVe">CANT</p>
                            </div>
                            <div>
                                <p class="scraps">SCRAPS</p>
                            </div>
                        </div>
                    </section>
                </div>
    
    
            </div>
            <section id="seccionEtiquetado">
                <p id="etiquetado">Etiquetado</p>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div>
                                <div class="linea2">
                                    <div class="lineaVerticalMalEducada"></div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <p class="fechaInicioEtiquetado"">Inicio:_ /_</p>
                            <p class=" fechaInicioEtiquetado">Fin:_ /_</p>
                    <p class="textHora">Hora:_ /_</p>
                    <p class="textHora">Hora:_ /_</p>
                    <div>
                        <p class="operator">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
    
            <section id="rectificadoPeriferia">
                <p>Rectificado periferia</p>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div class="linea2">
                                <div class="lineaVerticalMalEducada"></div>
                            </div>
                        </div>
                    </div>
                    <p class="textDerecho">Inicio:_ /_</p>
                    <p class="textDerecho">Fin:_ /_</p>
                    <p class="horaSegunda">Hora:_ /_</p>
                    <div>
                        <p class="horaPrimera">Hora:_ /_</p>
                    </div>
                    <div>
                        <p class="operatorSide">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
            <section id="embujado">
                <p>embujado</p>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div class="linea2">
                                <div class="lineaVerticalMalEducada"></div>
                            </div>
                        </div>
                    </div>
                    <p class="fechaInicioEtiquetado"">Inicio:_ /_</p>
                            <p class=" fechaInicioEtiquetado">Fin:_ /_</p>
                    <p class="textHora">Hora:_ /_</p>
                    <p class="textHora">Hora:_ /_</p>
                    <div>
                        <p class="operator">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
    
            <section id="rectificadoBujeYEscote">
                <p>Rectificado buje y escote</p>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div class="linea2">
                                <div class="lineaVerticalMalEducada"></div>
                            </div>
                        </div>
                    </div>
                    <p class="textDerecho">Inicio:_ /_</p>
                    <p class="textDerecho">Fin:_ /_</p>
                    <p class="horaSegunda">Hora:_ /_</p>
                    <div>
                        <p class="horaPrimera">Hora:_ /_</p>
                    </div>
                    <div>
                        <p class="operator">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
    
            <section id="rectificadoPlano">
                <p>Rectificado plano</p>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div class="linea2">
                                <div class="lineaVerticalMalEducada"></div>
                            </div>
                        </div>
                    </div>
                    <p class="fechaInicioEtiquetado"">Inicio:_ /_</p>
                            <p class=" fechaInicioEtiquetado">Fin:_ /_</p>
                    <p class="textHora">Hora:_ /_</p>
                    <p class="textHora">Hora:_ /_</p>
                    <div>
                        <p class="operator">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
    
            <section id="horneadoPPSS">
                <p>Horneado (por planilla de stock en secado)</p>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div class="linea2">
                                <div class="lineaVerticalMalEducada"></div>
                            </div>
                        </div>
                    </div>
                    <p class="textDerecho">Inicio:_ /_</p>
                    <p class="textDerecho">Fin:_ /_</p>
                    <p class="horaSegunda">Hora:_ /_</p>
                    <div>
                        <p class="horaPrimera">Hora:_ /_</p>
                    </div>
                    <div>
                        <p class="operator">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="cuadrado">
                    <div class="linea">
                        <div class="linea-horizontal">
                            <div class="linea2">
                                <div class="lineaVerticalMalEducada"></div>
                            </div>
                        </div>
                    </div>
                    <p class="textDerecho">Inicio:_ /_</p>
                    <p class="textDerecho">Fin:_ /_</p>
                    <p class="horaSegunda">Hora:_ /_</p>
                    <div>
                        <p class="horaPrimera">Hora:_ /_</p>
                    </div>
                    <div>
                        <p class="operator">Operario</p>
                    </div>
                    <div>
                        <p class="cantidadNoSeVe">CANT</p>
                    </div>
                    <div>
                        <p class="scraps">SCRAPS</p>
                    </div>
                </div>
            </section>
    
    
            <h3>Proporciones y Materiales</h3>
    
            <table>
                <tr>
                    <th>Proporción unitaria</th>
                    <th>Proporcion por cantidad</th>
                    <th>Material</th>
                </tr>
                <!-- Repite este bloque para cada proporción y material -->
                <!-- Fila 1 -->
                <tr>
                    <td>${printData.proporcion1 !== 0 ? printData.proporcion1 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material1 !== 0 ? cantidadesNecesariasGlobal.Material1 : ''}</td>
                    <td>${printData.materialesAlter1 !== 'no' ? printData.materialesAlter1 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 2 -->
                <tr>
                    <td>${printData.proporcion2 !== 0 ? printData.proporcion2 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material2 !== 0 ? cantidadesNecesariasGlobal.Material2 : ''}</td>
                    <td>${printData.materialesAlter2 !== 'no' ? printData.materialesAlter2 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 3 -->
                <tr>
                    <td>${printData.proporcion3 !== 0 ? printData.proporcion3 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material3 !== 0 ? cantidadesNecesariasGlobal.Material3 : ''}</td>
                    <td>${printData.materialesAlter3 !== 'no' ? printData.materialesAlter3 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 4 -->
                <tr>
                    <td>${printData.proporcion4 !== 0 ? printData.proporcion4 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material4 !== 0 ? cantidadesNecesariasGlobal.Material4 : ''}</td>
                    <td>${printData.materialesAlter4 !== 'no' ? printData.materialesAlter4 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 5 -->
                <tr>
                    <td>${printData.proporcion5 !== 0 ? printData.proporcion5 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material5 !== 0 ? cantidadesNecesariasGlobal.Material5 : ''}</td>
                    <td>${printData.materialesAlter5 !== 'no' ? printData.materialesAlter5 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 6 -->
                <tr>
                    <td>${printData.proporcion6 !== 0 ? printData.proporcion6 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material6 !== 0 ? cantidadesNecesariasGlobal.Material6 : ''}</td>
                    <td>${printData.materialesAlter6 !== 'no' ? printData.materialesAlter6 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 7 -->
                <tr>
                    <td>${printData.proporcion7 !== 0 ? printData.proporcion7 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material7 !== 0 ? cantidadesNecesariasGlobal.Material7 : ''}</td>
                    <td>${printData.materialesAlter7 !== 'no' ? printData.materialesAlter7 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 8 -->
                <tr>
                    <td>${printData.proporcion8 !== 0 ? printData.proporcion8 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material8 !== 0 ? cantidadesNecesariasGlobal.Material8 : ''}</td>
                    <td>${printData.materialesAlter8 !== 'no' ? printData.materialesAlter8 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 9 -->
                <tr>
                    <td>${printData.proporcion9 !== 0 ? printData.proporcion9 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material9 !== 0 ? cantidadesNecesariasGlobal.Material9 : ''}</td>
                    <td>${printData.materialesAlter9 !== 'no' ? printData.materialesAlter9 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 10 -->
                <tr>
                    <td>${printData.proporcion10 !== 0 ? printData.proporcion10 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material10 !== 0 ? cantidadesNecesariasGlobal.Material10 : ''}</td>
                    <td>${printData.materialesAlter10 !== 'no' ? printData.materialesAlter10 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 11 -->
                <tr>
                    <td>${printData.proporcion11 !== 0 ? printData.proporcion11 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material11 !== 0 ? cantidadesNecesariasGlobal.Material11 : ''}</td>
                    <td>${printData.materialesAlter11 !== 'no' ? printData.materialesAlter11 : ''}</td>
                </tr>
    
                <!-- Repite para las demás filas de la tabla -->
                <!-- Fila 12 -->
                <tr>
                    <td>${printData.proporcion12 !== 0 ? printData.proporcion12 : ''}</td>
                    <td>${cantidadesNecesariasGlobal.Material12 !== 0 ? cantidadesNecesariasGlobal.Material12 : ''}</td>
                    <td>${printData.materialesAlter12 !== 'no' ? printData.materialesAlter12 : ''}</td>
                </tr>
            </table>
        </div>
    </body>
    
    </html>`)

    randomOrderNumber++;
    printWindow.document.close();
});
