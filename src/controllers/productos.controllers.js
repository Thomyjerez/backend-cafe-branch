
export const listarProductos = (req,res)=>{
    res.send('aqui tengo que retornar un arreglo de productos')
}

export const crearProducto = (req,res)=>{
    // extraer del body los datos
    console.log(req.body)

    // agregar la validacion correspondiente
    // guardar el producto en la base de datos
    res.send('Esto es una prueba de la peticion GET')
}