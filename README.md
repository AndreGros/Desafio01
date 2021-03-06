 # Desafio 1: Conceitos do NodeJS

Criar uma aplicação para armazenar projetos e tarefas utilizando [Express](https://expressjs.com/pt-br/starter/installing.html).

**Rotas**

 - POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

 - GET /projects: Rota que lista todos projetos e suas tarefas;

 - PUT /projects/id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

 - DELETE /projects/id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

 - POST /projects/id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
 
**Middlewares**

 - Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

 - Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;
 
 ## Tecnologias utilizadas no desafio
 
 - Node.js
 - Express.js
 - Yarn
 - Nodemon
 - Newman (Usada para rodar os testes)
 
 ## Ferramentas utilizadas no desafio
 
 - Visual studio code
 - Insomnia 
 - Postman

## Testando a aplicação

### Pré requisitos

 - Ter o [node.js](https://nodejs.org/en/) versão LTS instalado
 - Ter o [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) versão 1.XX.X instalado
 - Ter o [Git](https://git-scm.com/downloads) instalado

### Subindo a aplicação e testando

O primeiro passo é clonar o repositório na sua maquina, para isto rode:

`git clone https://github.com/AndreGros/Desafio01.git`

Acesse a pasta do projeto e rode o comando abaixo, para atualizar as dependencias, no terminal:

`yarn install`

Agora rode o comando abaixo para instalar o newman, que vai permitir rodar os testes da aplicação:

`yarn global add newman`

Com as dependencias atualizadas e o newman instalado já da para iniciar o servidor node, para isto rode o comando abaixo no terminal:

`yarn dev`

Agora abra outro terminal, e mantenha o terminal que você iniciou o servidor node aberto. No novo terminal rode o seguinte comando para rodar os testes da aplicação:

`yarn test`