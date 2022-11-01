import Producto from "../models/producto"

export const listarProductos = async(req,res)=>{
    try{
        console.log(req.body)
        
        // buscar todos los productos en la base de datos
         const listaProductos = await Producto.find();
         // responder al usuario que todo salio bien
        res.status(200).json(listaProductos)
     } catch(error) {
         console.log(error)
         res.status(404).json({
             mensaje:'Error al intentar buscar los productospo0iug'
         })
     }
}

export const crearProducto = async(req,res)=>{
   try{
       // extraer del body los datos
       console.log(req.body)
       
       // agregar la validacion correspondiente
      // siempre validar los datos en el body 
       
       const productoNuevo = new Producto(req.body);
       // guardar el producto en la base de datos
        await productoNuevo.save();
        // responder al usuario que todo salio bien
       res.status(201).json({
        mensaje:'El producto fue correctamente creado'
       })
    } catch(error) {
        console.log(error)
        res.status(400).json({
            mensaje:'Error al intentar agregar un producto'
        })
    }
}


export const obtenerProducto = async(req,res)=>{
    try{
        // obtener el parametro
        console.log(req.params.id)
        // pedirle a la base de datos buscar el documento que coincide con el id del parametro
        const productoBuscado = await Producto.findById(req.params.id);
        // responder con el producto encontrado
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:'Error no se pudo encontrar el producto solicitado'
        })
    }

}
export const editarProducto = async(req,res)=>{
    try{
        // buscar un producto por el id, luego modificar los datos con el body
        await Producto.findByIdAndUpdate(req.params.id,req.body)
        // responder al frontend
        res.status(200).json({
            mensaje:'El producto fue editado correctamente'
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:'Error el producto solicitado no pudo ser modificado'
        })
    }

}