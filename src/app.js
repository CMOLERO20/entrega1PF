import  express  from "express";     
import routerProducts from "./routes/productos.js"; 
 import routerCarts from "./routes/carts.js";   

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', routerProducts);
app.use('/api/carts', routerCarts);

app.listen(8080, ()=> {
    console.log('servidor corriendo')
})