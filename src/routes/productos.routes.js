import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

router.route('/productos')
    .get(listarProductos)
    // hacer las validaciones (check)
    // notEmpty para checkear que no este vacio el campo
    // withmessage es para dejarle un mensaje al usuario
    .post([
        check('nombreProducto').notEmpty()
        .withMessage('El nombre del producto es un dato obligatorio')
        .isLength({min:2, max:50})
        .withMessage('El nombre del producto debe tener entre 2 y 50 caracteres'),
        check('precio').notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom((value)=>{
            if(value>= 1 && value <= 10000){
                return true;
            }else{
                throw new Error('El precio debe estar entre 1 y 10000')
            }
        }),
        check('imagen').notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe enviar una URL valida'),
        check('categoria').notEmpty()
        .isIn(['bebida caliente','bebida fria','dulce','salado'])
        .withMessage('La categoria debe ser correcta')

    ],  crearProducto)

router.route('/productos/:id')
    .get(obtenerProducto )
    .put([
        check('nombreProducto').notEmpty()
        .withMessage('El nombre del producto es un dato obligatorio')
        .isLength({min:2, max:50})
        .withMessage('El nombre del producto debe tener entre 2 y 50 caracteres'),
        check('precio').notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom((value)=>{
            if(value>= 1 && value <= 10000){
                return true;
            }else{
                throw new Error('El precio debe estar entre 1 y 10000')
            }
        }),
        check('imagen').notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe enviar una URL valida'),
        check('categoria').notEmpty()
        .isIn(['bebida caliente','bebida fria','dulce','salado'])
        .withMessage('La categoria debe ser correcta')
    ],  editarProducto)
    .delete(borrarProducto)

export default router;


// app.get('/productos',(req,res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// }) 

// app.get('/productos2',(req,res)=>{
//     res.send('Esto es una prueba de la peticion GET')
// }) 



