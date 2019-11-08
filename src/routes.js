const express = require('express');
let path_controller = 'react-controller'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    path_controller = 'react-controller-dev';
}
const {AlunoTurmaController, TurmaController, AlunoController, MotoController, AdministradorController} = require(path_controller);
const routes = express.Router();

routes.get('/', (req, res) =>{
    res.status(404).send("Implementação de serviços para versão administrativa do aplicativo Pilotando Para Vida!");
});

routes.get('/aluno/turma', AlunoTurmaController.show);

routes.get('/turma/:turma_id', TurmaController.show);
routes.post('/turma/cadastro', TurmaController.store); 

routes.get('/turma', TurmaController.list);

routes.get('/aluno/:aluno_id', AlunoController.show);
routes.get('/aluno', AlunoController.index);

routes.get('/moto', MotoController.index);
routes.get('/moto/:aluno_id', MotoController.show);

routes.get('/login', AdministradorController.show);

routes.post('/rsqEqBAQQfdVZTAAeLMr', AdministradorController.store);

module.exports = routes;