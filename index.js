const express = require('express');
const server = express();

server.use(express.json());

const projects = [
    {
        "id": "1",
        "title": "Calculadora"
    }
];

/**
 * Middleware global
 */
server.use((req, res, next) => {
    console.time('Request');
    console.log(`Metodo chamado: ${req.method}`);

    next();

    console.timeEnd('Request');
});

/**
 * Middleware local
 */
function checkProjectExists(req, res, next) {
    const { projectId } = req.params;
    const project = projects.find(p => p.id == projectId);

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
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
    const { title } = req.body;
    const { projectId } = req.params;

    const project = projects.find(p => p.id == projectId);

    project.title = title;

    return res.json(project);
})

server.delete('/projects/:projectId', (req, res) => {
    const { projectId } = req.params;
    const project = projects.find(p => p.id == projectId);

    projects.splice(project, 1);

    return res.json();
})

server.listen(3333);