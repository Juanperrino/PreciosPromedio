// alert()
let seleccionado = "Seleccionado";


function mostrar_img(src, width, height, alt) {
    let a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}

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

console.log(productos);

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

