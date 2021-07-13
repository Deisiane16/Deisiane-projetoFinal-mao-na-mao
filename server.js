const { request } = require('express');
const express = require('express');
const app= express();

app.get("/", (request, response) => {
    response.send( 'span style = "color: #f00;"> Mão na Mão" - Seja um voluntario! Ajude algum abrigo carnte mais próximo.<span>')
});

const PORT = procs.env.PORT || 5000;

app.listen(port, () =>{
    console.LOG("listening on port " + port);
})
