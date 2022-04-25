require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const RouterUser = require('./routes/routesUser');
const RouterLogin = require('./routes/routesLogin');
const RouterCategories = require('./routes/routesCategories');
const RouterPost = require('./routes/routesBlogPost');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(bodyParser.json());

app.use('/user', RouterUser);
app.use('/login', RouterLogin);
app.use('/categories', RouterCategories);
app.use('/post', RouterPost);