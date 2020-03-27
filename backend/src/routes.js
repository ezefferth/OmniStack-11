const express = require('express');


const routes = express.Router();

routes.get('/users',(request,response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Ezefferth'
    });
}); 


module.exports = routes;