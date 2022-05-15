// alert()

//PASO 3 BUSCA EL PRODUCTO

//BUSCADOR
let input = document.getElementById('autocompletado-input');
let autocompletado_resultado = document.getElementById('autocompletado-resultado');

input.addEventListener("keyup", (event) => {
    // console.log(event.target.value);
    autocompletado_resultado.style.display = "block";
    let key = (event.target.value);

    if (key.length > 1) {
        //buscar paises
        buscar(key);
    }
})

const buscar = (key) => {
    fetch(`https://restcountries.com/v3.1/name/${key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (Array.isArray(data)) {

                construir_lista(data.map((item) => {
                    return item.name.common;
                }));
            }
            else {
                construir_lista()
            }
        })
        .catch(err => { console.log(err) })
}

const construir_lista = (items = []) => {
    console.log(items);

    autocompletado_resultado.innerHTML = "";

    items.map((item) => {
        autocompletado_resultado.innerHTML += `<li>${item}</li>`
    })

}

autocompletado_resultado.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName == "li") {
        input.value = e.target.innerHTML;
        construir_lista();
    }
});
//FIN BUSCADOR


//localStorage

let productosCarniceria = ['ASADO', 'VACIO', 'PALETA', 'NALGA', 'CUADRIL']
let productosVerduleria = ['TOMATE', 'LECHUGA', 'CEBOLLA', 'PAPA']

function convertString(array) {
    return JSON.stringify(array)
}

let productosCarniceriaJson = convertString(productosCarniceria)
let productosVerduleriaJson = convertString(productosVerduleria)

function guardarLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}

guardarLocalStorage("productosCarniceriaJson", productosCarniceriaJson)
guardarLocalStorage("productosVerduleriaJson", productosVerduleriaJson)

arry = JSON.parse(localStorage.getItem("productosVerduleriaJson"))

let search = document.getElementById("search")
search.addEventListener('click', () => {
    for (index of arry) {
        // let produts = console.log(index)
    }
});



//end localStorage




// fIN PASO 3 BUSCA EL PRODUCTO


// PASO 1 SELECCIONA EL RUBRO

let btn = document.getElementById('cartel1')
let btn2 = document.getElementById('cartel2')
let contador = 0;



function cambio() {

    if (contador == 0) {
        btn.classList.add('azul')
        btn2.classList.remove('azul')
        contador = 1;
    }
    else {
        btn.classList.remove('azul')
        contador = 0;
    }
}

function cambio2() {

    if (contador == 0) {
        btn2.classList.add('azul')
        btn.classList.remove('azul')
        contador = 1;
    }
    else {
        btn2.classList.remove('azul')
        contador = 0;
    }
}


btn.addEventListener('click', cambio, true);
btn2.addEventListener('click', cambio2, true);


// fIN PASO 1 SELECCIONA EL RUBRO



// PASO 2 SELECCIONA LOCALIDAD/BARRIO

let zona = document.getElementById('zona');
let localidad = document.getElementById('localidad');

let zonas = ['CABA', 'Zona Norte', 'Zona Sur', 'Zona Este', 'Zona Oeste'];

let localidades = ['C1', 'C2', 'C3', 'C4', 'C5', 'N1', 'N2', 'N3', 'N4', 'N5', 'S1', 'S2', 'S3', 'S4', 'S5', 'E1', 'E2', 'E3', 'E4', 'E5', 'O1', 'O2', 'O3', 'O4', 'O5',];


function verLugares(arreglo, lugar) {
    let elementos = '<option selected disables></option>'

    for (let i = 0; i < arreglo.length; i += 1) {
        elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>'
    }

    lugar.innerHTML = elementos
}

verLugares(zonas, zona);


function filtrar(array, inicio, fin, lugar) {
    let filtro = array.slice(inicio, fin);
    verLugares(filtro, lugar);
}


zona.addEventListener('change', function () {
    let valor = zona.value

    switch (valor) {
        case 'CABA':
            filtrar(localidades, 0, 5, localidad);
            break
        case 'Zona Norte':
            filtrar(localidades, 5, 10, localidad);
            break
        case 'Zona Sur':
            filtrar(localidades, 10, 15, localidad);
            break
        case 'Zona Este':
            filtrar(localidades, 15, 20, localidad);
            break
        case 'Zona Oeste':
            filtrar(localidades, 20, 25, localidad);
            break
    }

})







// fIN PASO 2 SELECCIONA LOCALIDAD/BARRIO
