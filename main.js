// alert()

//PASO 3 BUSCA EL PRODUCTO
const productos = [];

class Producto {
    constructor(nombre, precioPromedio) {
        this.nombre = nombre;
        this.precioPromedio = precioPromedio;
    
    }
}
productos.push(new Producto("LECHUGA", 20));
productos.push(new Producto("TOMATE", 25));
productos.push(new Producto("PAPA", 30));
productos.push(new Producto("CEBOLLA", 35));


function buscarProducto(name, producto){
    return name.find(objeto => objeto.nombre === producto.toUpperCase());
}

function calcular(){ 
for (let index = 0; index < 4; index++) {
    let busqueda = buscarProducto(productos, prompt('BUSCAR PRODUCTO DE VERDULERIA'));
    if(busqueda != undefined ){
        alert('Producto: '+busqueda.nombre+ "\n" +"\n" + ' Precio Promedio: '+'$'+busqueda.precioPromedio);
    }else{
        alert('NO EXISTE PRODUCTO CON ESE NOMBRE');
    }
}
}
// calcular()

// fIN PASO 3 BUSCA EL PRODUCTO


// PASO 1 SELECCIONA EL RUBRO

let btn = document.getElementById('cartel1')
let btn2 = document.getElementById('cartel2')
let contador = 0;



function cambio(){

    if (contador==0){
        btn.classList.add('azul')
        btn2.classList.remove('azul')
        contador=1;
    }
    else{
        btn.classList.remove('azul')
        contador=0;
    }
}

function cambio2(){

    if (contador==0){
        btn2.classList.add('azul')
        btn.classList.remove('azul')
        contador=1;
    }
    else{
        btn2.classList.remove('azul')
        contador=0;
    }
}


btn.addEventListener('click',cambio,true);
btn2.addEventListener('click',cambio2,true);


// fIN PASO 1 SELECCIONA EL RUBRO



// PASO 2 SELECCIONA LOCALIDAD/BARRIO

let zona = document.getElementById('zona');
let localidad = document.getElementById('localidad');

let zonas = ['CABA', 'Zona Norte', 'Zona Sur', 'Zona Este', 'Zona Oeste'];

let localidades = ['C1', 'C2', 'C3', 'C4', 'C5', 'N1', 'N2', 'N3', 'N4', 'N5', 'S1', 'S2', 'S3', 'S4', 'S5', 'E1', 'E2', 'E3', 'E4', 'E5', 'O1', 'O2', 'O3', 'O4', 'O5',];


function verLugares(arreglo, lugar){
    let elementos = '<option selected disables>--Seleccione--</option>'

    for (let i=0; i < arreglo.length; i+=1){
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    lugar.innerHTML = elementos 
}

verLugares(zonas, zona);


function filtrar(array, inicio, fin, lugar){
    let filtro = array.slice(inicio, fin);
    verLugares(filtro, lugar);
}


zona.addEventListener('change', function(){
    let valor = zona.value 

    switch(valor){
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
