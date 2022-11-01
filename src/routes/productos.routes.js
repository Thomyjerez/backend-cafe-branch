import { Router } from "express";
import { crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos')
    .get(listarProductos)
    .post(crearProducto)

router.route('/productos/:id')
    .get(obtenerProducto )
    .put(editarProducto)
// .delete()

export default router;


// app.get('/productos',(req,res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// }) 

// app.get('/productos2',(req,res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// }) 



