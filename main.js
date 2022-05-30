// alert()
// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAbVeRAFmgkv4NlBsG0-xybXpbCDtioF8I",
    authDomain: "dbpp-57bf2.firebaseapp.com",
    projectId: "dbpp-57bf2",
    storageBucket: "dbpp-57bf2.appspot.com",
    messagingSenderId: "636932396973",
    appId: "1:636932396973:web:b41c44a36e405884beb324"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();







// PASO 1 SELECCIONA EL RUBRO

let rubro = document.getElementById('rubro');
let rubros = ['carniceria', 'verduleria'];

verLugares(rubros, rubro);


// fIN PASO 1 SELECCIONA EL RUBRO



// PASO 2 SELECCIONA LOCALIDAD/BARRIO
let localidad = document.getElementById('localidad');
let localidades = ['belgrano', 'caballito', 'palermo'];

verLugares(localidades, localidad);

// fIN PASO 2 SELECCIONA LOCALIDAD/BARRIO


//PASO 3 BUSCA EL PRODUCTO

let producto = document.getElementById('producto');
let productos = ['asado', 'vacio', 'bondiola', 'papa', 'lechuga', 'tomate'];


function verLugares(arreglo, lugar){
    let elementos = '<option selected disables></option>'

    for (let i=0; i < arreglo.length; i+=1){
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    lugar.innerHTML = elementos 
};


function filtrar(array, inicio, fin, lugar){
    let filtro = array.slice(inicio, fin);
    verLugares(filtro, lugar);
};

rubro.addEventListener('change', function(){
    let valor = rubro.value;

    switch(valor){
        case 'carniceria':
            filtrar(productos, 0, 3, producto);
        break
        case 'verduleria':
            filtrar(productos, 3, 6, producto);
        break
    }
});



const but = document.getElementById('but');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

function generator() {
    let x= Math.floor((Math.random()*19)+1)
    // console.log(x);
    document.getElementById('divImage').innerHTML=`
        <img src="img/resized/number${x}.jpg"
        style="
        background-size: contain;
        max-width:15em,
        min-width: 5em,
        background-size: 100%;
        ">
    `;
}

function ver(){

    rubro = document.getElementById('rubro').value;
    localidad = document.getElementById('localidad').value;
    producto = document.getElementById('producto').value;
    // console.log(rubro)
    // console.log(localidad)
    // console.log(producto)
    db.collection(rubro).where("localidad", "==", localidad).where("producto", "==", producto)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                Swal.fire({
                    title: `El $ Promedio de ${doc.data().producto} en ${doc.data().localidad}  es:`,
                    html: '<div id="divImage"></div>',
                    imageAlt: 'Custom image',
                    // confirmButtonText: 'OK',
                    // confirmButtonColor:'#0b445a',
                    showConfirmButton: false,
                    timer: 9500,
                    timerProgressBar: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: false,
                    footer:`$${doc.data().precio}/kg`,
                    customClass:{
                        popup:'popupClass',
                        title:'titleClass',
                        footer:'footerClass',
                    }
                })
                generator();
                esperar();

                // location.reload();

        });
    })
    
    .catch((error) => {
        console.log("Error al obtener documentos: ", error);
    });

}

// location.reload();

// fIN PASO 3 BUSCA EL PRODUCTO

function esperar(){
    setTimeout(() => {
        location.reload();
        form1.reset();
        form2.reset();
        form3.reset();
        console.log(rubro);
        $(document).ready(function(){
            $('html,body').scrollTop(0);
        });
    
    }, 10000);
}


const btnSwitch = document.querySelector('#switch');
const arriba = document.querySelector('#arriba')
const paso1 = document.querySelector('#paso1')
const paso2 = document.querySelector('#paso2')
const paso3 = document.querySelector('#paso3')
const botones = document.querySelector('#botones')
const abajo = document.querySelector('#abajo')





function cargarLocalStorage(){
    const dark = localStorage.getItem('dark');
    if(!dark){
        guardarValorLocalStorage('false');
    }else if(dark == 'true'){
        arriba.classList.add('dark');
        paso1.classList.add('dark');
        paso2.classList.add('dark');
        paso3.classList.add('dark');
        botones.classList.add('dark');
        abajo.classList.add('dark');
        rubro.classList.add('dark');
        producto.classList.add('dark');
        but.classList.add('dark');
    }
}

function guardarValorLocalStorage(value){
    localStorage.setItem('dark', value);
}

function cargarLocalStorage2(){
    const active = localStorage.getItem('active');
    if(!active){
        guardarValorLocalStorage2('false');
    }else if(active == 'true'){
        btnSwitch.classList.add('active');
    }
}

function guardarValorLocalStorage2(value){
    localStorage.setItem('active', value);
}

cargarLocalStorage();
cargarLocalStorage2();


btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    arriba.classList.toggle('dark');
    paso1.classList.toggle('dark');
    paso2.classList.toggle('dark');
    paso3.classList.toggle('dark');
    botones.classList.toggle('dark');
    abajo.classList.toggle('dark');
    rubro.classList.toggle('dark');
    producto.classList.toggle('dark');
    but.classList.toggle('dark');
    guardarValorLocalStorage2(btnSwitch.classList.contains('active'));
    guardarValorLocalStorage(arriba.classList.contains('dark'));
})


