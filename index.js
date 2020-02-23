const express = require('express');
const server = express();

server.use(express.json());

const projects = [];

/**
 * req.method
 * Middleware global que retorna quantas vezes a requisição foi chamanda,
 * separando por tipo;
 */
server.use((req, res, next) => {
    console.count(`Request Type: ${req.method}`);

    next();
});

/**
 * req.params
 * Middleware local que verifica se o id do projeto existe. E chamado em todos
 * os metodos que recebe o id como parametro;
 */
function checkProjectExists(req, res, next) {
    const { projectId } = req.params;
    const project = projects.find(p => p.id == projectId);

    if (!project) {
        return res.status(404).json({ projectId: { message:'Project not found' } });
    }

    req.project = project;

    return next();
}

server.get('/projects', (req, res) => {
    return res.json(projects);
})

server.get('/projects/:projectId', checkProjectExists, (req, res) => {
    return res.json(req.project);
})

server.post('/projects', (req, res) => {
    const { id, title } = req.body;
    const project = {id, title, tasks:[]};

    projects.push(project);

    return res.status(201).json({ id: project.id });
})

server.post('/projects/:projectId/tasks', checkProjectExists, (req, res) => {
    const { title } = req.body;

    req.project.tasks.push(title);

    return res.json(req.project);
})

server.put('/projects/:projectId', checkProjectExists, (req, res) => {
    const { title } = req.body;

    req.project.title = title;

    return res.json(req.project);
})

server.delete('/projects/:projectId', checkProjectExists, (req, res) => {
    let index = projects.indexOf(req.project);
    
    projects.splice(index, 1);

    return res.json();
})

server.listen(3333);