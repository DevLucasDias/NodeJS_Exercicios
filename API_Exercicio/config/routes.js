const express = require('express')
const routes = express.Router()

let db = [
    {'1':{nome: 'Cliente 1', idade: '20' }},
    {'2':{nome: 'Cliente 2', idade: '25' }},
    {'3':{nome: 'Cliente 3', idade: '22' }}
]
//Buscar dados
routes.get('/api/getClients', (req, res) => {
    return res.json(db)
})

// Inserir dados
routes.post('/api/addClients', (req, res) => {
    
    const body = req.body  
    if(!body)
    {
        return res.status(400).end()
    }  
    db.push(body)
    return res.json(body)
})

//Deleta dados
routes.delete('/api/deleteClients/:id', (req, res)=>{
    const id = req.params.id
    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(db)
})

module.exports = routes