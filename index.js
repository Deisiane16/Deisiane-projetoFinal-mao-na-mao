const express = require('express')

const server = express();

server.use(express.json());

const abrigos = ['Casa de repouso São Francisco - Endereço: Estr do Arraial, 3140 Tamarineira - Recife, PE CEP: 52051-380', 'RESIDENCIAL GERIÁTRICO AMARILLYS - Endereço: R Luiz Guimarães, 333 - Poço - Recife, PE', 'lar do ancião - Endereço: Av Afonso Olindense, 1764 - Várzea - Recife, PE.','lar Nossa senhora de fatima, Endereço: Rua sergipe, 87 - vila rica - Jaboatão dos guararapes - PE.', 'Lar santo expedito, Endereço: Travessa nossa senhora da luz, 14  santo aleixo Jaboatão dos guararapes - PE.'];

// retorna um abrigo
server.get('/abrigos/:index', (req, res) => {
    const { index} = req.params;

    return res.json(abrigos[index]);

});

// retornar todos os abrigos

server.get('/abrigos', (req, res) => {
    return res.json(abrigos);
})

// cadastrar novo abrigo

server.post('/abrigos', (req, res) => {
    const { name } = req.body;
    abrigos.push(name);


    return res.json(abrigos);
});

// atualizar o cadastro

server.put('/abrigos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    abrigos[index] = name;

    return res.json(abrigos);

    
});

// deletar um abrigo
server.delete('/cursos/:index', (req, res) =>{
    const { index } = req.params;

    abrigos.splice(index, 1);
    return res.json({ message: " O abrigo foi deletado"});

});


server.listen(3000);