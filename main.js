// alert()
// let seleccionado = "Seleccionado";


// function mostrar_img(src, width, height, alt) {
//     let a = document.createElement("img");
//     a.src = src;
//     a.width = width;
//     a.height = height;
//     a.alt = alt;
//     document.body.appendChild(a);
// }

// mostrar_img("./multimedia/Verduras.png", 200, 200, "verduras");



class Producto {
    constructor(nombre, precioPromedio) {
        this.nombre = nombre;
        this.precioPromedio = precioPromedio;
    
    }
}
const productos = [];
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


let btn = document.getElementById('cartel1')
let btn2 = document.getElementById('cartel2')
let contador = 0;



function cambio(){

    if (contador==0){
        btn.classList.add('azul')
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
        contador=1;
    }
    else{
        btn2.classList.remove('azul')
        contador=0;
    }
}


btn.addEventListener('click',cambio,true);
btn2.addEventListener('click',cambio2,true);



