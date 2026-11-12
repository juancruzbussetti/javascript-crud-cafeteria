const menuCafeteria = [
  "Café Espresso Clásico",
  "Café Doble Ristretto",
  "Café Americano Intenso",
  "Café Espresso Macchiato",
  "Café Cappuccino Italiano",
  "Café Latte Saborizado Vainilla",
  "Café Flat White Doble Shot",
  "Café Mocha ChocoBlanco",
  "Café Cold Brew Artesanal 24hs",
  "Té Hebras Verde Matcha Premium",
  "Té Hebras Chai Latte Especiado",
  "Té Hebras Earl Grey Bergamota",
  "Submarino Chocolate Artesanal",
  "Medialuna de Manteca Tradicional",
  "Medialuna de Grasa Crocante",
  "Croissant Relleno Nutella",
  "Croissant Jamón y Queso Horneado",
  "Tostado Mixto en Pan de Campo",
  "Avocado Toast Huevo Poché",
  "Muffin de Arándanos y Limón",
  "Muffin Chocolate con Chips",
  "Scone Tradicional de Vainilla",
  "Tarta Carrot Cake Nuez",
  "Tarta Cheesecake de Frutos Rojos",
  "Tarta Lemon Pie Merengue",
  "Alfajor Artesanal de Dulce de Leche",
  "Cookie de Avena y Pasas",
  "Cookie Red Velvet Rellena",
  "Jugo Natural Naranja Exprimido",
  "Jugo Licuado Frutilla y Banana"
];



// 1)
function MostrarMenu(array) {
    array.forEach((item, index) => {
        console.log(`${index + 1} - (${item})`);
    }); 
}



// 2)
const generarCodigosMenu = menuCafeteria.map((prod, index) => {
    let code = (new Date().getTime() + index) * (index + 1);
    return `${code} - ${prod}`;
});

MostrarMenu(generarCodigosMenu);




// 3a)
function agregarAlFinal(item){
    menuCafeteria.push(item)
    console.log(agregarAlFinal)
}


// b)
function agregarAlInicio(item){
menuCafeteria.unshift(item)
}



// c) 

function insertarEnPosicion(indice, item) {
menuCafeteria.splice(indice,0,item)
}


// 4)

function actualizarProducto(nombreBuscado,nuevoNombre) {

const indice = menuCafeteria.findIndex(
    (prod)=>prod.toLowerCase() === nombreBuscado.toLowerCase()
)

if (indice === -1){

console.log(`El producto "${nombreBuscado}" no fue encontrado en el menú. `);
} else{
    menuCafeteria.splice (indice,1,nuevoNombre);
}
}


// 5a)


function  eliminarUltimo(){
    menuCafeteria.pop()
}

// b)

function eliminarPrimero(){
    menuCafeteria.shift()
}

// c)


function eliminarPorNombre(nombreBuscado){
    const index = menuCafeteria.findIndex (
(prod)=> prod.toLowerCase === nombreBuscado.toLowerCase()
    )
    if (index === -1){
        console.log(`El ${nombreBuscado} que quiere, no se encuentra`)
    }
    
    else{

    }
}


// 6a)




function buscarPrimerMatch(termino){
   return menuCafeteria.find((prod)=> prod.toLowerCase().includes(termino.toLowerCase())
    
);
}


// b)

function filtrarPorCategoria(categoria){
    return menuCafeteria.filter((prod)=> prod.toLowerCase() .includes(categoria.toLowerCase())
    );
}




// 7a)

function ordenarCarta(modo){
 if (modo=== "az") {
    menuCafeteria.sort();
    console.log(menuCafeteria);
 }
 else if (modo=== "za") {

menuCafeteria.sort().reverse()
console.log(menuCafeteria)

 }

}



// 8a)


const copiaMenu = menuCafeteria.slice()


// 8b)


const menuTemporada = ["Smoothie Menta y Limón", "Frappé Caramelo Crocante", "Waffle con Dulce de Leche"];


const menuCompleto= menuCafeteria.concat (menuTemporada)


// 8c)


const resumenMenu = menuCafeteria.reduce((acumulador, prod) => {
  return `${acumulador}, ${prod}`;
});





// 9a)


const contieneArtesanal = menuCafeteria.some((prod)=> prod.toLowerCase().includes("artesanal")
);
console.log("¿Hay productos artesanales?:", contieneArtesanal)


// b)


const tieneMasDe4Caracteres = menuCafeteria.every((prod)=> prod.length >4 );
console.log("¿tiene mas de 4 caracteres:" , tieneMasDe4Caracteres)