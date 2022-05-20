import express from 'express';
import AppRoute from './routes/app.route.js';

const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', AppRoute);

app.listen(1388, function() {
    console.log('Me conecté al puerto http://localhost:1388');
});
