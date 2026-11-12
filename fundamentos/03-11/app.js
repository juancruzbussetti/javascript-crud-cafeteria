const productosTecnologicos = [
  "Smartphone MarcaA Pro 256GB",
  "Smartphone MarcaB Lite 128GB",
  "Smartphone MarcaC Ultra 512GB",
  "Laptop MarcaA Air 16GB RAM",
  "Laptop MarcaB Pro 32GB RAM",
  "Laptop MarcaC Office 8GB RAM",
  "Auriculares Inalámbricos Sony NC",
  "Auriculares Inalámbricos Bose Comfort",
  "Auriculares Inalámbricos Apple Pro",
  "Smartwatch Deportivo Garmin GPS",
  "Smartwatch Casual Samsung Fit",
  "Smartwatch Premium Apple Watch",
  "Monitor Gaming 27 pulgadas 144Hz",
  "Monitor Curvo 34 pulgadas Ultrawide",
  "Monitor Oficina 24 pulgadas 4K",
  "Tablet GamaAlta 12 pulgadas",
  "Tablet Media 10 pulgadas",
  "Tablet Económica 8 pulgadas",
  "Teclado Mecánico RGB BlueSwitch",
  "Teclado Mecánico Compacto RedSwitch",
  "Teclado Membrana Ergonómico",
  "Mouse Inalámbrico Precisión Pro",
  "Mouse Ergonómico Vertical",
  "Mouse Gaming Sensor Óptico",
  "Cámara Mirrorless 4K Profesional",
  "Cámara Compacta Vlogging",
  "Cámara Deportiva Action Cam",
  "Consola Videoconsola NextGen A",
  "Consola Videoconsola Portátil B",
  "Consola Videoconsola Retro Edition",
];




const buscadorProducto = (producto) => {
    const resultadoBusqueda = productosTecnologicos.filter((item) => 
        item.toLowerCase().includes(producto.toLowerCase())
    );

    if (resultadoBusqueda.length > 0) {
        return resultadoBusqueda;
    } else {
        console.warn("No se encontraron productos para esta busqueda");
    }
};


// for each

productosTecnologicos.forEach((item) => console.log(`${index + 1} - ${item}`), 

);

