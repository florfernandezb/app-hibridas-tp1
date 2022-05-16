import express from 'express';
import ProductsRoute from './routes/app.route.js';

const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', ProductsRoute);

app.listen(1388, function() {
    console.log('Me conecté al puerto hhtp://localhost:1388');
});
