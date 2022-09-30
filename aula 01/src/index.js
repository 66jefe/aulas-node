const { request, response } = require('express');
const express = require('express');
const req = require('express/lib/request');
const { uuid } = require('uuidv4');
const app = express();
app.use(express.json());

app.use(express.json());

const projects = []

app.get('/projects', (request, response) => {
    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    const id = uuid();
    const project = {
        id,
        title,
        owner
    };

    projects.push(project);
    return response.json(project);
})

app.put('/projects/:id', (request, response) =>{
    const {id} = request.params;
    console.log(id);
    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 4'
    ]);
});

app.listen(3333, () =>{
    console.log('Backend started!');
});

