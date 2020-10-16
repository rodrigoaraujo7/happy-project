//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
//ultilizar body do req
.use(express.urlencoded({ extended: true }))

//ultilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criar rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphange)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500);