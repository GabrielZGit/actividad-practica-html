// Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const mensaje = document.getElementById("mensajeLogin");

        // Credenciales de ejemplo
        if (username === "gabriel" && password === "1234") {

            mensaje.textContent = "Inicio de sesión correcto";
            mensaje.className = "text-success mt-3";

            // Llevar al usuario a la página de perfil
            window.location.href = "profile.html";

        } else {

            mensaje.textContent = "Usuario o contraseña incorrectos";
            mensaje.className = "text-danger mt-3";
        }
    });
}


// Radio de Botones

const radios = document.querySelectorAll('input[name="tipoActividad"]');

const botonRadio = document.getElementById("botonRadio");

radios.forEach(function(radio) {

    radio.addEventListener("change", function() {

        if (botonRadio) {
            botonRadio.disabled = false;
        }

    });

});


// Paises y Regiones

const selectPais = document.getElementById("pais");
const selectRegion = document.getElementById("region");

let datosPaises = [];

if (selectPais && selectRegion) {

    fetch("country-region-data.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            datosPaises = data;

            data.forEach(function(pais) {

                const opcion = document.createElement("option");

                opcion.value = pais.countryShortCode;
                opcion.textContent = pais.countryName;

                selectPais.appendChild(opcion);

            });

        })
        .catch(function(error) {

            console.log("Error al cargar los países:", error);

        });


    selectPais.addEventListener("change", function() {

        selectRegion.innerHTML =
            '<option value="">Selecciona una región</option>';

        const paisSeleccionado = datosPaises.find(function(pais) {

            return pais.countryShortCode === selectPais.value;

        });


        if (paisSeleccionado) {

            paisSeleccionado.regions.forEach(function(region) {

                const opcion = document.createElement("option");

                opcion.value = region.shortCode;
                opcion.textContent = region.name;

                selectRegion.appendChild(opcion);

            });

        }

    });
}


// Checkbox

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const botonEnviar = document.getElementById("botonEnviar");

function revisarCheckboxes() {

    if (checkbox1 && checkbox2 && botonEnviar) {

        if (checkbox1.checked && checkbox2.checked) {

            botonEnviar.disabled = false;

        } else {

            botonEnviar.disabled = true;

        }

    }

}


if (checkbox1 && checkbox2) {

    checkbox1.addEventListener("change", revisarCheckboxes);
    checkbox2.addEventListener("change", revisarCheckboxes);

}