import {Router} from 'express';
import CartManager from '../clases/CartManager.js';

const routerCarts = Router();
const cartManager = new CartManager("./src/db/carrito.json");

routerCarts.post('/', async(req,res)=>{
    try {
        return res.send(await cartManager.createCart())
    } catch (error) {
        
    }
})

routerCarts.get('/:cid', async(req,res)=>{
    let cartId= req.params.cid ; 
    const carrito = await cartManager.getCartById(cartId);
    return res.send(carrito.products)
})

routerCarts.post('/:cid/product/:pid', async(req,res)=>{
    let cartId = req.params.cid
    let pId = req.params.pid
    const newProduct = await cartManager.addProduct(cartId,pId);
    return res.send(newProduct)
})
export default routerCarts;