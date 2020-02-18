const express = require('express');
const server = express();

server.use(express.json());

const projects = [
    {

        "id": "1",

        "title": "Calculadora"

    }
];

server.get('/projects', (req, res) => {
    return res.json(projects);
})

server.get('/projects/:projectId', (req, res) => {
    const { projectId } = req.params;
    const project = projects.find(p => pj.id == projectId)

    return res.json(project);
})

server.post('/projects', (req, res) => {
    const { id, title } = req.body;
    const project = {id, title, tasks:[]};

    projects.push(project);

    return res.json(projects);
})

server.post('/projects/:projectId/tasks', (req, res) => {
    const { title } = req.body;
    const { projectId } = req.params;

    const project = projects.find(p => p.id == projectId);

    project.tasks.push(title);

    return res.json(project);
})

server.put('/projects/:projectId', (req, res) => {
    const { id, title } = req.body;
    const project = {id, title, tasks:[]};

    projects.push(project);

    return res.json(projects);
})

server.listen(3333);